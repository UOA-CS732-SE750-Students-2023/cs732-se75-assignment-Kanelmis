import { Box, Typography} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import BarChart from "../../components/BarChart";

const Dashboard = () => {
  const theme = useTheme();
  const colours = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="DASHBOARD"
          subtitle="View the analysist of the hackathon platform"
        />
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="90px"
        gap="20px"
      >
       
        <Box
          gridColumn="span 12"
          gridRow="span 3"
          backgroundColor={colours.primary[400]}
        >
            <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            New users Joined in Platform Past 7 Days (Labeled by primary interest)
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colours.primary[400]}
        ></Box>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colours.primary[400]}
        ></Box>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colours.primary[400]}
        ></Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
