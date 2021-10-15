#SingleInstance, Force
SendMode Input
SetWorkingDir, %A_ScriptDir%

IfWinNotExist, ahk_exe brave.exe
    Run, "C:\ProgramData\Microsoft\Windows\Start Menu\Programs\brave.lnk"
else
    WinActivate ahk_exe brave.exe