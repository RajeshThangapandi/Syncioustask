export interface Product {
    productName: string;
    description: string;
    price: number;
    availableQuantity: number;
    userQuantity?: number; // Optional
    errorMessage?: string; // Optional
    image: string;
  }
  
  export interface CartItem {
    productName: string;
    userQuantity: number;
    totalPrice: number;
  }
  