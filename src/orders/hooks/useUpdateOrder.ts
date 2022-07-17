import { useMutation, useQueryClient } from "react-query";
import { Orders } from "../types/orders";
import { gql, request } from "graphql-request";
import { updateOne } from "../../@core/utils/crudUtils";

const UPDATE_ORDER = gql`
  mutation OrderStatus($IdOrder: String!, $typeStatus: String) {
    OrderStatus(IdOrder: $IdOrder, typeStatus: $typeStatus) {
      _id
      OrdersProduct {
        product_name
        product_price
      }
      status
    }
  }
`;

type OrderStatus = {
  IdOrder: string;
  typeStatus: string;
};

const updateOrder = async (orders: OrderStatus): Promise<Orders> => {
  let ENDPOINT = "http://localhost:4000/graphql";
  const variables = {
    IdOrder: orders.IdOrder,
    typeStatus: orders.typeStatus,
  };
  let { OrderStatus } = await request(ENDPOINT, UPDATE_ORDER, variables);
  return OrderStatus;
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  const { isLoading, mutateAsync } = useMutation(updateOrder, {
    onSuccess: (Types: Orders) => {
      console.log(Types);
      queryClient.setQueryData<Orders[]>(["Orders"], (oldorders) =>
        updateOne(oldorders, Types),
      );
    },
  });

  return { isUpdating: isLoading, updateOrder: mutateAsync };
};
