#SingleInstance, Force
SendMode Input
SetWorkingDir, %A_ScriptDir%

IfWinNotExist, ahk_exe Spotify.exe
    Run, C:\Users\Administrator\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Spotify
else
    WinActivate ahk_exe Spotify.exe