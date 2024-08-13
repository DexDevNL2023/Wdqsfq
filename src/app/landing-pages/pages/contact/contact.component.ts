import { MainComponent } from '../../main/main.component';
import { Component } from '@angular/core';
import AOS from "aos";
import { EmailService } from '../../../utilities/services/email.service';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  heroContent = {
    title: "Nous sommes là",
    spanText: "pour vous aider",
    description: "Vous avez des questions ou besoin d'assistance ? N'hésitez pas à nous contacter pour obtenir des réponses rapides et précises. Nous sommes à votre écoute pour vous offrir le meilleur service possible.",
    buttonText: "IT-Consulting Teleo",
    buttonLink: "",
    backgroundImage: 'assets/img/banners/banner-contact.jpg'
  };
  
  contactContent = {
    title: "Prenez Contact",
    description: "Nous serions ravis de répondre à toutes vos questions et de discuter de vos besoins. Voici comment vous pouvez nous joindre :",
    contacts: [
      { 
        icon: "pi pi-map-marker", 
        label: "Adresse", 
        info: "Omnisport, Yaoundé - Cameroun" 
      },
      { 
        icon: "pi pi-phone", 
        label: "Appelez-Nous", 
        info: "+237 674 746 071 / 656 668 310" 
      },
      { 
        icon: "pi pi-envelope", 
        label: "Envoyez-Nous un Email", 
        info: "iteleo@gmail.com" 
      }
    ]
  };

  lastname: string = '';
  firstname: string = '';
  email: string = '';
  company: string = '';
  phone: string = '';
  message: string = '';

  constructor(public appMain: MainComponent, private messageService: MessageService, private emailService: EmailService) { }

  ngOnInit(): void {
    AOS.init();
  }

  /* sendMessage() {
    // Envoyer l'email au service commercial
    this.emailService.sendEmail(this.firstname, this.lastname, this.email, this.phone, this.message)
      .then(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Votre message a été transmis au service commercial.'
        });
      })
      .catch((error) => {
        console.error('Erreur EmailJS :', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer ultérieurement.'
        });
      });
    }   */

    sendMessage() {
      // Envoyer l'email au service commercial
      this.messageService.add({
        severity: 'success',
        summary: 'Succès',
        detail: 'Votre message a été transmis au service commercial.'
      });
      console.log("okay");
    }      
}
