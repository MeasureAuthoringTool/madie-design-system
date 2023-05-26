# Breadcrumb Component

The Breadcrumb component is a secondary navigation scheme that reveals the user's location.

### Props

| Property name         | Type       | Required | Default Value | Description                               |
| --------------------- | ---------- | -------- | ------------- | ----------------------------------------- |
| `breadcrumbClass`     | `String`   | `false`  | ''            | class to append to Breadcrumb nav element |
| `crumbs`              | `Array`    | `true`   |               | array of breadcrumbs                      |
| `dark`                | `Boolean`  | `false`  | `false`       | Use dark mode theme                       |
| `RouterLink`          | `Function` | `false`  | `null`        | Link component to use instead of `<a>`    |
| `routerExcludedLinks` | `Array`    | `false`  | `[]`          | Array of paths to exclude from using Link |

### Crumbs

Each crumb can be a string or an object with the following properties.

| Property name | Type     | Required | Description                |
| ------------- | -------- | -------- | -------------------------- |
| `url`         | `String` | `true`   | url                        |
| `title`       | `String` | `true`   | Menu item string displayed |
| `category`    | `String` | `true`   | Data tracking category     |
| `label`       | `String` | `true`   | Data tracking label        |

### RouterLink

The `RouterLink` is only used by the Frontend to enable using push state for navigation. The `routerExcludedLinks` provides a way to opt certain links out of using the RouterLink.
