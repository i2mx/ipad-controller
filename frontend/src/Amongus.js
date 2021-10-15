import React from "react"
import { Card, CardContent, Button, Typography, Slider, IconButton } from "@material-ui/core"
import Power from "@material-ui/icons/PowerSettingsNew"

export default class Amongus extends React.Component {
    constructor() {
        super()
        this.state = { volume: 20, brightness: 75 }
    }

    componentDidMount() {
        fetch("/getVolume")
            .then(data => data.text())
            .then(text => { this.setState({ volume: text }) })

        fetch("/getBrightness")
            .then(data => data.text())
            .then(text => this.setState({ brightness: text }))

    }

    handleBrightnessChange = (event, value) => {
        this.setState({ brightness: value });
        fetch(`/brightness?brightness=${value}`)
    };

    handleVolumeChange = (event, value) => {
        this.setState({ volume: value });
        fetch(`/volume?volume=${value}`)
    };

    render() {
        return (
            <Card>
                <CardContent>
                    <Typography color="textSecondary">Brightness</Typography>
                    <Slider
                        style={{
                            padding: '22px 0px',
                        }}
                        value={this.state.brightness}
                        min={0}
                        max={100}
                        step={10}
                        onChange={this.handleBrightnessChange} />
                    <Typography color="textSecondary">Volume</Typography>
                    <Slider
                        style={{
                            padding: '22px 0px',
                        }}
                        value={this.state.volume}
                        min={0}
                        max={100}
                        step={10}
                        onChange={this.handleVolumeChange} />
                    <Button variant="contained" onClick={()=>fetch("/desktop")}>
                        Switch To Desktop
                    </Button>
                    <IconButton onClick={()=>fetch("/poweroff")}>
                        <Power />
                    </IconButton>
                </CardContent>
            </Card>
        )
    }
}
