#!/usr/bin/env python

import RPi.GPIO as GPIO
import SimpleMFRC522

def esperarDatoLecturaRFID():
	lector = SimpleMFRC522.SimpleMFRC522()

	id = ""

	try:
	    id, text = lector.read()   

	finally:
	    GPIO.cleanup()
	    return id;
