import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input()
  mycity = 'pune'
  profile = 'https://media.gettyimages.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=gi&k=20&c=LsB3LmCoN69U82LEYU78IC2tNwOMjy7LJlmEj30UOSs='

  addUser() {
    alert('user added')
  }
  getColor(country: string) {
    switch (country) {
      case 'INDIA':
        return 'blue'
      case 'USA':
        return 'green'
      case 'UK':
        return 'purple'
      default:
        return null
    }
  }
  users = [
    { name: 'suchita', country: 'INDIA' },
    { name: 'duglus', country: 'USA' },
    { name: 'sam', country: 'UK' }
  ]
}
