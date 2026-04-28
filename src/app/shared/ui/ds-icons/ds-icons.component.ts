import { Component, ElementRef, effect, input, InputSignal, viewChild } from '@angular/core';
import { NgStyle } from '@angular/common';
import { TEcIconsBasic } from './types/t-dc-icons-basic';
import { TEcIconsExtra } from './types/t-dc-icons-extra';

type IconSize = 48 | 40 | 32 | 24 | 22 | 20 | 16 | 14 | 12;

@Component({
  selector: 'ds-icons',
  imports: [NgStyle],
  template: `
    <div
      class="ds-icon"
      [ngStyle]="{
        '--ds-icon-size': size() + 'px',
      }"
    >
      <span
        #icon
        class="ds-icon--span"
      ></span>
    </div>
  `,
  styleUrl: './ds-icons.component.scss',
})
export class DsIconsComponent {
  basic: InputSignal<TEcIconsBasic> = input<TEcIconsBasic>('document-text');
  extra: InputSignal<TEcIconsExtra> = input<TEcIconsExtra>('document-text');
  size: InputSignal<IconSize> = input<IconSize>(24);

  iconRef = viewChild<ElementRef>('icon');

  constructor() {
    effect(() => {
      this.loadIcon();
    });
  }

  private loadIcon(): void {
    const basic = this.basic();
    const extra = this.extra();

    let path: string | null = null;
    let icon: string | null = null;

    if (basic) {
      path = 'icons-basic';
      icon = basic;
    } else if (extra) {
      path = 'icons-extra';
      icon = extra;
    }

    if (!path || !icon) return;

    const element = this.iconRef()?.nativeElement as HTMLElement | undefined;
    if (!element) return;

    import(`./${path}/${icon}/index.js`).then((module) => {
      element.innerHTML = module.default;
    });
  }
}
