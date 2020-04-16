# ionic-5-library

An Angular 2+ project containing global Almaviva Ionic libraries.

## Project creation command
The project was created with command:
    ng new ionic-5-library --createApplication=false

## Library creation command (example on almaviva-ionic-library)
Run the terminal command inside ionic-5-library folder:
    ng generate library almaviva-ionic-library

## Build instructions
To build internal libraries do a complete ionic-5-library project build.
The first build must be executed with the command:
    npm run build   (this executes also scripts into scripts folder)
Other builds can be executed simply with:
    ng build

For production build add --prod command:
    ng build --prod

## Export or link or publish libraries
To export/link/publish internal libraries follow them own README (an example provided for
almaviva-ionic-library in projects/almaviva-ionic-library/README.md)