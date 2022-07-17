import { request, gql } from "graphql-request";
import { useMutation, useQueryClient } from "react-query";
import { Orders } from "../types/orders";
import { removeOne } from "../../@core/utils/crudUtils";

const DELETE_ORDERS = gql`
  mutation DeleteOrderMutation($idOrder: String!) {
    DeleteOrderMutation(idOrder: $idOrder) {
      _id
    }
  }
`;

const deleteOrders = async (idOrder: string[]): Promise<Orders> => {
  const variables = {
    idOrder: idOrder[0],
  };
  const { DeleteOrderMutation } = await request(
    "http://localhost:4000/graphql",
    DELETE_ORDERS,
    variables,
  );

  return DeleteOrderMutation;
};

export const useDeleteOrders = () => {
  const queryClient = useQueryClient();

  const { isLoading, mutateAsync } = useMutation(deleteOrders, {
    onSuccess: (ordersId: Orders) => {
      queryClient.setQueryData<Orders[]>(["Orders"], (oldata) =>
        removeOne(oldata, ordersId),
      );
    },
  });
  return { isDeleting: isLoading, deleteOrders: mutateAsync };
};
