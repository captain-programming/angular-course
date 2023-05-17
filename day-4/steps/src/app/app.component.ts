import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  template : `
  <div>
    <h1>Main Component</h1>
    <h1>Message : {{ message }}</h1>
    <app-child [quantity]="count" (childEvent)="childEventHandler($event)">
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <button>Click Me</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis minus error odio, labore eveniet officiis. Quaerat ad sed accusantium excepturi dicta numquam, voluptatem nobis velit corrupti, esse repudiandae dolorum. Iure.
      </p>
      <p class="box">
        class box
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis minus error odio, labore eveniet officiis. Quaerat ad sed accusantium excepturi dicta numquam, voluptatem nobis velit corrupti, esse repudiandae dolorum. Iure.
      </p>
      <div>{{ title }}</div>
      <div id="apptitle">{{ title }}</div>
      <div>{{ title }}</div>
      <ul>
        <li>List Item 1</li>
        <li class="x">List Item 2</li>
        <li>List Item 3</li>
        <li>List Item 4</li>
        <li>List Item 5</li>
      </ul>
    </app-child>
    <br>
    <button (click)="count = count+1">Increase Count {{ count }}</button>
  </div>
  `
})

export class AppComponent {
  title = 'my application title';
  count:number = 0;
  message = "";
  childEventHandler(message:any){
    // alert(message)
    this.message = message;
  }
}