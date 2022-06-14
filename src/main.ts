import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// import "./assets/js/jquery-3.2.1.min.js";
// import "./assets/js/popper.min.js";
// import "./assets/js/bootstrap.min.js";
// import "./assets/js/jquery.superslides.min.js";
// import "./assets/js/bootstrap-select.js";
// import "./assets/js/inewsticker.js";
// import "./assets/js/bootsnav.js";
// import "./assets/js/images-loded.min.js";
// import "./assets/js/isotope.min.js";
// import "./assets/js/owl.carousel.min.js";
// import "./assets/js/baguetteBox.min.js";
// import "./assets/js/form-validator.min.js";
// import "./assets/js/contact-form-script.js";
// import "./assets/js/custom.js";
// import "./assets/js/jquery-ui.js";
// import "./assets/js/jquery.nicescroll.min.js";
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
