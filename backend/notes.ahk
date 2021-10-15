#SingleInstance, Force
SendMode Input
SetWorkingDir, %A_ScriptDir%

IfWinNotExist, ahk_exe Notion.exe
    Run, C:\Users\Administrator\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Notion

if !WinActive("ahk_exe Notion.exe")
    WinActivate ahk_exe Notion.exe