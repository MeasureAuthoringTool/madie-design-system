# qpp-style-angular

## Coding Standards

### Components

When creating components that work with native elements directly (example buttons) opt for extending the native API for the element rather than encapsulating it. We try to take as much inspiration from <https://material.angular.io/> for example. The developer experience is enriched and guided rather than limited when you allow full access to a native
element rather than a limited API via component inputs. This means tending towards using directives, or components with attribute selectors and content projection rather than traditional components. Not all components in this library currently follow this pattern, but we will be working towards this goal!

Whenever possible, use `OnPush` change detection for a more performant and reactive UI.

## Getting Started

### Installing npm packages
```shell
cd /angular
npm ci

cd /shared
npm ci
````

### Unit testing
```shell
cd /angular
npm run test:lib:watch

cd /angular
npm run test:lib
```

### Running the demo application
```shell
cd /angular
npm run start
```

### Using the Library Build locally via NPM Link
1. cd to the qpp-style-angular folder and run
```shell
cd qpp-style/angular
npm run build:lib
```
2. After the build finishes, run
```shell
cd qpp-style/angular/dist/qpp-style-angular
npm link
```
3. go to the project you would like to link and run
```shell
npm link @cmsgov/qpp-style-angular
```
4. Run the client application to see the linked library being used 
5. Repeat steps 1-4 when new changes are made

## Integrating the Library with your application

### Required dependencies
Some components in this library are built upon the angular material library components, such as the CMSModalModule and CMSIconsModule. Therefore, `@angular/material` and `@angular/cdk` are required dependencies prior to installing the `@cmsgov/qpp-style-angular` package.

### Utilizing icon assets
In order to fully utilize the icons in the CMSIconsModule in this library, the application must include the following configuration in the `angular.json` build options so that the assets get compiled into the application's build option assets:
```json5
// angular.json
{
  //...  
  "build": {
    //... 
    "options": {
      //...      
      "assets": [
        {
          "glob": "**/*",
          "input": "node_modules/@cmsgov/qpp-style-angular/assets",
          "output": "assets/svg"
        }
      ],
    },
  }
}
```
