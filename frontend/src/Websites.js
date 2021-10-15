import './App.css';
import React from "react"
import { Paper, AppBar, Tabs, Tab, Collapse, Typography, Card, CardMedia, CardActionArea, CardActions, Button, CardContent, Grid, Divider, Slider, CardHeader } from '@material-ui/core';

import 'typeface-roboto';
import grey from '@material-ui/core/colors/grey'

import Drive from "./drive.png"
// import Discord from "./discord.png"
// import VisualStudioCode from "./vscode.png"
// import Amongus from './Amongus';


export default function Websites() {
  return (

    <div style={{ margin: "50px" }}>
      <Grid container justifyContent="space-around" spacing={4}>

        <Grid item xs={4}>
          <Card>
            <CardActionArea onClick={()=>fetch("/website?url=https://classroom.google.com/u/1/h")}>
              <CardMedia
                alt="Gmail"
                component="img"
                title="Gmail"
                height="150"
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F9to5google.com%2Fwp-content%2Fuploads%2Fsites%2F4%2F2020%2F01%2Fgoogle-classroom-cover.jpg%3Fquality%3D82%26strip%3Dall%26w%3D1600&f=1&nofb=1" />
              <CardContent>
                <Typography>Google Classroom</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card>
            <CardActionArea onClick={()=>fetch("/website?url=https://drive.google.com/drive/u/1/my-drive")}>
              <CardMedia
                alt="Gmail"
                component="img"
                title="Gmail"
                height="150"
                image={Drive} />
              {/* // image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdownload.logo.wine%2Flogo%2FGoogle_Drive%2FGoogle_Drive-Logo.wine.png&f=1&nofb=1" /> */}
              <CardContent>
                <Typography>Drive</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

    
        <Grid item xs={4}>
          <Card>
            <CardActionArea onClick={()=>fetch("/website?url=https://mail.google.com/mail/u/1/#inbox")}>
              <CardMedia
                alt="Gmail"
                component="img"
                title="Gmail"
                height="150"
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftechstory.in%2Fwp-content%2Fuploads%2F2020%2F10%2Fworkspace-new-gmail-icon-1.png&f=1&nofb=1" />
              <CardContent>
                <Typography>Gmail</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>


        <Grid item xs={4}>
          <Card>
            <CardActionArea onClick={()=>fetch("/website?url=https://www.youtube.com/")}>
              <CardMedia
                alt="Youtube"
                component="img"
                title="Youtube"
                height="150"
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F9to5mac.com%2Fwp-content%2Fuploads%2Fsites%2F6%2F2017%2F08%2Fyoutube_logo_redesign_1.jpg%3Fquality%3D82%26strip%3Dall%26w%3D1000&f=1&nofb=1" />
              <CardContent>
                <Typography>Youtube</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card>
            <CardActionArea onClick={()=>fetch("/website?url=https://www.khanacademy.org/")}>
              <CardMedia
                alt="Gmail"
                component="img"
                title="Gmail"
                height="150"
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flh3.googleusercontent.com%2F_dxT03TkAFWWDUJg7NrkznfwCuAoF4h7Fs_vmeaPfpU5KJE40CyXDYWZV_XwbZLu_ncPLbYNZpArIUTRMkosmgtbaKuHsXBOvbipUw%3Ds0&f=1&nofb=1" />
              <CardContent>
                <Typography>Khan Academy</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card>
            <CardActionArea onClick={()=>fetch("/website?url=https://notices.macleans.school.nz/")}>
              <CardMedia
                alt="Gmail"
                component="img"
                title="Gmail"
                height="150"
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsportsgroundproduction.blob.core.windows.net%2Fcms%2F11979%2Flogo.jpeg&f=1&nofb=1" />
              <CardContent>
                <Typography>Daily Notices</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card>
            <CardActionArea onClick={()=>fetch("/website?url=https://reddit.com")}>
              <CardMedia
                alt="Reddit"
                component="img"
                title="Reddit"
                height="150"
                image="https://townsquare.media/site/838/files/2020/06/redditlogo.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89" />
              <CardContent>
                <Typography>Reddit</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card>
            <CardActionArea onClick={()=>fetch("/website?url=https://twitter.com")}>
              <CardMedia
                alt="Reddit"
                component="img"
                title="Reddit"
                height="150"
                image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAwFBMVEViqd////////39//////piqd7///z7//9iqeH//f////hkqN1eq+Jjqdz//fv8//qAuONhqNhkpt5iqthXqd9Ypt9Wo9dVquVTpeKdyOSlyeGXyOloptVdrdt+uN7J4O/r+f3///O62O5Zpc9yrt3m9f7W6vSYx95xrtLV8PjE5PHp+v1ZodOt2OhXocx9r9lFneCIv+a10+fH3OaLs9NYnNY+oNXl8f684P7t8/adzetgtOGVv+KMv92y1fC91+dctjOvAAAEtElEQVR4nO3bb1ejOBQGcBIISSHB0iZA7T+spWqLzlrXmdVV5/t/qwmd1a2KjvNm8Wye39EXtm/ueU643AT0PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4Lykmmcc8TwgRKyni5rOBp1QsBeu6tk9HKZUy5hn7Y1IlxO6zVMVCC9l1bZ+ODSsvWH90OBr3TS4mTVpTIbRRcd51bZ+OkvVsXh4cUUL8m8Uyaz6Lc308Hjp4GTLGRLrUTApPvfxO2g6Vp+uAUp+HQRD4Af9uhDB6OKpWtUi7qLdT2tPmpDw2Sr7KypNKeqcVjcies9PhaL2hdKbTaQfldkuJtK6iKhY/29EzwpMTThN/P6yIcxKQ8LyQgy7K7VYq0yU5IFWae696kBR1RUiP74flhyHnwfxCH8thF/V2Sgk9ojyJyi9a2P71LDCht5FPevtZkZ5PErr4Q47PLrsquTuxNIsmhICPCjkcPpudTMoPSIvVokrIVh+/um7/7x7DIhFZT/Tz0UmPSWtY9vZI5kbrjkrujg1r2wTAeRiVo8zsr5ZiTWhbWD1KrqZ6Ujg3aDFpxrZt0zA54JRUf2Za2juj3Qja3+uKtoYVkq3xZMus4YCcJDx5mqPu66LZ9dlZ1cs2ftgWFr/PnGtXj8yK/ptJj2y2/drkWqWpeSOs6mvh5KpqiEsS7AbPZqDivV7Ay/nhsjbmumoPq9SpmyuLKaWuV3Q3ePp+c1Ps7YLz+bfVXzftDb6qp0XXdXdCKpUV9SZqC+Utq1rGXdfdCcnMaPb1YvM7Yc0zR8MScTEnm/PDm98Ia2EcDUvKYkuPWltTO+rTO+3mjOUppmd2Jv1wVnYio0uduxlWzPTFTfDxsA5oj9fawSPlhlRS39L2bU2biNB1IQduzllSNXvAgAYB9X8dlQ3LD28LT7gZ1s6EJ5yT5NdRNSelxMHz5D3KzHjgf2hhER6t3JzeHwmmTzftO5tXEtp3PCyl9cVh+aG0gsq4fRlKNV3+rdOTj0zx9M7RE4dHWk37JPjQVUiqQrk5kD5R0+uziLeeXb3U1wO3354RdtOzJFGPUMrfC8p+eVUox8OyRHZCQs7bT0afwkrKuutCPwdzS+wQ/+4dkdKZe4+/2ogivS9p8P5kOnL3qc4zAzXQ6qEkUUhb74s+4eF55uKrM28wpr68/d4+bSU8WBsmENY/xLHKi3Tt99rComSOa3BfYSYPnLQf1fgPWToQzL1XI/dJpmTz+rYwxpwubFQvzph9f/eGFr8rPCUEc3t6T1OdF4URx7OHbyR6/fgwsdEl5Gxpui70M9CX66urq1VFSHBE7FT6MixuFxp/yJyf2ndkNltTEkQ/YwpfLS37zeLU1YeqLylPmi9rHgU04bY57faG1LdLzPdpEyBfLAvb1HAjfJSbyXjFwyNqu/uBFYTUbnyCiPDVYV04+ozwLc0JlVmOF2XJg2ai2v1LRXm2vYxNPhwM3HuF+z25HQmYSjOjlrO78Xg8Gt31l8oUWjMvlxKX4HOM2bxs+xKG2T/syGUnBRYztvuXHjR3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPh0fgAvZUmwOPUHQgAAAABJRU5ErkJggg==" />
              <CardContent>
                <Typography>Twitter</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card>
            <CardActionArea onClick={()=>fetch("/website?url=https://instagram.com")}>
              <CardMedia
                alt="Reddit"
                component="img"
                title="Reddit"
                height="150"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxa6kx-wf6R5MFViu7RF5cCAyJsaQSWvGRhCC4CR2HG85a8uHJMkXeXdn6xa-k3kyyS-E&usqp=CAU" />
              <CardContent>
                <Typography>Instagram</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>


      </Grid>


      

    </div>
  )
}