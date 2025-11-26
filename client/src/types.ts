import {z} from "zod"

export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export type ProductsType = ProductType[];

export type CartItemType = ProductType & { 
  quantity: number;
selectedSize: string;
selectedColor: string;
};

export type CartItemsType = CartItemType[];


export const shippingFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).max(50, { message: "Name must be less than 50 characters" }),
  email: z.email({ message: "Email is required" }).max(50, { message: "Email must be less than 50 characters" }),
  phone: z.string().min(7, { message: "Phone number must be between 7 and 10 digits" }).max(10, { message: "Phone number must be between 7 and 10 digits" }).regex(/^\d+$/, { message: "Phone number must be numeric" }),
  address: z.string().min(1, { message: "Address is required" }).max(100, { message: "Address must be less than 100 characters" }),
  city: z.string().min(1, { message: "City is required" }).max(50, { message: "City must be less than 50 characters" }),
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>


export const paymentFormSchema = z.object({
  cardHolder: z.string().min(1, { message: "Card holder name is required" }).max(50, { message: "Card holder name must be less than 50 characters" }),
  cardNumber: z.string().min(16, { message: "Card number must be 16 digits" }).max(16, { message: "Card number must be 16 digits" }).regex(/^\d+$/, { message: "Card number must be numeric" }),
  expirationDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: "Expiration date must be in the format MM/YY" }),
  cvv: z.string().min(3, { message: "CVV must be 3 digits" }).max(3, { message: "CVV must be 3 digits" }).regex(/^\d+$/, { message: "CVV must be numeric" }),
  
});

export type PaymentFormInputs = z.infer<typeof paymentFormSchema>


export type CartStoreStateType = {
  cart: CartItemsType;
  hasHydrated: boolean;
}

export type CartStoreActionType = {
  addToCart: (product: CartItemType) => void;
  removeFromCart: (product: CartItemType) => void;
  clearCart: () => void;
}