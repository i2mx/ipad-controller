import './App.css';
import React from "react"
import { Paper, AppBar, Tabs, Tab, Collapse, Typography, Card, CardMedia, CardActionArea, CardActions, Button, CardContent, Grid, Divider, Slider } from '@material-ui/core';

import 'typeface-roboto';
import grey from '@material-ui/core/colors/grey'

import Brave from "./brave.png"
import Discord from "./discord.png"
import VisualStudioCode from "./vscode.png"
import Amongus from './Amongus';


export default function AppsList(){
    return(
    <div style={{ margin: "50px" }}>
        <Grid container justifyContent="space-around" spacing={4}>
          <Grid item xs={6}>
            <Card>
              <CardActionArea onClick={object => { fetch("/brave") }}>
                <CardMedia
                  alt="Brave Browser"
                  component="img"
                  title="Brave Browser"
                  height="150"
                  image={Brave}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Brave
                  </Typography>
                  <Typography variant="body2"
                    color="textSecondary"
                    component="p">
                    Switch to Brave Browser
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={6} onClick={object => { fetch("/vscode") }}>
            <Card>
              <CardActionArea>
                <CardMedia
                  alt="Visual Studio Code"
                  component="img"
                  title="Visual Studio CodeGeeksforGeeks"
                  height="150"
                  image={VisualStudioCode}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Visual Studio Code
                  </Typography>
                  <Typography variant="body2"
                    color="textSecondary"
                    component="p">
                    Switch to Visual Studio Code
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card>
              <CardActionArea onClick={object => { fetch("/discord") }}>
                <CardMedia
                  alt="Discord"
                  component="img"
                  title="Discord"
                  height="150"
                  image={Discord}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Discord
                  </Typography>
                  <Typography variant="body2"
                    color="textSecondary"
                    component="p">
                    Switch to Discord
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card>
              <CardActionArea onClick={object => { fetch("/spotify") }}>
                <CardMedia
                  alt="Spotify"
                  component="img"
                  title="Spotify"
                  height="150"
                  image=
                  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fforums.launchbox-app.com%2Fuploads%2Fmonthly_2016_11%2FSpotify.png.ddbe29b972b8f6adea39b0e305ff3229.png&f=1&nofb=1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Spotify
                  </Typography>
                  <Typography variant="body2"
                    color="textSecondary"
                    component="p">
                    Switch to Spotify
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card>
              <CardActionArea onClick={object => { fetch("/notes") }}>
                <CardMedia
                  alt="Notes"
                  component="img"
                  title="Notes"
                  height="150"
                  image=
                  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flarocqueinc.com%2Fwp-content%2Fuploads%2F2020%2F04%2FNotion-Logo.png&f=1&nofb=1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Notes
                  </Typography>
                  <Typography variant="body2"
                    color="textSecondary"
                    component="p">
                    Switch to Notion
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Amongus />
          </Grid>

        </Grid>
      </div>
    )
} 