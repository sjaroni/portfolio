import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ 
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
 
http = inject(HttpClient);

 contactData = {
    name: "",
    email: "",
    message: "",
 }

 mailTest = true;

 post = {
   endPoint: 'https://deineDomain.de/sendMail.php',
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
     this.http.post(this.post.endPoint, this.post.body(this.contactData))
       .subscribe({
         next: (response) => {

           ngForm.resetForm();
         },
         error: (error) => {
           console.error(error);
         },
         complete: () => console.info('send post complete'),
       });
   } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

     ngForm.resetForm();
   }
 }

    // Funktion noch erweitern um die anderen Felder!
    changePlaceholder(field: string, newPlaceholder: string): void {
      
      
      //console.log(field);

      //const nameField = document.querySelector('input[name="name"]') as HTMLInputElement;
      //const nameField = document.querySelector(field) as HTMLInputElement;
      //nameField.placeholder = newPlaceholder;
    }
  
}
