import RPi.GPIO as GPIO
import time

def abrirPuertaDer():
	GPIO.setmode(GPIO.BCM)
	GPIO.setup(12, GPIO.OUT)

	pDer = GPIO.PWM(12, 50)

	pDer.start(7.5)
	pDer.ChangeDutyCycle(12.5) #Poner el servo a 180 grados
	time.sleep(0.3)

	pDer.stop()
	GPIO.cleanup()

def abrirPuertaIzq():
	GPIO.setmode(GPIO.BCM)
	GPIO.setup(5, GPIO.OUT)

	pIzq = GPIO.PWM(5, 50)

	pIzq.start(7.5)
	pIzq.ChangeDutyCycle(0.5) #Poner el servo a 0 grados
	time.sleep(0.3)

	pIzq.stop()
	GPIO.cleanup()

####################################################

def cerrarPuertaDer():
	GPIO.setmode(GPIO.BCM)
	GPIO.setup(12, GPIO.OUT)

	pDer = GPIO.PWM(12, 50)

	pDer.start(7.5)
	pDer.ChangeDutyCycle(7.5)  #Poner el servo a 90 grados
	time.sleep(0.3)

	pDer.stop()
	GPIO.cleanup()
	print("mec")

def cerrarPuertaIzq():
	GPIO.setmode(GPIO.BCM)
	GPIO.setup(5, GPIO.OUT)

	pIzq = GPIO.PWM(5, 50)

	pIzq.start(7.5)
	pIzq.ChangeDutyCycle(7.5) #Poner el servo a 90 grados
	time.sleep(0.3)

	pIzq.stop()
	GPIO.cleanup()

####################################################


def abrirPuertas():
	abrirPuertaIzq()
	abrirPuertaDer()


def cerrarPuertas():
	cerrarPuertaDer()
	cerrarPuertaIzq()

####################################################