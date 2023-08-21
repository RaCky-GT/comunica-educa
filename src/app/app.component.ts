import { Component, OnInit, inject} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  template: '<router-outlet/>',
})
export class AppComponent implements OnInit{

  private primeNgConfig = inject(PrimeNGConfig);

  ngOnInit(): void {
    this.primeNgConfig.ripple = true;
  }
}
