import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import BackupTableRoundedIcon from '@mui/icons-material/BackupTableRounded';
import Groups3RoundedIcon from '@mui/icons-material/Groups3Rounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';

const Hackathon2 = () => {
  const theme = useTheme();
  const colours = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Hackathon 2"
          subtitle="Data Visualizaiton of Hackathon 2"
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
          gridRow = "span 2"
          backgroundColor={colours.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="20"
            subtitle="Participants"
            progress="0.5"
            increase="+100%"
            icon={
              <Groups3RoundedIcon
                sx={{ colour: colours.redAccent[600], fontSize: "36px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 6"
          gridRow = "span 2"
          backgroundColor={colours.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="2"
            subtitle="New Users"
            progress="0.9"
            increase="+10%"
            icon={
              <PersonAddAlt1RoundedIcon
                sx={{ colour: colours.redAccent[600], fontSize: "36px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 6"
          gridRow = "span 2"
          backgroundColor={colours.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="10"
            subtitle="Submissions"
            progress="0.9"
            increase="+5%"
            icon={
              <BackupTableRoundedIcon
                sx={{ colour: colours.redAccent[600], fontSize: "36px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 6"
          gridRow = "span 2"
          backgroundColor={colours.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="81"
            subtitle="Total Viewed"
            progress="0.60"
            increase="+33%"
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

export default Hackathon2;
