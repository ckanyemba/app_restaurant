import { ListItem, ListItemText } from "@mui/material";

interface Props {
  open: boolean;
}

export const ComponentCollapse = ({ open }: Props) => {
  return (
    <>
      <ListItem button>
        <ListItemText primary="texto1" />
      </ListItem>
    </>
  );
};
