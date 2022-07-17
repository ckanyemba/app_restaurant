import OrdersTable from "../components/ordersTable";
import { useState } from "react";
import { useOrders } from "../hooks/useOrders";
import { useDeleteOrders } from "../hooks/useDeletOrders";
import { useUpdateUser } from "../hooks/useUpdateOrder";
import { useSubscription } from "../hooks/useSubscriptionsOrders";
import { Orders } from "../types/orders";
import { OrderStatus } from "../types/orders";
import { useSnackbar } from "../../@core/context/SnackbarProvider";

const OrdersManagement = () => {
  const snackbar = useSnackbar();
  const { isDeleting, deleteOrders } = useDeleteOrders();
  const { isUpdating, updateOrder } = useUpdateUser();
  const [userDeleted, setUserDeleted] = useState<string[]>([]);
  const [openConfirmDeleteDialog, setOpenConfirmDeleteDialog] = useState(false);
  const [openOrderDialog, setOpenOrderDialog] = useState(false);
  const [orderUpdated, setOrderUpdated] = useState<Orders | undefined>(
    undefined,
  );
  const [selected, setSelected] = useState<string[]>([]);
  const { data, isLoading } = useOrders();
  const { isSubscribing, isSubscribingSuccess } = useSubscription();

  // let orders: Orders[] = data.?orders;

  const processing = isDeleting || isUpdating || isLoading;
  const handleOpenConfirmDeleteDialog = (ordersId: string[]) => {
    // setUserDeleted(ordersId);
    // setOpenConfirmDeleteDialog(true);

    deleteOrders(ordersId).then(() => {
      snackbar.success("Order eliminada correctamente.");
    });
  };

  const handleDelete = (OrderId: string[]) => {
    deleteOrders(OrderId).then(() => {
      snackbar.success("Order completada.");
    });
  };

  const handleOpenUserDialog = (order?: Orders) => {
    setOrderUpdated(order);
    setOpenOrderDialog(true);
  };
  const handleSelectedChange = (newSelected: string[]) => {
    setSelected(newSelected);
  };

  const handleChangeStatus = (ordersParam: OrderStatus) => {
    console.log(ordersParam);
    updateOrder(ordersParam);
  };
  return (
    <>
      <OrdersTable
        processing={processing}
        onDelete={handleOpenConfirmDeleteDialog}
        onDeleteNextSelect={handleDelete}
        onEdit={handleOpenUserDialog}
        onSelectedChange={handleSelectedChange}
        onChangeStatus={handleChangeStatus}
        selected={selected}
        orders={data}
      />
    </>
  );
};

export default OrdersManagement;
