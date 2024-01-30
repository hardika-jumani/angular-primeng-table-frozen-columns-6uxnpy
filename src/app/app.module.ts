import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TableModule }  from 'primeng/table';

import { AppComponent } from './app.component';
import { TableScrollDemo } from './table-scroll-demo.component';

@NgModule({
    declarations: [
        AppComponent,
        TableScrollDemo
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        TableModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
