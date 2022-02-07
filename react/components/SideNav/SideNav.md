# SideNav Component

## Cookies

When a user succesfully logs into QPP the user will receive the following
cookies.

| Cookie                              | Description                             |
| ----------------------------------- | --------------------------------------- |
| qpp_auth_token                      | auth token                              |
| qpp_has_authorizations              | user has authorizations                 |
| qpp_has_non_registry_authorizations | user has non registry authorizations    |
| user_has_apm_payments               | user has at least one APM Payment       |
| qpp_is_dev_pre                      | user is in Dev Pre environment          |
| qpp_ehr_authorized                  | user is authorized for at least one EHR |

## Links for authenticated users

| Link                         | Cookie                                   |
| ---------------------------- | ---------------------------------------- |
| Account Home                 | Always visible                           |
| Eligibility & Reporting      | qpp_has_authorizations=true              |
| Facility Based Preview       | qpp_has_authorizations=true              |
| Performance Feedback         | qpp_has_authorizations=true              |
| APM Incentive Payments       | user_has_apm_payments=true               |
| Doctors & Clinicians Preview | qpp_has_non_registry_authorizations=true |
| Exceptions Applications      | Always visible                           |
| Targeted Review              |                                          |
| Reports                      |                                          |
| Manage Access                | Always visible                           |
| Help and Support             | Always visible                           |

## Manage Access - Registry/QCDR Self-Nomination

When showSelfNomination property is true the Registry/QCDR Self-Nomination link is available.

## Review Claims-based Submission Link

Review Claims-based Submission link has been deleted

## Dev Pre Environment

When the application is in Dev Pre mode the sidenav links are as follows.

| Link            | Cookie                  |
| --------------- | ----------------------- |
| My Applications | qpp_ehr_authorized=true |
| My Test Data    | qpp_ehr_authorized=true |
| Manage Access   | qpp_is_dev_pre=true     |
| Developer Tools | qpp_is_dev_pre=true     |
