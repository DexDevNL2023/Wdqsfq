import { ActivatedRoute } from '@angular/router';
import { MainComponent } from '../../main/main.component';
import { Component } from '@angular/core';
import AOS from "aos";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {

  heroContent = { 
    title: "À propos",
    spanText: "de nous",
    backgroundImage: 'assets/img/banners/banner-about.jpg'
  };
  
  aboutContent: { title: string, description: { text: string }[], imageUrl: string } = {
    title: "Notre vision",
    description: [
      { 
        text: `IT-Consulting Teleo est une entreprise camerounaise basée dans plusieurs Pays dans le monde, spécialisée dans la fourniture de solutions technologiques innovantes pour aider nos clients à atteindre leurs objectifs. Nous sommes fiers de nos racines et de notre engagement à offrir des services de haute qualité adaptés aux besoins uniques de chaque client.`
      },
      { 
        text: `Notre expertise couvre plusieurs domaines essentiels : développement web, services cloud, réseaux et sécurité, ainsi que la gestion de projets informatiques. Que vous soyez une petite entreprise cherchant à établir votre présence en ligne ou une grande organisation nécessitant une infrastructure cloud sécurisée, nous avons les compétences et l'expérience nécessaires pour vous accompagner.`
      },
      { 
        text: `Chez IT-Consulting Teleo, nous nous efforçons de rester à la pointe de la technologie pour offrir des solutions durables et innovantes. Notre équipe dévouée travaille main dans la main avec vous pour s'assurer que chaque projet est mené à bien, dans le respect des délais et du budget.`
      }
    ],
    imageUrl: "assets/img/banners/banner-14.webp"
  };
  
  aboutId: string | null = null;

  constructor(public appMain: MainComponent, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.aboutId = params.get('id');
        console.log(this.aboutId);
    });
    AOS.init();
  }

  ngAfterViewInit(): void {
    if (this.aboutId) {
      setTimeout(() => {
        this.scrollTo(this.aboutId);
      }, 500); // Ajout d'un délai pour s'assurer que le DOM est prêt
    }
  }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
