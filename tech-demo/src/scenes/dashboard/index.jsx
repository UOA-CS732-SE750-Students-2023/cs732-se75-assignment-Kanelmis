import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import BarChart from "../../components/BarChart";
import LineChart from "../../components/LineChart";
import PieChart1 from "../../components/PieChart1";
import PieChart2 from "../../components/PieChart2";

/* 
    This is Dashboard where provide the admin the overall of the analysit of the Platform
*/
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

      {/** Bar Chart To demonstrate the interest trendency of the new joined User*/}
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
            New users Joined in Platform Past 7 Days (Labeled by primary
            interest)
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        {/* The line chart to represent the view of the recent created hackathon's type*/}
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
            Number of Hackathons that Created in Past 7 Days (Labeled by primary
            interest)
          </Typography>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        {/* Pie Chart to give a distinct comparsion view to the users */}
        <Box
          gridColumn="span 12"
          gridRow="span 3"
          backgroundColor={colours.primary[400]}
        >
          <Box
            gridColumn="span 6"
            gridRow="span 3"
            backgroundColor={colours.primary[400]}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ padding: "30px 30px 0 30px" }}
            >
              Host VS Users
            </Typography>
            <Box height="250px" m="-20px 0 0 0">
              <PieChart1 />
            </Box>
          </Box>
          <Box
            gridColumn="span 6"
            gridRow="span 3"
            backgroundColor={colours.primary[400]}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ padding: "30px 30px 0 30px" }}
            >
              Hosts VS Users
            </Typography>
            <Box height="250px" m="-20px 0 0 0">
              <PieChart2 />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
