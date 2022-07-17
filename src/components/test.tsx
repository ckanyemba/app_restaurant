import Button from "@mui/material/Button";
import Chip, { ChipProps } from "@mui/material/Chip";
import { styled, useTheme, Paper, Box } from "@mui/material";

const ChipStyled = styled(Chip)<ChipProps>(({ theme }) => ({
  backgroundColor: "#90E0EF",
  color: "#03045E",
  lineHeight: "normal",
  paddingTop: ".3rem",
  paddingBottom: ".3rem",
}));

// color: "rgb(86, 202, 0)",
const ChipCustom = styled(Chip)<ChipProps>((props) => ({
  color: props.naa,
  backgroundColor: "rgba(86, 202, 0, 0.12)",
  padding: 0,
  lineHeight: "normal",
}));

const StyledPaper = styled(Paper, {
  name: "StyledPaper",
  slot: "Wrapper",
})((props) => ({
  color: "#6B8068",
  backgroundColor: props.myColor,
  margin: "auto",

  borderRadius: 2,
  height: 300,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ".MuiButton-root": { color: "#FF0000" },
}));

type Props = {
  mycolor: string;
};

const ButtonStyled = styled("p")((props: Propss) => ({
  color: props.myColor,
}));

interface MyThemeComponentProps {
  color?: "primary" | "secondary";
  variant?: "normal" | "dashed";
}

const MyThemeComponent = styled("div", {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) =>
    prop !== "color" && prop !== "variant" && prop !== "sx",
  name: "MyThemeComponent",
  slot: "Root",
  // We are specifying here how the styleOverrides are being applied based on props
  overridesResolver: (props, styles) => [
    styles.root,
    props.color === "primary" && styles.primary,
    props.color === "secondary" && styles.secondary,
  ],
})<MyThemeComponentProps>(({ theme }) => ({
  backgroundColor: "aliceblue",
  padding: theme.spacing(1),
}));

export const Test = (props: any) => {
  const theme = useTheme();

  return (
    <>
      <ChipStyled label="label text" variant="filled" size="small" />
      <Chip label="label text" variant="filled" size="small" />
      <Button color="primary">Button</Button>
      <MyThemeComponent color="primary">Lorem, ipsum dolor.</MyThemeComponent>
      <Box
        sx={{
          border: "1px solid #000",
          p: {
            xs: 1,
            md: 2,
          },
          ":hover": {
            color: "red",
            cursor: "pointer",
          },
          color: {
            xs: "green",
            md: "#000 ",
          },
        }}
      >
        loremasdasdasd asdasdsad
      </Box>
    </>
  );
};
