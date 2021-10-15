import sys
from ctypes import cast, POINTER
from comtypes import CLSCTX_ALL
from pycaw.pycaw import AudioUtilities, IAudioEndpointVolume
import math

volumeAmount = int(sys.argv[1])
# Get default audio device using PyCAW
devices = AudioUtilities.GetSpeakers()
interface = devices.Activate(
    IAudioEndpointVolume._iid_, CLSCTX_ALL, None)
volume = cast(interface, POINTER(IAudioEndpointVolume))

# Get current volume of the left channel
# currentVolumeLeft = volume.GetChannelVolumeLevel(0)
# Set the volume of the right channel to half of the volume of the left channel
# print(volume.GetChannelVolumeLevel(0))

dBVolume = -37+221 * volumeAmount /300 - 11 * volumeAmount **2 /3000
# dBVolume = 0
volume.SetChannelVolumeLevel(1,dBVolume, None)
volume.SetChannelVolumeLevel(0,dBVolume, None)