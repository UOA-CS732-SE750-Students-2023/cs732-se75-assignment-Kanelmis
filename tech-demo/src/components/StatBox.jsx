import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressBar from "./ProgressBar";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colours = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ color: colours.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressBar progress={progress} size="125"/>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="3px">
        <Typography variant="h4" sx={{ color: colours.greenAccent[400] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h4"
          fontStyle="italic"
          sx={{ color: colours.greenAccent[500] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
