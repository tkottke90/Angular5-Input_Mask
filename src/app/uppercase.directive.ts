import {Directive, Input, Output, EventEmitter, OnInit, HostListener, SimpleChange, ElementRef, HostBinding} from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective implements OnInit {

  @Input() uppercase: string;
  @Output() uppercaseChange: EventEmitter<string> = new EventEmitter<string>();

  @HostListener('input') onInput() {
    this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase();
  }

  constructor( private el: ElementRef) { }

  ngOnInit() {
    this.uppercase = this.uppercase || '';
  }

}
