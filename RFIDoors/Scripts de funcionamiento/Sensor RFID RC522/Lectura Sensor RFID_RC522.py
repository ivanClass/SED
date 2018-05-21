#!/usr/bin/env python

import RPi.GPIO as GPIO
import SimpleMFRC522

lector = SimpleMFRC522.SimpleMFRC522()


try:
    id, text = lector.read()
    print(id)
    print(text)
    

finally:
    GPIO.cleanup()
