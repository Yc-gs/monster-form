import { Component, NgModule } from '@angular/core';
import * as hljs from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';

// alternatively if you only need to include a subset of languages
const hljs: any = require('highlight.js/lib/highlight');
hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));

export function highlightJsFactory() {
  return hljs;
}

@NgModule({
  imports: [
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: highlightJsFactory,
    }),
  ],
})
export class HighlightModule {}
