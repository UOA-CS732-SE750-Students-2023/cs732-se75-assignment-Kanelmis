import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ProgressBar = ({ progress = "0.6", size = "35" }) => {
  const theme = useTheme();
  const colours = tokens (theme.palette.mode);
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${colours.primary[500]} 54%, transparent 65%),
            conic-gradient(transparent 0deg ${angle}deg, ${colours.redAccent[500]} ${angle}deg 360deg),
            ${colours.blueAccent[500]}`,
        borderRadius: "60%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressBar;
