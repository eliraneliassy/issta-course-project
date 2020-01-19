import { Directive, ElementRef, AfterViewInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements AfterViewInit {

  @Input() appChangeColor = 'red';

  constructor(
    private element: ElementRef,
    private renderer: Renderer2) {
    console.log(element);
  }

  ngAfterViewInit(): void {
    // this.element.nativeElement.style.backgroundColor = 'red';
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.appChangeColor);
  }



}
