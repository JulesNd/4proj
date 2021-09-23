import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const glowInTexts = document.querySelectorAll('.glowIn');
    glowInTexts.forEach(glowInText => {
      const letters = glowInText.textContent.split('');
      glowInText.textContent = '';
      letters.forEach((letter, i) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${i * 0.05}s`;
        glowInText.append(span);
      });
    });

  }

}
