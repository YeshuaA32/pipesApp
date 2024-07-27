import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower:string='yeshua';
  public nameUpper:string='YESHUA';
  public fullName:string='YeShUa aLoNzO';

  public customDate: Date =new Date();
}
