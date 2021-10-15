import express from "express"
import { spawn } from "child_process";


const app = express();
const port = 3001;

app.get('/brave', (req, res) => {
    console.log("BRAVE")
    const ahkProcess = spawn('D:/Program Files (x86)/AutoHotKeys/AutoHotkey.exe', ["./brave.ahk"]);
    ahkProcess.stdout.on("data", function (data) {
        let dataToSend = data.toString();
        res.send(dataToSend)
    });
    res.send()
});

app.get('/vscode', (req, res) => {
    console.log("VSCODE")
    const pythonProcess = spawn('D:/Program Files (x86)/AutoHotKeys/AutoHotkey.exe', ["./vscode.ahk"]);
    pythonProcess.stdout.on("data", function (data) {
        let dataToSend = data.toString();
        res.send(dataToSend)
    });
    res.send()
});

app.get('/discord', (req, res) => {
    console.log("DISCORD")
    const ahkProcess = spawn('D:/Program Files (x86)/AutoHotKeys/AutoHotkey.exe', ["./discord.ahk"]);
    ahkProcess.stdout.on("data", function (data) {
        let dataToSend = data.toString();
        res.send(dataToSend)
    });
    res.send()
});

app.get('/spotify', (req, res) => {
    console.log("SPOTIFY")
    const ahkProcess = spawn('D:/Program Files (x86)/AutoHotKeys/AutoHotkey.exe', ["./spotify.ahk"]);
    ahkProcess.stdout.on("data", function (data) {
        let dataToSend = data.toString();
        res.send(dataToSend)
    });
    res.send()
});

app.get('/notes', (req, res) => {
    console.log("NOTES")
    const ahkProcess = spawn('D:/Program Files (x86)/AutoHotKeys/AutoHotkey.exe', ["./notes.ahk"]);
    ahkProcess.stdout.on("data", function (data) {
        let dataToSend = data.toString();
        res.send(dataToSend)
    });
    res.send()
});

app.get('/desktop', (req, res) => {
    console.log("NOTES")
    const ahkProcess = spawn('D:/Program Files (x86)/AutoHotKeys/AutoHotkey.exe', ["./desktop.ahk"]);
    ahkProcess.stdout.on("data", function (data) {
        let dataToSend = data.toString();
        res.send(dataToSend)
    });
    res.send()
});

app.get('/poweroff', (req, res) => {
    console.log("NOTES")
    const ahkProcess = spawn('D:/Program Files (x86)/AutoHotKeys/AutoHotkey.exe', ["./logoff.ahk"]);
    ahkProcess.stdout.on("data", function (data) {
        let dataToSend = data.toString();
        res.send(dataToSend)
    });
    res.send()
});

app.get('/brightness', (req, res) => {
    let brightness = req.query.brightness
    console.log(brightness)
    const pythonProcess = spawn('python', ["./brightness.py", brightness]);
    res.send()
});

app.get('/getBrightness', (req, res) => {
    const pythonProcess = spawn('python', ["./getBrightness.py"]);
    pythonProcess.stdout.on("data", function (data) {
        let dataToSend = data.toString();
        res.send(dataToSend)
    });
});


app.get('/volume', (req, res) => {
    let volume = req.query.volume
    console.log(volume)
    const pythonProcess = spawn('python', ["./volume.py", volume]);
    res.send()
});

app.get('/getVolume', (req, res) => {
    const pythonProcess = spawn('python', ["./getVolume.py"]);
    pythonProcess.stdout.on("data", function (data) {
        let dataToSend = data.toString();
        res.send(dataToSend)
    });
});

app.get('/website', (req, res) => {
    let url = req.query.url
    console.log(url)
    const pythonProcess = spawn('python', ["./website.py", url]);
    res.send()
});

app.get("/", (req, res) => {
    res.sendFile('build/index.html', { root: root })
})

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
