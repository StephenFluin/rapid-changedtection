import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {blacklistZone} from './app/blacklist'


if (environment.production || true) {
  enableProdMode();
}


blacklistZone.run(() => {
  platformBrowserDynamic().bootstrapModule(AppModule);
});