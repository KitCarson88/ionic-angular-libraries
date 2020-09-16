# Ionic Angular Utilities (README WORK IN PROGRESS)

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
| `--padding-left`      | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the button |
| `--padding-right`     | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the button |
| `--margin-top`        | Top margin of the button |
| `--margin-bottom`     | Bottom margin of the button |
| `--margin-left`       | Left margin of the button |
| `--margin-right`      | Right margin of the button |
| `--width`             | The width of the button |
| `--min-width`         | The minimum width of the button |

#### Centralizer

It let the developer to centralize tags and other components horizontally and vertically. It needs a container with a specified css position; centralizer content is centralized into this container.

##### Example usage
First import `CentralizerModule` into the module of the page or componenent where the centralizer will be used.

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
