

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// FOR FRONTEND ONLY
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------


import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flashcard2Component } from '../../flashcard2/flashcard2.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [Flashcard2Component, CommonModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  currentItem: any = null;
  loading = false;

  // ------------------ LOCAL DATA (FROM API) ------------------

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
      },
      {
        id: 'tshirt2',
        title: 'Plain T-Shirt',
        about: 'Minimal and comfortable.',
        price: '20',
        link: 'https://m.media-amazon.com/images/I/61KqjQL6GAL._SX569_.jpg',
        url: 'https://amzn.in/d/ifhTHRM'
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

  constructor(private route: ActivatedRoute) {}

  // ---------------- INIT ----------------
  ngOnInit() {
    const category = this.route.snapshot.paramMap.get('category');
    if (category) {
      this.currentItem = this.modelCategoryOnly(category);
    }
  }

  // ---------------- MODEL LOGIC ----------------

  modelCategoryOnly(category: string) {
    const items = this.DATA[category.toLowerCase()] || [];
    return items.length ? this.random(items) : null;
  }

  modelItemOnly(itemId: string) {
    const category = this.getCategoryById(itemId);
    if (!category) return null;

    const items = this.DATA[category].filter(i => i.id !== itemId);
    return items.length ? this.random(items) : null;
  }

  getCategoryById(itemId: string) {
    for (const category in this.DATA) {
      if (this.DATA[category].some(i => i.id === itemId)) {
        return category;
      }
    }
    return null;
  }

  random(arr: any[]) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // ---------------- NEXT / PREV ----------------

  nextItem() {
    if (!this.currentItem?.id) return;
    this.currentItem = this.modelItemOnly(this.currentItem.id);
  }

  prevItem() {
    if (!this.currentItem?.id) return;
    this.currentItem = this.modelItemOnly(this.currentItem.id);
  }
}


// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// FOR REAL MODEL
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------




// import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { Flashcard2Component } from '../../flashcard2/flashcard2.component';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-filter',
//   standalone: true,
//   imports: [Flashcard2Component, CommonModule],
//   templateUrl: './filter.component.html',
//   styleUrls: ['./filter.component.css']
// })
// export class FilterComponent {

//   currentItem: any = null;   // currently displayed item
//   loading = true;            // loading indicator

//   constructor(
//     private route: ActivatedRoute,
//     private http: HttpClient
//   ) {}

//   // ---------------- INIT ----------------
//   ngOnInit() {
//     const category = this.route.snapshot.paramMap.get('category');
//     if (category) {
//       this.fetchInitialItem(category);
//     }
//   }

//   // ---------------- FIRST LOAD ----------------
//   fetchInitialItem(category: string) {
//     this.loading = true;
//     this.http.post<any>('http://127.0.0.1:8000/recommend', { category })
//       .subscribe({
//         next: (res) => {
//           this.currentItem = res.recommendations?.[0] || null;
//           this.loading = false;
//         },
//         error: () => this.loading = false
//       });
//   }

//   // ---------------- NEXT / SWIPE RIGHT ----------------
//   nextItem() {
//     if (!this.currentItem?.id) return;
//     this.sendFeedback(this.currentItem.id, 1); // liked
//   }

//   // ---------------- PREV / SWIPE LEFT ----------------
//   prevItem() {
//     if (!this.currentItem?.id) return;
//     this.sendFeedback(this.currentItem.id, -1); // rejected
//   }

//   // ---------------- SEND FEEDBACK ----------------
//   sendFeedback(itemId: string, value: 1 | -1) {
//     const feedback = { [itemId]: value }; // single feedback
//     this.loading = true;

//     this.http.post<any>('http://127.0.0.1:8000/recommend', { item_id: itemId, feedback })
//       .subscribe({
//         next: (res) => {
//           // Always show the next item, prev button does not retain state
//           this.currentItem = res.recommendations?.[0] || null;
//           this.loading = false;
//         },
//         error: () => this.loading = false
//       });
//   }
// }
