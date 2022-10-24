import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  useHistory,
  Route
} from 'react-router-dom'

import Layout from './comps/Layout';
import { Homepage } from './pages/Homepage';
import Test1 from './pages/Test';
import { SingleNews } from './pages/SingleNews';
import { News } from './pages/News';
import SearchQuery from './pages/SearchQuery';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Register';
import Login from './pages/Login';
import PrivateRoutes from './comps/auth/PrivateRoutes';
import Logout from './pages/Logout';



import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AuthContext, { AuthProvider } from './context/AuthContext';



import { useState } from 'react';
import { ColorModeContext, useMode } from './pages/auth/theme';
import { CssBaseline, ThemeProvider, Grid } from "@mui/material";
import Inside from './pages/auth/App';
import Dashboard from './pages/auth/scenes/dashboard';
import Team from './pages/auth/scenes/team';
import Contacts from './pages/auth/scenes/contacts';
import CreateForm from './pages/auth/scenes/form';
import Leftbar from './pages/interface/Leftbar';
import Rightbar from './pages/interface/RightBar';
import Feed from './pages/interface/Feed';
import { useContext } from 'react';



function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const history = useHistory()

  const { user } = useContext(AuthContext)
  console.log(user)


  return (


    // <AuthProvider>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {user === null
          ?
          <Grid container spacing={1} className="App" style={{ color: 'black', marginBottom: 10 }}>
            <Grid item sm={1} xs={1} lg={2} md={1} >
              {/* <Leftbar /> */}
            </Grid>
            <Grid item sm={8} xs={10}  md={8}  >
              <Router>
                <Layout>

                  <Switch>
                    <Route exact path='/test' >
                      <Test1 />
                    </Route>
                    {/* For The General Masses i.e People without Authentication */}
                    <Route exact path='/' >
                      <Homepage />
                    </Route>
                    <Route exact path='/news' >
                      <News />
                    </Route>

                    <Route exact path='/news/:newsId' >
                      <SingleNews />
                    </Route>

                    <Route exact path='/search/:searchQuery' >
                      <SearchQuery />
                    </Route>


                    {/* Auths */}
                    <Route exact path='/register' >
                      <Register />
                    </Route>

                    <Route exact path='/login' >
                      <Login />
                    </Route>
                    <Route exact path='/logout' >
                      <Logout />
                    </Route>



                    {/* Private Routes */}
                    <PrivateRoutes>
                      <Route exact path='/dashboard' >
                        <Dashboard />
                      </Route>
                      <Route exact path='/dashboard/team' >
                        <Team />
                      </Route>
                      <Route exact path='/dashboard/contacts' >
                        <Contacts />
                      </Route>
                      <Route exact path='/dashboard/create' >
                        <CreateForm />
                      </Route>

                    </PrivateRoutes>




                    <Route exact path='*' >
                      <center><h2>Page Not Found</h2></center>
                      <PageNotFound />
                    </Route>
                  </Switch>

                </Layout>
              </Router>
            </Grid>
            {/* <Grid item sm={3} className={classes.right}> */}
            <Grid item sm={3} md={2} >
              <Rightbar />
            </Grid>
          </Grid>
          :
          // When the User is Authenticated
          <Grid container spacing={1} className="App" style={{ color: 'black', marginBottom: 10 }}>
            <Grid item>
              <Router>
                <Layout>

                  <Switch>
                    <Route exact path='/test' >
                      <Test1 />
                    </Route>
                    {/* For The General Masses i.e People without Authentication */}
                    <Route exact path='/' >
                      <Homepage />
                    </Route>
                    <Route exact path='/news' >
                      <News />
                    </Route>

                    <Route exact path='/news/:newsId' >
                      <SingleNews />
                    </Route>
                    <Route exact path='/search/:searchQuery' >
                      <SearchQuery />
                    </Route>


                    {/* Auths */}
                    <Route exact path='/logout' >
                      <Logout />
                    </Route>



                    {/* Private Routes */}
                    <PrivateRoutes>
                      <Route exact path='/dashboard' >
                        <Dashboard />
                      </Route>
                      <Route exact path='/dashboard/team' >
                        <Team />
                      </Route>
                      <Route exact path='/dashboard/contacts' >
                        <Contacts />
                      </Route>
                      <Route exact path='/dashboard/create' >
                        <CreateForm />
                      </Route>

                    </PrivateRoutes>




                    <Route exact path='*' >
                      <center><h2>Page Not Found</h2></center>
                      <PageNotFound />
                    </Route>
                  </Switch>

                </Layout>
              </Router>
            </Grid>
          </Grid>
        }


      </ThemeProvider>
    </ColorModeContext.Provider>
    // </AuthProvider>

  );
}

export default App;
