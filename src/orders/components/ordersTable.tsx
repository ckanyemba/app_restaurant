import { useState } from "react";
import { Orders, OrderStatus } from "../types/orders";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  TableRow,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableCell,
  Checkbox,
  Box,
  Avatar,
  Typography,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import * as selectUtils from "../../@core/utils/selectUtils";

interface HeadCell {
  id: string;
  label: string;
  align: "center" | "left" | "right";
}

const headCells: HeadCell[] = [
  {
    id: "orders",
    align: "left",
    label: "orders",
  },
  {
    id: "gender",
    align: "center",
    label: "customer",
  },
  {
    id: "mesa",
    align: "center",
    label: "mesa",
  },
  {
    id: "status",
    align: "center",
    label: "status",
  },
];

type UserTableProps = {
  processing: boolean;
  onDelete: (ordersId: string[]) => void;
  onEdit: (orders: Orders) => void;
  onSelectedChange: (selected: string[]) => void;
  onChangeStatus: (ordersStatusParam: OrderStatus) => void;
  selected: string[];
  orders?: Orders[];
  onDeleteNextSelect: (orderId: string[]) => void;
};

interface EnhancedTableProps {
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowCount: number;
}

function EnhancedTableHead({
  onSelectAllClick,
  numSelected,
  rowCount,
}: EnhancedTableProps) {
  return (
    <TableHead>
      <TableRow sx={{ "& th": { border: 0 } }}>
        <TableCell sx={{ py: 0 }}>
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all orders",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} align={headCell.align} sx={{ py: 0 }}>
            {headCell.label}
          </TableCell>
        ))}
        <TableCell align="right" sx={{ py: 0 }}>
          Actions
          {/* {t("userManagement.table.headers.actions")} */}
        </TableCell>
      </TableRow>
    </TableHead>
  );
}
// ######################################

type UserRowProps = {
  oderId: string;
  index: any;
  onCheck: (id: string) => void;
  onDelete: (ordersId: string[]) => void;
  onEdit: (order: Orders) => void;
  processing: boolean;
  selected: boolean;
  order: Orders;
  onChangeStatus: (orderStatusParam: OrderStatus) => void;
  onDeleteNextSelect: (orderId: string[]) => void;
};

const UserRow = ({
  index,
  onCheck,
  onDelete,
  onEdit,
  onChangeStatus,
  processing,
  selected,
  order,
  oderId,
  onDeleteNextSelect,
}: UserRowProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [StatusSelect, setStatus] = useState<string>("");
  const labelId = `enhanced-table-checkbox-${index}`;
  const openActions = Boolean(anchorEl);
  const handleOpenActions = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseActions = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    handleCloseActions();
    // console.log(order._id);
    onDelete([order._id]);
  };

  const handleEdit = () => {
    handleCloseActions();
    onEdit(order);
  };

  const handleSelect = (event: SelectChangeEvent, id: string) => {
    setStatus(event.target.value as string);
    let datos: OrderStatus = {
      IdOrder: id,
      typeStatus: event.target.value as string,
    };
    if (datos.typeStatus === "Completada") {
      onDeleteNextSelect([datos.IdOrder]);
      return;
    }
    onChangeStatus(datos);
  };

  return (
    <TableRow
      aria-checked={selected}
      tabIndex={-1}
      key={order._id}
      selected={selected}
      sx={{ "& td": { bgcolor: "background.paper", border: 0 } }}
    >
      <TableCell
        padding="checkbox"
        sx={{ borderTopLeftRadius: "1rem", borderBottomLeftRadius: "1rem" }}
      >
        <Checkbox
          color="primary"
          checked={selected}
          inputProps={{
            "aria-labelledby": labelId,
          }}
          onClick={() => onCheck(order._id)}
        />
      </TableCell>
      <TableCell>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box>
            <Typography component="div" color="textSecondary" variant="body1">
              {`${order.OrdersProduct.product_name}`}
            </Typography>
          </Box>
        </Box>
      </TableCell>
      <TableCell align="center">{order.OrdersProduct.product_name}</TableCell>
      <TableCell align="center">{order.OrdersProduct.product_name}</TableCell>
      <TableCell align="center">
        {/* <Chip color="primary" label={order.status} /> */}
        {/* <Typography color="textSecondary" variant="body2">
          {order.status}
        </Typography> */}
        <FormControl>
          <InputLabel id="demo-simple-select-label">Select status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={StatusSelect}
            label="Select status"
            onChange={(e) => handleSelect(e, oderId)}
          >
            <MenuItem value={"Order confirmada"}>Order confirmada</MenuItem>
            <MenuItem value={"Preparacion"}>Preparacion</MenuItem>
            <MenuItem value={"Completada"}>Completada</MenuItem>
          </Select>
        </FormControl>
      </TableCell>
      <TableCell
        align="right"
        sx={{ borderTopRightRadius: "1rem", borderBottomRightRadius: "1rem" }}
      >
        <IconButton
          id="user-row-menu-button"
          aria-label="user actions"
          aria-controls="user-row-menu"
          aria-haspopup="true"
          aria-expanded={openActions ? "true" : "false"}
          disabled={processing}
          onClick={handleOpenActions}
        >
          <BsThreeDotsVertical />
        </IconButton>
        <Menu
          id="user-row-menu"
          anchorEl={anchorEl}
          aria-labelledby="user-row-menu-button"
          open={openActions}
          onClose={handleCloseActions}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          sx={{ padding: ".5rem" }}
        >
          <MenuItem onClick={handleEdit} sx={{ borderRadius: "1rem" }}>
            <ListItemIcon>
              <MdModeEditOutline />
            </ListItemIcon>
            Edit
          </MenuItem>
          <MenuItem onClick={handleDelete} sx={{ borderRadius: "1rem" }}>
            <ListItemIcon>
              <MdDelete />
            </ListItemIcon>
            {"Delete"}
          </MenuItem>
        </Menu>
      </TableCell>
    </TableRow>
  );
};
const OrdersTable = ({
  onDelete,
  onEdit,
  onSelectedChange,
  processing,
  selected,
  onChangeStatus,
  orders = [],
  onDeleteNextSelect,
}: UserTableProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = selectUtils.selectAll(orders);
      onSelectedChange(newSelecteds);
      return;
    }
    onSelectedChange([]);
  };
  const handleClick = (id: string) => {
    let newSelected: string[] = selectUtils.selectOne(selected, id);
    onSelectedChange(newSelected);
  };
  const isSelected = (id: string) => selected.indexOf(id) !== -1;
  return (
    <>
      <TableContainer>
        <Table
          aria-labelledby="tableTitle"
          sx={{
            minWidth: 600,
            borderCollapse: "separate",
            borderSpacing: "0 1rem",
          }}
        >
          <EnhancedTableHead
            numSelected={selected.length}
            onSelectAllClick={handleSelectAllClick}
            rowCount={orders.length}
          />
          <TableBody>
            {orders.map((orders, index) => (
              <UserRow
                index={index}
                key={orders._id}
                oderId={orders._id}
                onCheck={handleClick}
                onDelete={onDelete}
                onEdit={onEdit}
                processing={processing}
                selected={isSelected(orders._id)}
                order={orders}
                onChangeStatus={onChangeStatus}
                onDeleteNextSelect={onDeleteNextSelect}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default OrdersTable;
