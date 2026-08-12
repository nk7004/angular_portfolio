import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { PORTFOLIO_DATA } from '../../data/portfolio.data';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  email = PORTFOLIO_DATA.email;
  phone = PORTFOLIO_DATA.phone;
  address = PORTFOLIO_DATA.address;
  socialLinks = PORTFOLIO_DATA.socialLinks;
  githubUrl = PORTFOLIO_DATA.github;
  linkedinUrl = PORTFOLIO_DATA.linkedin;

  // ========================================================
  // TODO: EMAILJS CONFIGURATION (Apne EmailJS Dashboard se paste karein)
  // ========================================================
  private readonly EMAILJS_SERVICE_ID = 'service_hg3tsvw';    // Default service ID
  private readonly EMAILJS_TEMPLATE_ID = 'template_yxm4z6l';  // Default template ID
  private readonly EMAILJS_PUBLIC_KEY = '5hvEmCbvUC1woB5iQ';    // Default Public Key (Account Section)
  // ========================================================

  // Form states
  isSubmitting = signal(false);
  isSuccess = signal(false);

  contactModel = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit(form: NgForm): void {
    if (form.invalid) return;

    this.isSubmitting.set(true);

    const templateParams = {
      from_name: this.contactModel.name,
      from_email: this.contactModel.email,
      name: this.contactModel.name,
      email: this.contactModel.email,
      user_name: this.contactModel.name,
      user_email: this.contactModel.email,
      sender_name: this.contactModel.name,
      sender_email: this.contactModel.email,
      subject: this.contactModel.subject,
      message: this.contactModel.message
    };

    emailjs.send(
      this.EMAILJS_SERVICE_ID,
      this.EMAILJS_TEMPLATE_ID,
      templateParams,
      this.EMAILJS_PUBLIC_KEY
    )
      .then((response) => {
        console.log('EmailJS Success Status:', response.status, response.text);
        this.isSubmitting.set(false);
        this.isSuccess.set(true);

        // Reset form
        this.contactModel = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
        form.resetForm();

        // Reset success state after a delay
        setTimeout(() => {
          this.isSuccess.set(false);
        }, 5000);
      })
      .catch((error) => {
        this.isSubmitting.set(false);
        console.error('EmailJS Connection Error:', error);
        alert('Message send nahi ho paya. Console error check karein.');
      });
  }
}
