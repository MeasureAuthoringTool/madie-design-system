# Header Component

## Config

To populate the header's content, a `content` prop must provided. If one is not provided, the component will use `default-content.json`. The `content` prop is expected to be an array of objects where each object represents one of the header items (i.e. "About", "MIPs", etc.).

Here is an example content structure:

```json
[
  {
    "name": "About",
    "subtitle": "Quality Payment Program",
    "href": "/about"
  },
  {
    "name": "Resources",
    "subtitle": "Help, Support and Resources",
    "columns": [
      [
        {
          "heading": "Resource column 1",
          "items": [
            {
              "name": "Timeline and Important Deadlines",
              "type": "link",
              "href": "/"
            }
          ]
        }
      ],
      [
        {
          "heading": "Resource column 2",
          "items": [
            {
              "name": "Help and Support",
              "type": "link",
              "href": "/"
            }
          ]
        }
      ]
    ]
  }
]
```

### Header Items

Each of these objects represent an item in the header. These can be plain links or buttons that trigger a dropdown menu. If an `href` is provided instead of `columns`, the header item will be a link -- and vice versa.

| Property name | Type     | Required | Description                                             |
| ------------- | -------- | -------- | ------------------------------------------------------- |
| `name`        | `String` | `true`   | Name shown for the header link                          |
| `subtitle`    | `String` | `true`   | Text shown underneath the `name`                        |
| `href`        | `String` | `false`  | URL link path if the header item is not a dropdown menu |
| `columns`     | `Array`  | `false`  | Columns in the dropdown menu                            |

### Menu Sections

Each of these objects represent a section within a column in a header item menu.

| Property name | Type     | Required | Description                          |
| ------------- | -------- | -------- | ------------------------------------ |
| `heading`     | `String` | `false`  | Title for link section               |
| `items`       | `Array`  | `true`   | Each link/section in the header menu |

### Menu Items

Each of these objects represent a link within a header item menu.

| Property name | Type     | Required | Default  | Description                                                |
| ------------- | -------- | -------- | -------- | ---------------------------------------------------------- |
| `name`        | `String` | `true`   | N/A      | Name shown for the header link                             |
| `href`        | `String` | `true`   | N/A      | URL link path                                              |
| `type`        | `String` | `false`  | `'link'` | URL link type. Can be `'link'`, `'button'`, or `'sublink'` |

- `'link'`: Normal `<a>` tag link
- `'button'`: Outline button
- `'sublink'`: `<li>` link

## Cookies

When a user succesfully logs into QPP the user will receive the following
cookies.
| Cookie | Description |
|-------------------------------------|--------------------------------------|
| qpp_auth_token | auth token |
| qpp_has_authorizations | user has authorizations |
| qpp_has_non_registry_authorizations | user has non registry authorizations |

## Authenticated Links

| Link                         | Cookie                                   | Property                          |
| ---------------------------- | ---------------------------------------- | --------------------------------- |
| Account Home                 | qpp_auth_token present                   |                                   |
| Eligibility & Reporting      | qpp_has_authorizations=true              |                                   |
| Performance Feedback         | qpp_has_authorizations=true              |                                   |
| Doctors & Clinicians Preview | qpp_has_non_registry_authorizations=true | showPhysicianCompareLink=true     |
| Facility Based Preview       | qpp_has_authorizations=true              | showFacilityBasedPreviewLink=true |
| Manage Access                | qpp_auth_token present                   |                                   |
| Sign Out                     | qpp_auth_token present                   |                                   |

## Review Claims-based Submission Link

Review Claims-based Submission link has been deleted

## Dev Pre Environment

When the application is in Dev Pre mode the Header only has the Sign Out link.
