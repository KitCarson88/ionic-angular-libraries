These few lines explain how to link, or publish or export as archive the almaviva-ionic-library code,
after a ionic-5-library main project build.

## Link the library (only for dev purpose)
From the main ionic-5-library directory go with a terminal into dist/almaviva-ionic-library and link globally the library with related npm command:
    cd dist/almaviva-ionic-library
    npm link

Now inside your project, you can simply link it with the command:
    npm link almaviva-ionic-library

In your code you can now import its modules at the same way of a normal npm package installation:

import { ... } from 'almaviva-ionic-library';


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
    npm unlink almaviva-ionic-library
* then inside the library dist/almaviva-ionic-library folder do
    npm unlink

## Pack and export the library as an archive
From the main ionic-5-library directory go with a terminal into dist/almaviva-ionic-library and pack the library with related npm command:
    cd dist/almaviva-ionic-library
    npm pack

Into the same direcotory an almaviva-ionic-library tgz file was created (the name contains also the current version of the library taken from its package.json). Put this archive in any folder of your computer (also in the main directory of your project).

Inside your project install it as a normal dependency, but providing its relative or absolute path:
npm install /path/to/archive.