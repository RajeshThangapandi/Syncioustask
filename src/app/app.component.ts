import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

@Component({

  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, 
    FormsModule,ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shopping-quantity-app';
}
