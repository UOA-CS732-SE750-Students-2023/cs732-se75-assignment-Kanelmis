import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataHacakthonList } from "../../data/mockData";
import Header from "../../components/Header";

const HackathonList = () => {
  const theme = useTheme();
  const colours = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "name",
      headerName: "Hackathon Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "host",
      headerName: "Host",
      align: "left",
    },
    { field: "domain", headerName: "domain", flex: 1 ,},
    {
      field: "startTime",
      headerName: "Start Time",
    },
    {
      field: "endTime",
      headerName: "End Time",
    },
    { field: "status", headerName: "Status", flex:1, },
  ];

  return (
    <Box m="20px">
      <Header title="Hackathon Lists" subtitle="Managing the Hackathons" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colours.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colours.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colours.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colours.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colours.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataHacakthonList}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default HackathonList;
