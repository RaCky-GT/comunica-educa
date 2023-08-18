import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app'
import { enviroment } from './enviroments/enviroments';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    importProvidersFrom(provideFirebaseApp(() => initializeApp(enviroment.firebase)), provideFirestore(() => getFirestore())),
    provideAnimations()
]
}).catch((err) => console.log(err));


/* MODIFICADO POR UTILIZAR PROYECTO ESTANDAR - USANDO UNICAMENTE MODULOS
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
*/