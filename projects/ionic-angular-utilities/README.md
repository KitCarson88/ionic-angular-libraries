# Ionic Angular Utilities

The library contains some Ionic and Angular utilities usable in a own project.

## Overview
The project contains following libraries:
- Ionic Angular Utilities

## Ionic Angular Utilities
The libraries includes some common facilities tipically used during an app development. They will be described in following paragraphs.

### Directives
#### Debounce click
The debounce click directive lets to bind click events to components using a rxjs debounce time operator. In this way multiple sequential clicks on components are prevented and triggered as a single click.

To use it on a component or tag, provide the `debounceClick` identifier.

##### Properties

| `debounceTime` |                                                                                        |
| -------------- | -------------------------------------------------------------------------------------- |
| Description    | Time to debounce specified as milliseconds                                             |
| Type           | `number`                                                                               |
| Default        | `500`                                                                                  |

##### Events

| Name            | Description                                                                           |
| --------------- | ------------------------------------------------------------------------------------- |
| `debounceClick` | Emitted on debounce click                                                             |

##### Example usage
First import `DebounceClickDirective` into the module declarations of the page or componenent where the centralizer will be used.

Then:

```
<div debounceClick debounceTime="800" (debounceClick)="onDebounceClickCallback($event)">
    Debounced click div
</div>
```

### Components
#### Debounce button
It wraps an ion-button component with a different click behaviour, based on debounce click directive. The button doesn't trigger a callback immediately on user click. The click happens after a debounce time. During this time
a scale animation on button is rendered.

##### Properties

| `color`        |                                                                                        |
| -------------- | -------------------------------------------------------------------------------------- |
| Description    | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`                           |
| Type           | `string \| undefined`                                                                   |

| `cssClass`     |                                                                                        |
| -------------- | -------------------------------------------------------------------------------------- |
| Description    | A class to assign to the component, to globally style it                               |
| Type           | `string`                                                                               |

| `debounce`     |                                                                                        |
| -------------- | -------------------------------------------------------------------------------------- |
| Description    | Time to debounce specified in milliseconds                                             |
| Type           | `number \| undefined`                                                                  |

| `disabled`     |                                                                                        |
| -------------- | -------------------------------------------------------------------------------------- |
| Description    | If `true`, the user cannot interact with the button.                                   |
| Type           | `boolean`                                                                              |
| Default        | `false`                                                                                |

| `fill`         |                                                                                        |
| -------------- | -------------------------------------------------------------------------------------- |
| Description    | Set to `"clear"` for a transparent button, to `"outline"` for a transparent button with a border, or to `"solid"`.                |
| Type           | `"clear" \| "default" \| "outline" \| "solid" \| undefined`                            |

| `shape`        |                                                                                        |
| -------------- | -------------------------------------------------------------------------------------- |
| Description    | The button shape.                                                                      |
| Type           | `"round" \| undefined`                                                                 |

##### Events

| Name            | Description                                                                           |
| --------------- | ------------------------------------------------------------------------------------- |
| `debounceClick` | Emitted on debounce click                                                             |

##### CSS Custom Properties

| Name                  | Description                                                                           |
| --------------------- | ------------------------------------------------------------------------------------- |
| `--button-padding-start`| Left padding if direction is left-to-right, and right padding if direction is right-to-left of the button |
| `--button-padding-end` | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the button |
| `--margin-bottom`     | Bottom margin of the button |
| `--margin-left`       | Left margin of the button |
| `--margin-right`      | Right margin of the button |
| `--margin-top`        | Top margin of the button |
| `--width`             | The width of the button |
| `--min-width`         | The minimum width of the button |

##### Example usage
First import `BrowserAnimationsModule` into the app module of the project (its a module of `@angular/platform-browser/animations` package).
Then import `DebounceButtonModule` into the module imports of the page or componenent where the centralizer will be used.

Finally insert the component into you html source:

```
<debounce-button cssClass="globalClass" debounce="700" (debounceClick)="debounceClickCallback($event)">
    Button content
</debounce-button>
```

#### Centralizer

It let the developer to centralize tags and other components horizontally and vertically. It needs a container with a specified css position; centralizer content is centralized into this container.

##### Example usage
First import `CentralizerModule` into the module imports of the page or componenent where the centralizer will be used.

Then component can be used as a stand-alone component with an own content:

```
<div class="containerWithDefinedPosition">
    <centralizer>
        <div class="tagToCentralize">
            ...
        </div>
    </centralizer>
</div>
```

Or use the component as directive style:

```
<div centralizer class="centralizerContainerWithDefinedPosition">
    <div class="tagToCentralize">
        ...
    </div>
</div>
```

#### Error Container

Its a container that shows and error message and optionally a retry button with a own callback. It's provided for that situations in which an api call should be relanched by user after a previous error. It's used in `ws-data` and `ws-data-list` components (see below).

##### Properties

| `message`      |                                                                                        |
| -------------- | -------------------------------------------------------------------------------------- |
| Description    | The error message to show                                                              |
| Type           | `string \| undefined`                                                                  |

| `retryButtonColor`      |                                                                                        |
| -------------- | -------------------------------------------------------------------------------------- |
| Description    | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`    |
| Type           | `string \| undefined`                                                                  |


| `retryButtonFill`      |                                                                                        |
| -------------- | -------------------------------------------------------------------------------------- |
| Description    | Set to `"clear"` for a transparent button, to `"outline"` for a transparent button with a border, or to `"solid"`.  |
| Type           | `"clear" \| "outline" \| "solid" \| undefined`         |

| `retryButtonLabel`      |                                                                               |
| -------------- | -------------------------------------------------------------------------------------- |
| Description    | The button content label. If setted, the retry button will be shown                    |
| Type           | `string \| undefined`                                                                  |


| `retryButtonShape`      |                                                                               |
| -------------- | -------------------------------------------------------------------------------------- |
| Description    | The button shape.                                                               |
| Type           | `"round" \| undefined`                                                                  |

##### Events

| Name            | Description                                                                           |
| --------------- | ------------------------------------------------------------------------------------- |
| `reload`        | Emitted on retry button click                                                         |

##### CSS Custom Properties

| Name                  | Description                                                                           |
| --------------------- | ------------------------------------------------------------------------------------- |
| `--align`             | Inner components align  |
| `--padding-left`      | Left padding of the component |
| `--padding-right`     | Right padding of the component |
| `--padding-top`       | Top padding of the component |
| `--padding-bottom`    | Bottom padding of the component |
| `--width`             | The width of the component |
| `--message-align`     | Inner message align |
| `--message-font-size` | Inner message font size |
| `--message-font-weight` | Inner message font weight |
| `--message-color`     | Inner message color |
| `--message-margin-bottom`     | Inner message margin bottom |
| `--button-width`      | Inner button width |
| `--button-height`     | Inner button height |

##### Example usage
First import `ErrorContainerModule` into the module imports of the page or componenent where the error container will be used.

Then:

```
<error-container message="An error occured" retryButtonLabel="Retry">
</error-container>
```

The container admits also a custom definition of its inner parts. It's useful in cases of other error-container sorrounding components.

#### Spinner

A loading custom component with some spinner types usable only specifing their name.

##### Properties

| `name`      |                                                                                        |
| -------------- | -------------------------------------------------------------------------------------- |
| Description    | The spinner type name                                                            |
| Type           | `"rotatingSquare" \| "chasingDot" \| "doubleBouncingDot" \| "stretchingBars" \| "chasingSquares" \| "scalingDot" \| "doubleRotatingDot" \| "threeBouncingDots" \| "rotatingDotCircle" \| "fadingSquare" \| "simpleSpinner" \| "foldingSquare" \| undefined`                      |

| `withContainer`      |                                                                                        |
| -------------- | -------------------------------------------------------------------------------------- |
| Description    | If setted to `true` the spinner will be sorrounded from an ion-content container.    |
| Type           | `boolean \| undefined`                                                                  |

##### CSS Custom Properties

| Name                  | Description                                                                           |
| --------------------- | ------------------------------------------------------------------------------------- |
| `--content-background`| Sorround ion-content background  |
| `--content-z-index`   | Sorround ion-content z-index |
| `--size`              | Spinner size |
| `--color`             | Spinner color |
| `--element-size`      | Inner spinner single component size. For example, on `"chasingDot"`spinner, it defines the size of each single dot |
| `--element-margin`    | Inner spinner single element margin. In some spinners like `"stretchingBars"`, it defines a lateral margin among single inner elements |

##### Example usage
First import `SpinnerModule` into the module imports of the page or componenent where the spinner will be used.

Then:

```
<spinner name="chasingDot">
</spinner>
```

The container admits also a custom definition of its inner parts. It's useful in cases of other error-container sorrounding components.

#### Ws Data
It let the developer to visualize data that will be available in the future (such as web service data available only after a call over http). It wraps previous described spinner and error-container components to show a loading spinner during waiting data state, and to show an error message when an error occurs during data retrieve. It uses rxjs Observables to trace these loading and error states. It's a good practice to bind these states to a Redux substate.

##### Properties

| `options` |   |
| --- | --- | 
| Description | The component configuration options |
| Type | `WsDataOptions` |

##### `WsDataOptions`

| `error$` |   |
| --- | --- |
| Description | Error state tracing rxjs Observable |
| Type | `Observable<any>` |

| `errorMessage` |   |
| --- | --- |
| Description | The error message to show when the data retrieve ends unsuccessfully |
| Type | `string \| undefined` |

| `errorRetryButtonColor` |   |
| --- | --- |
| Description | The color to use from your application's color palette. It defines retry button color. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"` |
| Type | `string \| undefined` |

| `errorRetryButtonFill` |   |
| --- | --- |
| Description | Set to `"clear"` for a transparent retry button, to `"outline"` for a transparent retry button with a border, or to `"solid"`. |
| Type | `"clear" \| "outline" \| "solid" \| undefined` |

| `errorRetryButtonLabel` |   |
| --- | --- |
| Description | The retry button label |
| Type | `string \| undefined` |

| `errorRetryButtonShape` |   |
| --- | --- |
| Description | The button shape. |
| Type | `"round" \| undefined` |

| `loading$` |   |
| --- | --- |
| Description | Loading state tracing rxjs Observable |
| Type | `Observable<boolean>` |

| `loadingSpinnerWithContainer` |   |
| --- | --- |
| Description | It defines if the loading spinner should have an own container or not |
| Type | `boolean \| undefined` |

| `loadingSpinnerName`   |                                                                  |
| -------------- | -------------------------------------------------------------------------------------- |
| Description    | The spinner type name                                                            |
| Type           | `"rotatingSquare" \| "chasingDot" \| "doubleBouncingDot" \| "stretchingBars" \| "chasingSquares" \| "scalingDot" \| "doubleRotatingDot" \| "threeBouncingDots" \| "rotatingDotCircle" \| "fadingSquare" \| "simpleSpinner" \| "foldingSquare" \| undefined`                      |

##### Events

| Name            | Description                                                                           |
| --------------- | ------------------------------------------------------------------------------------- |
| `retry`         | Emitted on error container retry button click        |

##### CSS Custom Properties

| Name                  | Description                                                                           |
| --------------------- | ---------------------------------------- |
| `--spinner-content-background`| Loading spinner container background |
| `--spinner-z-index`| Loading spinner container z index |
| `--spinner-size`| Loading spinner size |
| `--spinner-color`| Loading spinner color |
| `--spinner-element-size`| Loading spinner inner element size |
| `--spinner-element-margin`| Loading spinner inner element margin (used only on some spinner types) |
| `--error-container-width`   | The width of the error-container component |
| `--error-container-align`   | error-container inner components align  |
| `--error-container-padding-left`      | Left padding of the error-container |
| `--error-container-padding-right`     | Right padding of the error-container |
| `--error-container-padding-top`       | Top padding of the error-container |
| `--error-container-padding-bottom`    | Bottom padding of the error-container |
| `--error-container-message-align`     | error-container inner message align |
| `--error-container-message-font-size` | error-container inner message font size |
| `--error-container-message-font-weight` | error-container inner message font weight |
| `--error-container-message-color`     | error-container inner message color |
| `--error-container-message-margin-bottom`     | error-container inner message margin bottom |
| `--error-container-button-width`      | error-container inner button width |
| `--error-container-button-height`     | error-container inner button height |

##### Example usage

Please refer to [Ionic Angular Template](https://kitcarson88.github.io/ionic-angular-template/) repository as example for `ws-data` component usage.

#### Ws Data List
Really similar to previous Ws Data component, it let the developer to visualize array data that will be available in the future (such as web service data available only after a call over http). It wraps previous described spinner and error-container components to show a loading spinner during waiting data state, and to show an error message when an error occurs during data retrieve. It uses rxjs Observables to trace these loading, error and data available states. It's a good practice to bind these states to a Redux substate.

##### Properties

| `options` |   |
| --- | --- | 
| Description | The component configuration options |
| Type | `WsDataListOptions` |

##### `WsDataListOptions`

The interface extends WsDataOptions and all its data are available on ws-data-list component too.
In addition it expose also these parameters:

| `data$` |   |
| --- | --- |
| Description | When available it holds data retrieved |
| Type | `Observable<any>` |

| `dataAvailableCondition` |   |
| --- | --- |
| Description | Data available state tracing |
| Type | `boolean \| Observable<boolean>` |

| `dataItemTemplate` |   |
| --- | --- |
| Description | Array item template to use for each one when data will be available |
| Type | `any` |

| `emptyListMessage` |   |
| --- | --- |
| Description | A message to show when data retrieved is an empty list |
| Type | `string` |

##### Events

| Name            | Description                                                                           |
| --------------- | ------------------------------------------------------------------------------------- |
| `retry`         | Emitted on error container retry button click        |

##### CSS Custom Properties

| Name                  | Description                                                                           |
| --------------------- | ---------------------------------------- |
| `--spinner-content-background`| Loading spinner container background |
| `--spinner-z-index`| Loading spinner container z index |
| `--spinner-size`| Loading spinner size |
| `--spinner-color`| Loading spinner color |
| `--spinner-element-size`| Loading spinner inner element size |
| `--spinner-element-margin`| Loading spinner inner element margin (used only on some spinner types) |
| `--error-container-width`   | The width of the error-container component |
| `--error-container-align`   | error-container inner components align  |
| `--error-container-padding-left`      | Left padding of the error-container |
| `--error-container-padding-right`     | Right padding of the error-container |
| `--error-container-padding-top`       | Top padding of the error-container |
| `--error-container-padding-bottom`    | Bottom padding of the error-container |
| `--error-container-message-align`     | error-container inner message align |
| `--error-container-message-font-size` | error-container inner message font size |
| `--error-container-message-font-weight` | error-container inner message font weight |
| `--error-container-message-color`     | error-container inner message color |
| `--error-container-message-margin-bottom`     | error-container inner message margin bottom |
| `--error-container-button-width`      | error-container inner button width |
| `--error-container-button-height`     | error-container inner button height |

##### Example usage

Please refer to [Ionic Angular Template](https://kitcarson88.github.io/ionic-angular-template/) repository as example for `ws-data-list` component usage.

### Styles
The library defines some global styles utilities into `styles` directory that can be imported from scss files of a project. There are some classes and facility mixins relative to fonts, layout, and responsiveness topics, and also a source scss with some ionic override rules.

To import them in a Ionic project .scss file, simply add an `@import` statement:

```
@import '~ionic-angular-utilities/lib/styles/override-ionic';
@import '~ionic-angular-utilities/lib/styles/mixins';
@import '~ionic-angular-utilities/lib/styles/responsive';
```

Please refer to [Ionic Angular Template](https://kitcarson88.github.io/ionic-angular-template/) repository for a complete integration and global styling.

### Ionic Native mocks
During a Ionic app development with `ionic serve` web execution all specific to platform Cordova plugins are unavailable. So, to ease the development with this type of dev execution, all `@ionic-native` wrappers of Cordova plugins should be mocked, to simulate the plugin behaviour.
The repository includes some of these wrapper mocks importable into the app module of the application.
Some of them are configurable with some values to use when they can't be retrieved from a web environment.

To import a simple mock without parameter such as the `@ionic-native/http` mock wrappaer (normally based on `cordova-plugin-advanced-http`) in the app module providers add a line like:

```
...
import { HTTP } from '@ionic-native/http/ngx';
import{ getHTTP } from 'ionic-angular-utilities';
...
...
    providers: [
        ...
        { provide: HTTP, useClass: getHTTP() },
        ...
    ]
...
```

To configure a mock provider, you can provide mock desired mock values into library import in the app module in this way (example based on `@ionic-native/device` wrapper):

```
...
import { Device } from '@ionic-native/device/ngx';
import{ getDevice, IonicAngularUtilitiesModule } from 'ionic-angular-utilities';
...
    ...
    imports: [
        ...
        IonicAngularUtilitiesModule.forRoot({
            ionicMock: {
                ...
                device: {
                    cordova: 'not available',
                    isVirtual: false,
                    manufacturer: 'not available',
                    model: 'not available',
                    platform: 'web',
                    serial: 'not available',
                    uuid: 'not available',
                    version: 'not available'
                },
                ...
            }
        }),
        ...
    ]
    ...
    providers: [
        ...
        { provide: Device, useClass: getDevice() },
        ...
    ]
    ...
...
```

## Linking and packaging instructions
These few lines explain how to link, or publish or export as archive the ionic-angular-utilities code,
after a ionic-angular-libraries main project build.

### Link the library (only for dev purpose)
From the main ionic-angular-libraries directory go with a terminal into dist/ionic-angular-utilities and link globally the library with related npm command:
    cd dist/ionic-angular-utilities
    npm link

Now inside your project, you can simply link it with the command:
    npm link ionic-angular-utilities

In your code you can now import its modules at the same way of a normal npm package installation:

import { ... } from 'ionic-angular-utilities';


To use this linking method, into your project angular.json file, you ave to set a preserveSymlinks flag following this
structure:

  "projects": {
    "app": {
      "architect": {
        "build": {
          "options": {
            "preserveSymlinks": true,


Note that in your package.json nothing was added. The link process is for test purpose only.

### Unlink
To unlink the app use the npm unlink command:
* inside your project do
    npm unlink ionic-angular-utilities
* then inside the library dist/ionic-angular-utilities folder do
    npm unlink

### Pack and export the library as an archive
From the main ionic-angular-libraries directory go with a terminal into dist/ionic-angular-utilities and pack the library with related npm command:
    cd dist/ionic-angular-utilities
    npm pack

Into the same direcotory an ionic-angular-utilities tgz file was created (the name contains also the current version of the library taken from its package.json). Put this archive in any folder of your computer (also in the main directory of your project).

Inside your project install it as a normal dependency, but providing its relative or absolute path:
npm install /path/to/archive.
