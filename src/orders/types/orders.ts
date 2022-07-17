export type Orders = {
  _id: string;
  OrdersProduct: {
    product_name: string;
    product_price: number;
    product_quantity: number;
  };
  OrdersProductAttribute: {
    product_options: string;
    options_values_prices: number;
  };
  status: string;
  date: Date;
};

export type OrderStatus = {
  IdOrder: string;
  typeStatus: string;
};
