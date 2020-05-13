/*
 * Public API Surface of almaviva-ionic-library
 */

///////////// Components
export * from './lib/components/spinner/spinner.component';
export * from './lib/components/spinner/spinner.module';

export * from './lib/components/error-container/error-container.component';
export * from './lib/components/error-container/error-container.module';

export * from './lib/components/ws-data/ws-data.component';
export * from './lib/components/ws-data/ws-data.module';

export * from './lib/components/ws-data-list/ws-data-list.component';
export * from './lib/components/ws-data-list/ws-data-list.module';

export * from './lib/components/debounce-button/debounce-button.component';
export * from './lib/components/debounce-button/debounce-button.module';

export * from './lib/components/centralizer/centralizer.component';
export * from './lib/components/centralizer/centralizer.module';

///////////// Directives
export * from './lib/directives/debounce-click/debounce-click.directive';

///////////// Redux
export * from './lib/store/spinner/spinner.model';
export * from './lib/store/spinner/spinner.actions';
export * from './lib/store/spinner/spinner.reducer';

export * from './lib/store/app-platform-device/app-platform-device.model';
export * from './lib/store/app-platform-device/app-platform-device.actions';
export * from './lib/store/app-platform-device/app-platform-device.reducer';

///////////// Ionic native mocks
export * from './lib/ionic-native/ionic-mock.providers';

export * from './lib/kitcarson88-ionic-library.module';