import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";



import { useState, useEffect } from "react";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";
import "../../dashindex.css";
import axios from 'axios'



const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "_id", headerName: "ID" },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "detail",
      headerName: "Detail",
      // type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "",
      headerName: "Action",
      flex: 1,
      align: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                  ? colors.greenAccent[700]
                  : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              <Button
                // onClick={() => handleDelete}
                onClick={(e) => console.log(e)}
              >
                {'Pop'}
              </Button>
            </Typography>
          </Box>
        );
      },
    },
  ];



  const [isSidebar, setIsSidebar] = useState(true);

  const [payload, setPayload] = useState({
    result: [],
    isLoading: true
  });

  const handleDelete = () => {
    alert()
  }

  useEffect(() => {
    const url = 'http://localhost:1234/news'
    const getData = async (url) => {
      try {
        const res = await axios.get(url)
        setPayload({
          result: res.data.data,
          isLoading: false
        })
      } catch (error) {
        console.error(error)
      }


    }
    getData(url)
  }, [])

  return (
    <div className="app">
      <Sidebar isSidebar={isSidebar} />
      <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />

        {
          payload.isLoading
            ?
            <center><h2>Loading....</h2></center>
            :
            <Box m="20px">
              <Header title="TEAM" subtitle="Managing the Team Members" />
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
                    color: colors.greenAccent[300],
                  },
                  "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.blueAccent[700],
                    borderBottom: "none",
                  },
                  "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.primary[400],
                  },
                  "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.blueAccent[700],
                  },
                  "& .MuiCheckbox-root": {
                    color: `${colors.greenAccent[200]} !important`,
                  },
                }}
              >
                {/* <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} /> */}
                <DataGrid rows={payload.result} columns={columns} pageSize={12} />
              </Box>
            </Box>
        }


      </main>
    </div>
  );
};

export default Team;
