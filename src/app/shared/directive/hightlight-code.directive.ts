import { Directive, AfterViewInit, ElementRef } from '@angular/core';
import * as hljs from 'highlight.js';
hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));
@Directive({
  selector: '[appHightlightCode]',
})
export class HightlightCodeDirective implements AfterViewInit {
  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    hljs.highlightBlock(this.elRef.nativeElement);
  }
}
