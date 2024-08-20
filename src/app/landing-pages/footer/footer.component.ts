import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  footerContent = {
    color: '#3D72B4',
    interestedTitle: 'Intéressé par nos services ?',
    interestedDescription: 'Contactez-nous dès aujourd\'hui !',
    contactButtonText: 'Contactez-nous',
    logoUrl: 'assets/img/logo.png',
    usefulLinks: [
      { label: 'Accueil', link: '/', subMenu: [] },
      { label: 'About us', link: '/about', subMenu: [
        { id: 'who-we-are', label: 'Qui sommes-nous' },
        { id: 'why-us', label: 'Pourquoi choisir IT-Consulting Teleo' },
      ] },
      { label: 'Carrières', link: '/career', subMenu: [] },
      { label: 'Contacts', link: '/contact', subMenu: [] }
    ],
    whatWeDo: [
      { id: 1, label: 'Cloud computing', link: '/service' },
      { id: 2, label: 'Cybersécurité', link: '/service' },
      { id: 3, label: 'Ingénierie Réseau', link: '/service' },
      { id: 4, label: 'Formation', link: '/service' },
      { id: 5, label: 'Développement Web', link: '/service' },
      { id: 6, label: 'Développement d\'Applications', link: '/service' },
      { id: 7, label: 'Intelligence Artificielle', link: '/service' }
    ],
    address: 'Omnisport, Yaoundé - Cameroun',
    phone: '+237 674 746 071 / 656 668 310',
    email: 'iteleo@gmail.com',
    copyright: 'IT-Consulting Teleo © 2023'
  };
  menuItemSelected: { label: string, link: string, subMenu: { id: number, label: string }[] };
  dropdownVisible = false;

  constructor(public appMain: MainComponent) { }

  ngOnInit(): void {
  }

  toggleDropdown(menuItem: { label: string, link: string, subMenu: { id: number, label: string }[] }): void {
      this.menuItemSelected = menuItem;
      this.dropdownVisible = !this.dropdownVisible;
      console.log(this.menuItemSelected.subMenu);
  }
}
