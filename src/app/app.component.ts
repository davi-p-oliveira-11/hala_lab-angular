import { Component } from '@angular/core';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HeroComponent } from './sections/hero/hero.component';
import { FeaturesSectionComponent } from './sections/features-section/features-section.component';
import { FaqSectionComponent } from './shared/faq-section/faq-section.component';
import { CtaSectionComponent } from './sections/cta-section/cta-section.component';
import { FooterComponent } from './core/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    FeaturesSectionComponent,
    FaqSectionComponent,
    CtaSectionComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'halal_lab';
}
