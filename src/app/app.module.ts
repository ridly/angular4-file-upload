import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';

import { RouterModule, Routes } from '@angular/router';

import { UploadFileComponent } from './components/upload-file/component';
import { ViewUploadsComponent } from './components/view-uploads/component'

const appRoutes: Routes = [
  { path: 'upload/file',  component: UploadFileComponent },
  { path: 'view/uploads',      component: ViewUploadsComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    UploadFileComponent,
    ViewUploadsComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
