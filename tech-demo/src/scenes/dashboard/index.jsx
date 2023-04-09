import { Box } from "@mui/material";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import PersonAddAlt1RoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";
import BackupTableRoundedIcon from "@mui/icons-material/BackupTableRounded";
import Groups3RoundedIcon from "@mui/icons-material/Groups3Rounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";

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
       
        {/* ROW 2 */}
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colours.primary[400]}
        ></Box>
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
