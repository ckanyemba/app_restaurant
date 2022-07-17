import { gql, request } from "graphql-request";
import { useQuery } from "react-query";
import { Orders } from "../types/orders";

const GET_ORDERS = gql`
  query {
    orders {
      _id
      OrdersProduct {
        product_name
        product_price
      }
      status
    }
  }
`;

const fetchOrders = async (): Promise<Orders[]> => {
  let EndPoint = "http://localhost:4000/graphql";
  const { orders } = await request(EndPoint, GET_ORDERS);
  return orders;
};

export const useOrders = () => {
  return useQuery("Orders", () => fetchOrders(), {
    refetchOnWindowFocus: false,
  });
};
