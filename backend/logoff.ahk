#SingleInstance, Force
SendMode Input
SetWorkingDir, %A_ScriptDir%

DllCall("PowrProf\SetSuspendState", "Int", 0, "Int", 0, "Int", 0)
