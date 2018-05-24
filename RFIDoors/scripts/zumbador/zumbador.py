# importamos la libreria GPIO
import RPi.GPIO as GPIO
import time


def sonidoAccesoDenegado():

	GPIO.setwarnings(False)
	GPIO.setmode(GPIO.BCM)
	GPIO.setup(21,GPIO.OUT)

	tSleep = 0.1

	GPIO.output(21, True)
	time.sleep(tSleep)
	GPIO.output(21, False)
	time.sleep(tSleep)
	GPIO.output(21, True)
	time.sleep(tSleep)
	GPIO.output(21, False)
	time.sleep(tSleep)
	GPIO.output(21, True)
	time.sleep(tSleep)
	GPIO.output(21, False)
	time.sleep(tSleep)
	GPIO.output(21, True)
	time.sleep(tSleep)
	GPIO.output(21, False)
	time.sleep(tSleep)
	GPIO.output(21, True)
	time.sleep(tSleep)
	GPIO.output(21, False)
	time.sleep(tSleep)
	GPIO.output(21, True)
	time.sleep(tSleep)
	GPIO.output(21, False)

def sonidoAccesoPermitido():
	GPIO.setwarnings(False)
	GPIO.setmode(GPIO.BCM)
	GPIO.setup(21,GPIO.OUT)

	tSleep = 1

	GPIO.output(21, True)
	time.sleep(tSleep)
	GPIO.output(21, False)