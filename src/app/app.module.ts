import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { FormComponent } from './view/form/form.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BabyShowerService } from './services/baby-shower.service';
import { AccordionModule } from 'primeng/accordion';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FloatLabelModule } from 'primeng/floatlabel';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [AppComponent, HomeComponent, FormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    RouterModule,

    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    AccordionModule,
    RadioButtonModule,
    AvatarModule,
    InputTextModule,
    InputNumberModule,
    FloatLabelModule,
    NgxSpinnerModule,
  ],
  providers: [BabyShowerService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
