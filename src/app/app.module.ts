import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './components/reactive-form/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UsersComponent } from './components/users/users/users.component';
import { FormTemplateComponent } from './components/template-form/form-template/form-template.component';
import { FormValidatorDirective } from './components/template-form/validator/form-validator.directive';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'form-reactive', component: FormComponent},
  {path: 'form-template', component: FormTemplateComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UsersComponent,
    FormTemplateComponent,
    FormValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
