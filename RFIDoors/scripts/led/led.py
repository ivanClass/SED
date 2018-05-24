import RPi.GPIO as GPIO
import time

def encenderLedRojo():
	GPIO.setmode(GPIO.BCM)
	GPIO.setup(18, GPIO.OUT)
	GPIO.output(18, True)

#####################################

def encenderLedVerde():
	GPIO.setmode(GPIO.BCM)
	GPIO.setup(23, GPIO.OUT)
	GPIO.output(23, True)

#####################################

def apagarLedRojo():
	GPIO.setmode(GPIO.BCM)
	GPIO.setup(18, GPIO.OUT)
	GPIO.output(18, False)
	GPIO.cleanup()

#####################################

def apagarLedVerde():
	GPIO.setmode(GPIO.BCM)
	GPIO.setup(23, GPIO.OUT)
	GPIO.output(23, False)
	GPIO.cleanup()