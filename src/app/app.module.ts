import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { HomeService } from './home/home.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        AngularFireModule.initializeApp(environment.firebase)
    ],
    providers: [AngularFireDatabase, HomeService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
