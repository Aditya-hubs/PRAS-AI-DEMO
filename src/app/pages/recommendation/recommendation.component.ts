import { Component } from '@angular/core';
import { FlashcardComponent } from '../../flashcard/flashcard.component';

@Component({
  selector: 'app-reccomendation',
  standalone: true,
  imports: [FlashcardComponent],
  templateUrl: './recommendation.component.html',
  styleUrl: './recommendation.component.css'
})
export class RecommendationComponent {

  // LOCAL DATA (same as API categories)
  DATA: Record<string, any[]> = {
    shirts: [
      {
        id: 'shirt1',
        title: 'Premium Shirt',
        about: 'Tailored shirts with perfect fits.',
        price: '40',
        link: 'https://m.media-amazon.com/images/I/71fEz9YB9gL._SY741_.jpg',
        url: 'https://amzn.in/d/5RoEodF'
      },
      {
        id: 'shirt2',
        title: 'Casual Shirt',
        about: 'Comfortable everyday wear.',
        price: '35',
        link: 'https://m.media-amazon.com/images/I/61SB14qT0EL._SY741_.jpg',
        url: 'https://amzn.in/d/hTwJpHx'
      }
    ],
    tshirts: [
      {
        id: 'tshirt1',
        title: 'Graphic T-Shirt',
        about: 'Casual wear for everyday style.',
        price: '25',
        link: 'https://m.media-amazon.com/images/I/61jwUx4MupL._SX679_.jpg',
        url: 'https://amzn.in/d/5VJEyK2'
      }
    ],
    kurtas: [
      {
        id: 'kurta1',
        title: 'Ethnic Kurta',
        about: 'Traditional designs with modern comfort.',
        price: '60',
        link: 'https://m.media-amazon.com/images/I/71Uu4VIN2UL._SY741_.jpg',
        url: 'https://amzn.in/d/0cUCHjv'
      }
    ],
    caps: [
      {
        id: 'cap1',
        title: 'Stylish Cap',
        about: 'Top off your look.',
        price: '15',
        link: 'https://m.media-amazon.com/images/I/41zi2pa-j3L.jpg',
        url: 'https://amzn.in/d/iuf0fH4'
      }
    ]
  };

  onCategoryClick(category: string) {
    console.log('Category clicked:', category);

    const items = this.DATA[category.toLowerCase()] || [];

    if (items.length === 0) {
      console.log('No items for category');
      return;
    }

    // Mimics API "first click"
    const randomItem = items[Math.floor(Math.random() * items.length)];
    console.log('Local recommendation:', randomItem);
  }
}






//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
// FOR REAL MODEL 
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------

// import { Component } from '@angular/core';
// import { FlashcardComponent } from '../../flashcard/flashcard.component';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-reccomendation',
//   imports: [FlashcardComponent],
//   templateUrl: './recommendation.component.html',
//   styleUrl: './recommendation.component.css'
// })
// export class RecommendationComponent {

//   constructor(private http: HttpClient) {}

//   onCategoryClick(category: string) {
//     console.log('Category clicked:', category);

//     this.http.post('http://127.0.0.1:8000/recommend', {
//       category: category
//     }).subscribe({
//       next: (res) => {
//         console.log('API response:', res);
//       },
//       error: (err) => {
//         console.error('API error:', err);
//       }
//     });
//   }
// }
