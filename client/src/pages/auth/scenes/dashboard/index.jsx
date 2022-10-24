import { Box, Grid, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";

import { useEffect, useState } from "react";
import Sidebar from "../global/Sidebar";
import "../../dashindex.css";

import axios from 'axios'






const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  const [isSidebar, setIsSidebar] = useState(true);

  const [payload, setPayload] = useState({
    result: [],
    isLoading: true
  });

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
    <div className="app background">
      <Grid container spacing={1} className="App" style={{ color: 'black', marginBottom: 10 }}>
        <Grid item xs={1.4}>
          <Sidebar isSidebar={isSidebar} />
        </Grid>
        <Grid item xs={10} sx={{
          bgcolor: '#302f2f'
        }}>
          <main className="content">

            {
              payload.isLoading
                ?
                <center><h2>Loading....</h2></center>
                :
                <Box
                  m="20px"
                // backgroundColor={'white'}
                >
                  {/* HEADER */}
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

                  </Box>

                  {/* GRID & CHARTS */}
                  <Box
                    display="grid"
                    gridTemplateColumns="repeat(12, 1fr)"
                    gridAutoRows="140px"
                    gap="20px"
                  >
                    {/* ROW 1 */}
                    <Box
                      gridColumn="span 3"
                      backgroundColor={colors.primary[300]}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <StatBox
                        title={payload.result.length}
                        subtitle="Posts Sent"
                        progress="0.75"
                        increase="+14%"
                        icon={
                          <EmailIcon
                            sx={{ color: colors.blueAccent[200], fontSize: "26px" }}
                          />
                        }
                      />
                    </Box>
                    <Box
                      gridColumn="span 3"
                      backgroundColor={colors.primary[300]}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <StatBox
                        title={payload.result.length * 0}
                        subtitle="Posts Rejected"
                        progress="0.50"
                        increase="+21%"
                        icon={
                          <PointOfSaleIcon
                            sx={{ color: colors.blueAccent[200], fontSize: "26px" }}
                          />
                        }
                      />
                    </Box>
                    <Box
                      gridColumn="span 3"
                      backgroundColor={colors.primary[300]}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <StatBox
                        title="32"
                        subtitle="Nigerian News"
                        progress="0.30"
                        increase="+5%"
                        icon={
                          <PersonAddIcon
                            sx={{ color: colors.blueAccent[200], fontSize: "26px" }}
                          />
                        }
                      />
                    </Box>
                    <Box
                      gridColumn="span 3"
                      backgroundColor={colors.primary[300]}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <StatBox
                        title="1000"
                        subtitle="Foreign News"
                        progress="0.80"
                        increase="+43%"
                        icon={
                          <TrafficIcon
                            sx={{ color: colors.blueAccent[200], fontSize: "26px" }}
                          />
                        }
                      />
                    </Box>

                    {/* ROW 2 */}
                    <Box
                      gridColumn="span 12"
                      gridRow="span 2"
                      backgroundColor={colors.primary[300]}
                      overflow="auto"
                    >
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        colors={colors.blueAccent[100]}
                        p="15px"
                      >
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                          Recent Posts
                        </Typography>
                      </Box>
                      {payload.result.map((item, index) => (
                        <Box
                          key={`${item._id}-${index}`}
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                          borderBottom={`4px solid ${colors.primary[500]}`}
                          p="15px"
                        >
                          <Box>
                            <Typography
                              color={colors.greenAccent[100]}
                              variant="h5"
                              fontWeight="600"
                            >
                              {index}
                            </Typography>
                            <Typography color={colors.grey[100]}>
                              {item.user}
                            </Typography>
                          </Box>
                          <Box color={colors.grey[100]}>{item.title}</Box>
                          <Box
                            backgroundColor={colors.greenAccent[300]}
                            p="5px 10px"
                            borderRadius="4px"
                            color={colors.blueAccent[600]}
                          >
                            {/* ${transaction.cost} */}
                            Posted
                          </Box>
                        </Box>
                      ))}
                    </Box>

                    {/* ROW 3 */}
                    {/* <Box
                      gridColumn="span 6"
                      gridRow="span 2"
                      backgroundColor={colors.primary[300]}
                    >
                      <Typography
                        variant="h5"
                        fontWeight="600"
                        sx={{ padding: "30px 30px 0 30px" }}
                        color={colors.blueAccent[100]}
                      >
                        Sales Quantity
                      </Typography>
                      <Box height="250px" mt="-20px">
                        <BarChart isDashboard={true} />
                      </Box>
                    </Box>
                    <Box
                      gridColumn="span 6"
                      gridRow="span 2"
                      backgroundColor={colors.primary[300]}
                      padding="30px"
                    >
                      <Typography
                        variant="h5"
                        fontWeight="600"
                        color={colors.blueAccent[100]}
                        sx={{ marginBottom: "15px" }}
                      >
                        Geography Based Traffic
                      </Typography>
                      <Box height="200px">
                        <GeographyChart isDashboard={true} />
                      </Box>
                    </Box> */}
                  </Box>
                </Box>
            }

          </main>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
