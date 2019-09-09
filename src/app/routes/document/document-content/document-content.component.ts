import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-content',
  templateUrl: './document-content.component.html',
  styleUrls: ['./document-content.component.less'],
})
export class DocumentContentComponent implements OnInit {
  source: string = `
  import { Component } from '@angular/core';
   
  @Component({
    template: 'Hello {{ name }}'
  })
  class HelloWorldComponent {
    name: string = 'World!';
  }
  `.trim();
  constructor() {}

  ngOnInit() {}
}
