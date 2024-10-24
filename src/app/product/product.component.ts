import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms';

interface Product {
  productName: string;
  description: string;
  price: number;
  availableQuantity: number;
  image: string;
  userQuantity?: number; // User input for quantity
  totalPrice?: number;   // Total price for the user quantity
  errorMessage?: string | null; // Error message for invalid quantity, can be null
}


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true,
  imports: [CommonModule,FormsModule], // Add CommonModule here
})
export class ProductComponent {
  products: Product[] = [
    {
      productName: 'Product 1',
      description: 'The Apple iPhone 15 is a smartphone that was designed, manufactured, and sold by Apple Inc. It is the fifteenth generation of the iPhone. It was announced on September 14, 2023, alongside the iPhone 15 Mini, iPhone 15 Pro, and iPhone 15 Pro Max at the Steve Jobs Theater in Apple Park, Cupertino by Apple CEO Tim Cook.',
      price: 100,
      availableQuantity: 20,
      image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTNnnDR8gYoyCymZ3DyWwpbqRHUgthERxaFgNtS-NnACJl0ZaQyr5kOT4eqyWheI0-GBI64OtgxV3ArcLYadxugdBGGZ6aPLDOtLGHdY7N7QzppYzH9SLCu&usqp=CAE', // Adjust the path as necessary
      userQuantity: 1, // Default quantity
      errorMessage: null
    },
    {
      productName: 'Product 2',
      description: 'The Apple iPhone 15 is a smartphone that was designed, manufactured, and sold by Apple Inc. It is the fifteenth generation of the iPhone. It was announced on September 14, 2023, alongside the iPhone 15 Mini, iPhone 15 Pro, and iPhone 15 Pro Max at the Steve Jobs Theater in Apple Park, Cupertino by Apple CEO Tim Cook.',
      price: 150,
      availableQuantity: 15,
      image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703920474/Croma%20Assets/Communication/Mobiles/Images/303492_l0ylzr.png?tr=w-1000', // Adjust the path as necessary
      userQuantity: 1,
      errorMessage: null
    },
    {
      productName: 'Product 3',
      description: 'The Apple iPhone 15 is a smartphone that was designed, manufactured, and sold by Apple Inc. It is the fifteenth generation of the iPhone. It was announced on September 14, 2023, alongside the iPhone 15 Mini, iPhone 15 Pro, and iPhone 15 Pro Max at the Steve Jobs Theater in Apple Park, Cupertino by Apple CEO Tim Cook.',
      price: 200,
      availableQuantity: 10,
      image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTNnnDR8gYoyCymZ3DyWwpbqRHUgthERxaFgNtS-NnACJl0ZaQyr5kOT4eqyWheI0-GBI64OtgxV3ArcLYadxugdBGGZ6aPLDOtLGHdY7N7QzppYzH9SLCu&usqp=CAE', // Adjust the path as necessary
      userQuantity: 1,
      errorMessage: null
    },
    {
      productName: 'Product 4',
      description: 'The Apple iPhone 15 is a smartphone that was designed, manufactured, and sold by Apple Inc. It is the fifteenth generation of the iPhone. It was announced on September 14, 2023, alongside the iPhone 15 Mini, iPhone 15 Pro, and iPhone 15 Pro Max at the Steve Jobs Theater in Apple Park, Cupertino by Apple CEO Tim Cook.',
      price: 250,
      availableQuantity: 5,
      image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703920474/Croma%20Assets/Communication/Mobiles/Images/303492_l0ylzr.png?tr=w-1000', // Adjust the path as necessary
      userQuantity: 1,
      errorMessage: null
    },
  ];

  cart: any[] = [];
  cartTotal: number = 0;

  get totalQuantity() {
    return this.cart.reduce((sum, item) => sum + item.userQuantity, 0);
  }

  addToCart(product: Product) {
    if (product.userQuantity && product.userQuantity > 0 && product.userQuantity <= product.availableQuantity) {
      const existingItem = this.cart.find(item => item.productName === product.productName);
      const totalPrice = product.price * product.userQuantity;

      if (existingItem) {
        existingItem.userQuantity += product.userQuantity;
        existingItem.totalPrice += totalPrice;
      } else {
        this.cart.push({
          productName: product.productName,
          userQuantity: product.userQuantity,
          totalPrice: totalPrice
        });
      }

      product.availableQuantity -= product.userQuantity;
      product.userQuantity = undefined;
      product.errorMessage = null;
      this.cartTotal = this.cart.reduce((sum, item) => sum + item.totalPrice, 0);
    } else {
      product.errorMessage = 'Requested quantity is not available.';
    }
  }
}
