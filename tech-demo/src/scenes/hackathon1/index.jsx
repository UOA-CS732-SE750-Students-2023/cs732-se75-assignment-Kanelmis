import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import PersonAddAlt1RoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";
import BackupTableRoundedIcon from "@mui/icons-material/BackupTableRounded";
import Groups3RoundedIcon from "@mui/icons-material/Groups3Rounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";

// Example of first hacakthon
const Hackathon1 = () => {
  const theme = useTheme();
  const colours = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Hackathon 1"
          subtitle="Data Visualizaiton of Hackathon 1"
        />
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="90px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colours.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="90"
            subtitle="Participants"
            progress="0.7"
            increase="15%"
            icon={
              <Groups3RoundedIcon
                sx={{ colour: colours.redAccent[600], fontSize: "36px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colours.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="9"
            subtitle="New Users"
            progress="0.7"
            increase="10%"
            icon={
              <PersonAddAlt1RoundedIcon
                sx={{ colour: colours.redAccent[600], fontSize: "36px" }}
              />
            }
          />
        </Box>
        {/* ROW 2 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colours.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="4"
            subtitle="Submissions"
            progress="0.3"
            increase="+67%"
            icon={
              <BackupTableRoundedIcon
                sx={{ colour: colours.redAccent[600], fontSize: "36px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colours.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="124"
            subtitle="Total Viewed"
            progress="0.80"
            increase="+13%"
            icon={
              <VisibilityRoundedIcon
                sx={{ colour: colours.redAccent[600], fontSize: "36px" }}
              />
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hackathon1;
