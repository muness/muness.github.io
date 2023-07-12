---
title: "Implementing SLOs for Data Quality"
date: 2023-07-12 14:00:00 +0500
author: muness
comments: true
pin: true
draft: true
---

The most important chapter in [Google's SRE Workbook](https://sre.google/books/) is on [implementing SLOs](https://sre.google/workbook/implementing-slos/):

> Service level objectives (SLOs) specify a target level for the reliability of your service. Because SLOs are key to making data-driven decisions about reliability, they’re at the core of SRE practices.

Achieving a suitable level of Data Quality is a key aspect of Data and we need a systemic way to measure and improve it. These well understood and used mental models from the SRE world can be applied to Data Engineering to do just that. As such this post presents the SRE ideas of Error budget policies, SLOs and suggests how they can be applied to data quality. I intentionally modeled the structure of the post to match the chapter.

Note that a later chapter in the same book covers applying SLOs to [Data Processing Pipelines](https://sre.google/workbook/data-processing/). I didn't find it to be a suitable primer on applying SLOs to Data Quality, hence this post.

## Why Data Engineering needs SLOs

In the realm of data, just as in software engineering, 100% quality (or reliability) is neither achievable nor desirable. Instead, we aim for a high level of quality that balances the need for accuracy with the practical realities of data collection and processing. This is where service level objectives (SLOs) and error budgets come into play.

**Service Level Objectives (SLOs)** are specific, measurable goals that represent the desired level of service. They are typically expressed as a percentage, such as "99.9% of data records should be error-free."

**Error Budgets** represent the amount of error that you're willing to tolerate. If your error budget is exhausted (i.e., the actual error rate exceeds the SLO), then you need to take action to improve data quality. For instance, if your SLO is 2% and your actual error rate is 3%, you've exceeded your error budget and need to address the issues causing the additional errors.

### Quality: Fitness for Purpose

The first thing to understand about data quality is that it's all about fitness for purpose. There's no such thing as absolute data quality. Instead, the quality of a dataset is determined by how well it suits the specific tasks it's intended for. This might involve serving as the basis for business intelligence reports, feeding into machine learning models, or supporting operational processes.

## Getting Started

### Data Quality and Error Budgets

An SLO is a target level of service that you aim to provide to your users. For a data pipeline, an SLO might specify that no more than 2% of records should contain errors. The corresponding service level indicator (SLI) is the actual percentage of records that contain errors. For example, if you have a dataset of 1,000 records and 20 of them contain errors, your SLI would be 2%.

An error budget is the amount of error that you're willing to tolerate. If your error budget is exhausted (i.e., the actual error rate exceeds the SLO), then you need to take action to improve data quality. Conversely, if you're consistently meeting your SLOs, it might be a sign that you can afford to take on more risk and push for more ambitious goals.

### What to Measure: using SLIs

**Service Level Indicators (SLIs)** are a crucial part of implementing SLOs. They provide a measurable way to track the level of service provided. For data quality, SLIs could be based on the percentage of records with errors, the number of duplicate records, or the number of missing values.

These are high-level examples and the actual implementation would depend on the specifics of your data and your data pipeline. However, they should give you a starting point for defining your own SLIs.

Sure, let's flesh out these SLIs:

#### Data SLIs

##### Usability

- **Relevance**: Does the data contain the necessary fields and types of data required for its intended use? This can be measured by checking if all required fields are present in the dataset.
- **Consistency**: Is the data consistent across all records? This can be measured by checking if the same type of data is stored in the same format across all records.
- **Completeness**: Does the data contain all the necessary records for its intended use? This can be measured by checking if the number of records in the dataset meets the expected number.
- **Encode business rules**: Are business rules and logic accurately represented in the data? This can be measured by checking if the data accurately reflects known business rules and logic.

##### Constraints

- **Data Presence**: Check if the data table or dataset is empty. If it's empty, then this SLI is not met.
- **Data Uniqueness**: Check for duplicate records in the data. If there are duplicates, then this SLI is not met.
- **Non-Null checks**: Check for null values in columns that should always have a value. If there are null values, then this SLI is not met.
- **Data Cardinality**: Check the grain of relations. For example, if there should be one sales record per transaction, check if there are any transactions with more than one sales record. If there are, then this SLI is not met. This might include more nuanced forms of cardinality checks, for example checking that every product with at least one sale has rows in the profit per product table.

##### Regression resilience

- **Failure persistence**: I've seen tests that flip flop from failure to success based on when some upstream data has been ingested or other external dependencies. While I strive to have tests that fail persistently when there are real problems, this isn't always viable, at least not without extending a DAG to things like ingest jobs or dump jobs. In lieu of that extra engineering, and when it makes sense we may measure how persistent a failure is, and only consider an SLO in violation when a specific test fails multiple times per week or multiple times in a row.
- **Consistency over time**: Check if the data remains consistent over time. If there are significant changes in the data that are not due to real-world changes, then this SLI is not met.

##### Trends

- **Data Growth**: Check if the amount of data is increasing over time. If it's not, then this SLI is not met.
- **Data Variation**: Check for unexpected drops or non-increases in data per dimension. If there are any, then this SLI is not met.
- **Seasonality**: Check if seasonal trends hold. This could be done by comparing the current data to the same period in previous years.
- **Aggregate Outliers**: Check for unexpected outliers in aggregated data. This could be done by calculating the average and standard deviation for the aggregated data, and checking if any data points fall outside a certain range.

##### Timeliness

- **Upstream freshness** We can check each ingested dataset for completeness. What is the latest `processed_at` and/or `timestamp` in the raw data, for example could be checked.
- **Modeled data freshness** Likewise, we can check that we have processed data within the last X hours and that the data itself is relatively up to date.

##### Infrastructure

- **Reserved Capacity Utilization**: In infrastructure, we often reserve capacity for workloads. If peak utilization < 100% of reserved, per resource type, we've reserved more than we need to. I've seen this in practice with a BigQuery user and their with BI Engine reservations, for example, where a team had reserved 200GB of capacity but they didn't even have 20 tables <= 10GB each (which is the max size of a table that can be sped up using BI Engine), meaning they were paying for capacity that couldn't even be used.
- **Cost**: We can compare cost week on week or month on month per resource type to detect spikes in cost growth.

##### Coherence and Coupling

Coherence refers to the ability to use different parts of the warehouse together in a meaningful and consistent manner. Low coupling, on the other hand, means that the design of one part of the warehouse does not overly depend on the design of another part. Some potential SLIs for data warehouses include:

- **Conformed Dimensions**: The use of [Conformed Dimensions](https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/conformed-dimension/) can be viewed as an SLI of coherence, allowing "both analytic consistency and reduced future development costs". Measuring this in an entirely automated way might be tricky: I'd start by identifying duplicate column names across table and ensuring, manually that they all mean the same thing. When we detect mismatches, we note them as negative indicators.
- **Adherence to star schema**: Does the data warehouse follow the star schema design, which is known for its simplicity and effectiveness? This can be measured by checking if the tables in the warehouse follow the star schema design, with one fact table connected to multiple dimension tables.Sure, here are some potential bullet points:
- **Dimension Type Consistency**: Are the dimensions in the data warehouse consistently using Type 1 (overwrite) or Type 2 (preserve history) methods? This can be measured by checking the design of each dimension table and ensuring they follow the chosen method.
- **Fact Table Consistency**: Are the fact tables in the data warehouse consistent in their naming and usage conventions? This can be measured by checking the naming conventions of fact tables and ensuring they follow a consistent pattern. Additionally, the usage of fact tables (how they are joined with dimension tables, how they are used in queries, etc.) should also follow a consistent pattern.
- **Data Mesh Standards**: If a data mesh is used to distribute responsibility over different domains, are there set standards for fact tables, dimensions, and conformed attributes? This can be measured by checking if the different domains in the data mesh follow the set standards.

## Moving from SLI Specification to SLI Implementation

### Measuring the SLIs

Once you've defined your SLIs, you need to measure them. This could involve running SQL queries to count the number of records with errors, duplicates, or missing values.

### Using the SLIs to Calculate Starter SLOs

Once you've measured your SLIs, you can use them to set your initial SLOs. For instance, if your SLI for record errors is 2%, you might set an SLO of no more than 2% of records containing errors.

## Getting Stakeholder Agreement

### Establishing an Error Budget Policy

An error budget policy outlines what actions will be taken if the error budget is exhausted. For example, you might decide to freeze all new feature development and focus on improving data quality until the error rate is back within the SLO.

### Documenting the SLO and Error Budget Policy

It's important to document your SLOs and error budget policy, so everyone in the organization understands what they are and why they're important. This documentation should include the service name, the SLI, the SLO, and the error budget.

## Continuous Improvement of SLO Targets

Start with one to three SLO areas, and no more than three SLIs for each. Then make sure you meet the SLO before you add more to improve data quality. Over time, you should aim to improve your SLO targets. This might involve reducing the acceptable error rate, or it might involve adding new SLIs and SLOs as your data pipeline evolves.

## Decision Making Using SLOs and Error Budgets

SLOs and error budgets can be powerful tools for decision making. If your error budget is exhausted, it's a clear signal that you need to take action to improve data quality. Conversely, if you're consistently meeting your SLOs, it might be a sign that you can afford to take on more risk and push for more ambitious goals.

## Advanced Topics

### Measuring Upstream system SLIs and Holding them accountable

In data pipelines, we clearly depend on third parties: data is ingested from other systems. We can't rely on peer teams or third parties to measure SLIs or note SLA violations, so we may have to measure those ourselves, help them establish SLAs they can live with and then let them know when they violate them.

### Grading Interaction Importance

Some interactions might be critical to your business, while others might be less so. By grading the importance of different interactions, you can allocate your error budget more effectively. For example, you might decide that interactions involving financial data are more important than interactions involving marketing data, and allocate more of your error budget to ensuring the quality of the financial data.

## Examples

### Example SLO Document

**Pipeline Name**: Sales Data

**SLIs**:

- Data Presence: 99.9% of data tables or datasets should not be empty.
- Data Uniqueness: 99.9% of records should not be duplicates.
- Non-Null checks: 99.9% of mandatory columns should not have null values.
- Data Cardinality: 99.9% of transactions should have only one sales record.

**SLOs**:

- Data Presence: No more than 0.1% of data tables or datasets should be empty.
- Data Uniqueness: No more than 0.1% of records should be duplicates.
- Non-Null checks: No more than 0.1% of mandatory columns should have null values.
- Data Cardinality: No more than 0.1% of transactions should have more than one sales record.

**Error Budget**: If the error rate exceeds the SLO (i.e., the error budget is exhausted), we will take action to improve data quality.

### Example Error Budget Policy

**Policy Name**: Data Quality Improvement Policy

**Policy Statement**: If the error budget is exhausted, we will freeze all new development and focus on improving data quality until the error rate is back within the SLO.

**Policy Details**:

- We will monitor the error rate on a weekly basis.
- If the error rate exceeds the SLO for two consecutive weeks, we will initiate the Data Quality Improvement Policy.
- During the freeze, all efforts will be directed towards identifying and addressing the issues causing the additional errors.
- We will not lift the freeze until the error rate is back within the SLO for two consecutive weeks.

These are just examples and the actual documents would depend on the specifics of your data and your data pipeline. However, they should give you a starting point for defining your own SLO document and Error Budget Policy.

## Conclusion

Implementing SLOs for data quality isn't straightforward. By defining and measuring quality:

- we are clearer within our teams and with our stakeholders about what we mean.
- we significantly improve our signal to noise ratio when it comes to uncovering and addressing quality problems. (How often have you muted that `#data-quality-alerts` channel?!)
- we create room for addressing quality problems when it's oh so easy to keep shipping more features instead.
- we avoid gold-plating and improving quality past the point where it benefits us to do so.

## Glossary of Terms

Here's a recap of some terms I used above that may cause confusion.

- **Service Level Indicator (SLI)**: A measure of the level of service provided. For data quality, an SLI might be the percentage of records with errors, the number of duplicate records, or the number of missing values.
- **Service Level Objective (SLO)**: A specific, measurable goal that represents the desired level of service. For a data pipeline, an SLO might specify that no more than a certain percentage of records should contain errors.
- **Service Level Agreement (SLA)**: A contract between a service provider and a user that specifies the level of service that the provider is expected to deliver. An SLA might specify, for example, that a data pipeline should be available 99.9% of the time, and that no more than 1% of data records should contain errors.
- **Error Budget**: The amount of error that you're willing to tolerate. If your error budget is exhausted (i.e., the actual error rate exceeds the SLO), then you need to take action to improve data quality.
- **Data Pipeline**: A system for moving and processing data from one place to another. In the context of data quality, a data pipeline might involve collecting data from various sources, cleaning and transforming the data, and loading it into a database or data warehouse.
- **Data Quality**: The degree to which a set of data meets the needs of its users. High-quality data is accurate, complete, timely, relevant, and consistent.
- **Data Cardinality**: The uniqueness of data values in a column. For example, if a column contains the ID number for each transaction, and each transaction has a unique ID, then that column has high cardinality.
- **Data Uniqueness**: The absence of duplicate data in a dataset or a database. If a dataset or a database contains duplicate records, then there is a data uniqueness issue.
- **Non-Null Checks**: Checks to ensure that columns that should always have a value do not contain null values. If a column that should always have a value contains null values, then there is a non-null check issue.
