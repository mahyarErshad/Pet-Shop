export interface IProduct {
  id: number;
  title: string;
  image: string;
  brand: string;
  breed: "سگ" | "گربه" | "پرندگان" | "جوندگان";
  country: string;
  weight: number;
  description: string;
  category: string;
  price: number;
  quantity: number;
  amount: number;
}
