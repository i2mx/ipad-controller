import sys
import screen_brightness_control as sbc
import time

brightness = int(sys.argv[1])

sbc.set_brightness(brightness)
