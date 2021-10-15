import './App.css';
import React from "react"
import { Paper, AppBar, Tabs, Tab, Collapse, Typography, Card, CardMedia, CardActionArea, CardActions, Button, CardContent, Grid, Divider, Slider } from '@material-ui/core';

import 'typeface-roboto';
import grey from '@material-ui/core/colors/grey'

import Brave from "./brave.png"
import Discord from "./discord.png"
import VisualStudioCode from "./vscode.png"
import Amongus from './Amongus';

import AppsList from "./AppsList"
import Websites from "./Websites"

import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

function App() {
  return (
    <div className="App">

      {/* <Router> */}
      <Paper elevation={1} square>
        <Tabs>
          <Link to="/" style={{textDecoration: 'none'}}>
            <Tab label="Apps" style={{color: grey[900]}}/>
          </Link>
          <Link to="/websites" style={{textDecoration: 'none'}}>
            <Tab label="Websites" style={{color: grey[900]}}/>
          </Link>
          {/* <Tab label="Item Three" /> */}
        </Tabs>
      </Paper>
      {/* </Router> */}

      <Switch>
        <Route path="/websites" component={Websites} />
        <Route exact path="/" component={AppsList} />
      </Switch>

      {/* <AppsList /> */}

    </div >
  );
}

export default App;
