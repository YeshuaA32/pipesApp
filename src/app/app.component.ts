import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig) {}

 public title = 'YeShUa aLoNzO';

 ngOnInit() {
  this.primengConfig.ripple = true;
}
}
