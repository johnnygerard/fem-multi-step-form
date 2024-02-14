import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeadingComponent } from '../heading/heading.component';
import { NextButtonComponent } from '../next-button/next-button.component';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeadingComponent,
    NextButtonComponent,
  ],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalInfoComponent {
  readonly HEADING = 'Personal info';
  readonly SUBHEADING = 'Please provide your name, email address, and phone number.';
  @ViewChild('credentialForm') credentialForm?: FormGroupDirective;

  credentialControls = this._formBuilder.group({
    name: ['', Validators.required],
    email: ['', [
      Validators.required,
      Validators.email,
    ]],
    phone: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) { }

  isRequired(control: FormControl): boolean {
    return this.#isErrorDisplayed('required', control);
  }

  isEmailInvalid(control: FormControl): boolean {
    return this.#isErrorDisplayed('email', control);
  }

  #isErrorDisplayed(errorName: string, control: FormControl): boolean {
    const formSubmitted = this.credentialForm?.submitted ?? false;

    return control.hasError(errorName) && (control.touched || formSubmitted);
  }
}
