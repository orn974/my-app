import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  templateUrl: './app.my.html',

  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'my-app может быть все что угодно';
  namevar = ' VAR ';
  number1 = 123456;
  inum = 0;
  number2: boolean = true;
  readonly number3: number = 99;
  number4: number = 66;


}
