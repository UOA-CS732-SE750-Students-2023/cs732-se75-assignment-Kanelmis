import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme"; 
import { useState } from "react";
import { Link } from 'react-router-dom';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <MenuItem
        active={selected === title}
        style={{
          colour: colors.grey[300],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };

const Sidebar = () => {
    const theme = useTheme();
    const colours = tokens(theme.palette.mode);
    const [selected, setSelected] = useState("Dashboard");
    const [isCollapsed, setIsCollapsed] = useState(false);

   return (
    <Box
    sx={
        //Set Siderbar Styles
        {
        "& .pro-sidebar-inner": {
          background: `${colours.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#878dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6672ba !important",
        },
        }
    }
      >
        {/* Use ProSiderBar library to create*/}
        <ProSidebar collasped ={isCollapsed}>
            <Menu>
                <MenuItem
                icon = {isCollapsed ? <ArrowRightAltRoundedIcon/> : undefined}
                style =  {
                    {
                        margin: "10px 0 10px 0",
                        color : colours.blueAccent[100],
                    }
                }
                onClick = {() => setIsCollapsed(!isCollapsed)}>
                    {!isCollapsed && (
                        <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center">
                            <Typography variant="h4" color={colours.blueAccent[300]} fontWeight="bold"
                            sx={ { m: "10px 0 0 0"}}>
                                Analyist Admin
                            </Typography>
                            <IconButton color={colours.blueAccent[400]}
                                onClick={() => setIsCollapsed(!isCollapsed)}
                                >
                            <ArrowBackIosNewRoundedIcon color={colours.blueAccent[400]}/>
                            </IconButton>
                        </Box>
                    )}
                </MenuItem>

                {!isCollapsed && (
                        <Box
                        mb="24px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center">
                            <img
                            alt = "userProfile"
                            width = "100opx"
                            height="100px"
                            src={`../../assets/userProfile.jpeg`}></img>
                        </Box>
                )}

                <Box paddingLeft = {isCollapsed ? undefined : "10%"}>
                    <Item
                        title="Dashboard"
                        to="/"
                        icon={<DashboardRoundedIcon></DashboardRoundedIcon>}
                        selected = {selected}
                        setSelected = {setSelected}>
                    </Item>

                    <Typography
                        variant = "h6"
                        color = {colours.blueAccent[400]}
                        sx={
                            {
                                m: "15px 0 5px 20px "
                            }}>
                    Hackathon
                    </Typography>
                    <Item
                        title="hackathon 1"
                        to="/hackthon1"
                        icon={<EventRoundedIcon/>}
                        selected={selected}
                        setSelected={setSelected}>
                    </Item>
                    <Item
                        title="hackathon 2"
                        to="/hackthon2"
                        icon={<EventRoundedIcon/>}
                        selected={selected}
                        setSelected={setSelected}>
                    </Item>
                    <Item
                        title="hackathon 3"
                        to="/hackthon3"
                        icon={<EventRoundedIcon/>}
                        selected={selected}
                        setSelected={setSelected}>
                    </Item>

                </Box>

            </Menu>
        </ProSidebar>

    </Box>
   )
}

export default Sidebar;