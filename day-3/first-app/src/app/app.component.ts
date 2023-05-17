import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="border: 1px solid red">
      <h1>I am boss</h1>
      <hr/>
      <seond-root></seond-root>
    </div>
  `
})
export class AppComponent {
  title = 'first-app';
}
