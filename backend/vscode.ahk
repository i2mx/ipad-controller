#SingleInstance, Force
SendMode Input
SetWorkingDir, %A_ScriptDir%

IfWinNotExist, ahk_exe code.exe
    Run, "D:\Program Files (x86)\VSCode\Microsoft VS Code\Code.exe"
else
    WinActivate ahk_exe code.exe