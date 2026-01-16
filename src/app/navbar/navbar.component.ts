import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  HostListener,
} from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {

  @ViewChild('selector') selector!: ElementRef<HTMLDivElement>;
  @ViewChild('menu') menu!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    setTimeout(() => {
      const active = this.menu.nativeElement.querySelector('.nav-item.active');
      if (active) this.moveSelector(active as HTMLElement);
    });
  }

  setActive(event: MouseEvent): void {
    const li = (event.target as HTMLElement).closest('.nav-item') as HTMLElement;
    if (!li) return;

    const items = this.menu.nativeElement.querySelectorAll('.nav-item');
    items.forEach(i => i.classList.remove('active'));

    li.classList.add('active');
    this.moveSelector(li);
  }

  moveSelector(activeItem: HTMLElement): void {
    const selectorEl = this.selector.nativeElement;
    const ul = activeItem.parentElement as HTMLElement;

    const itemRect = activeItem.getBoundingClientRect();
    const ulRect = ul.getBoundingClientRect();

    selectorEl.style.top = itemRect.top - ulRect.top + 'px';
    selectorEl.style.left = itemRect.left - ulRect.left + 'px';
    selectorEl.style.height = itemRect.height + 'px';
    selectorEl.style.width = itemRect.width + 'px';
  }

  toggleMenu(): void {
    this.menu.nativeElement.classList.toggle('show');

    setTimeout(() => {
      const active = this.menu.nativeElement.querySelector('.nav-item.active');
      if (active) this.moveSelector(active as HTMLElement);
    }, 300);
  }

  @HostListener('window:resize')
  onResize(): void {
    const active = this.menu.nativeElement.querySelector('.nav-item.active');
    if (active) this.moveSelector(active as HTMLElement);
  }
}
