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

To use it on a component or tag, provide the `debounceClick` identifier, a `debounceTime` variable, and a `decounceClick` callback.

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
