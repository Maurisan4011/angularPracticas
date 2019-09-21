import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MAT_DATE_LOCALE,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatProgressBarModule,
  MatSelectModule,
  MatTabsModule
} from '@angular/material';


// Components
import { AppComponent } from './app.component';

import { FormComponent } from './form/form.component';
import { LayoutComponent } from './layout/layout.component';
import{FlexLayoutModule} from'@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,

    FormComponent,

    LayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FlexLayoutModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }