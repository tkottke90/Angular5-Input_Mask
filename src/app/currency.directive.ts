import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCurrency]'
})
export class CurrencyDirective {

  basicNumber = new RegExp('[0-9]*(?!\.)');
  advNumber = new RegExp('[0-9]*\.{1}[0-9]{2}');
  maxNumber = new RegExp('[0-9]*\.{1}([0-9]{1})(?![0-9])');

  prevVal = '';

  @HostListener('input') onInput() {
    console.log(this.el.nativeElement.value);

    const userInput = this.el.nativeElement.value;

    
  }

  constructor( private el: ElementRef ) { }

}


/*
[0-9]*(?!\.)
[0-9]*\.{1}[0-9]{1,2}

*/