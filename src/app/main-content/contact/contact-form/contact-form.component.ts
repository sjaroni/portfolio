import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  http = inject(HttpClient);
  isChecked: boolean = false;
  isHovered: boolean = false;
  isConfirmed: boolean = false;

  checkboxCounter: number = 0;
  mailTest = false;
  contactData = {
    name: '',
    email: '',
    message: '',
  };
  
  post = {
    endPoint: 'https://stefan-jaroni.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {            
            this.showConfirmation();
          },
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }

/**
 * Changing img on hover
 * @param isHovered boolean
 */
  handleHover(isHovered: boolean) {
    this.isHovered = isHovered;
  }

  /**
   * Changing checkbox state
   */
  toggleCheckbox() {
    this.isChecked = !this.isChecked;
    this.checkboxCounter++;
  }
 
  /**
   * Show sendMail Confirmation
   */
  showConfirmation(){
    this.isConfirmed = true;

    setTimeout(() => {
      this.isConfirmed = false;
    }, 5000);

  }
}