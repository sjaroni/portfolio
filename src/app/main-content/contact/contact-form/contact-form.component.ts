import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  
    sendMail(){
  
  
      // Ladeanimation
  
      console.log('Sending Mail', this.myForm);
      let nameField = this.nameField.nativeElement;
      let messageField = this.messageField.nativeElement;
      let sendButton = this.sendButton.nativeElement;
  
      nameField.disabled = true;
      messageField.disabled = true;
      sendButton.disabled = true;
  
      // senden // auslagern
  
      nameField.disabled = false;
      messageField.disabled = false;
      sendButton.disabled = false;
  
    }

    // Funktion noch erweitern um die anderen Felder!
    changePlaceholder(newPlaceholder: string): void {
      const nameField = document.querySelector('input[name="name"]') as HTMLInputElement;
      nameField.placeholder = newPlaceholder;
    }
  
}
