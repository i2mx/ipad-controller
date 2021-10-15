#SingleInstance, Force
SendMode Input
SetWorkingDir, %A_ScriptDir%

IfWinNotExist, ahk_exe Discord.exe
    Run, C:\Users\Administrator\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Discord Inc\Discord
else
    WinActivate ahk_exe Discord.exe