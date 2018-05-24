#!/usr/bin/env python
import time
import serial

# ser = serial.Serial(
#   port='/dev/ttyAMA0',
#   baudrate = 9600,
#   parity=serial.PARITY_NONE,
#   stopbits=serial.STOPBITS_ONE,
#   bytesize=serial.EIGHTBITS,
#   timeout=1
# )

# counter=0

# while 1:
#   x=ser.readline()
#   print x


###############################################################

def recibirDatoUART(tiempoEsperaMax):
	ser = serial.Serial(
		port='/dev/ttyAMA0',
		baudrate = 9600,
		parity=serial.PARITY_NONE,
		stopbits=serial.STOPBITS_ONE,
		bytesize=serial.EIGHTBITS,
		timeout=1
	)

	recibido = False
	mensaje = ""

	if(tiempoEsperaMax == 0):
		while(True):
			mensaje = ser.readline()

			if(mensaje[1:8] == "msg"):
				recibido = True
				return mensaje[5:-1]

	else:
		tComienzo = time.time()
		tIntermedio = 0

		while ((recibido == False) and ((tIntermedio - tComienzo) <= tiempoEsperaMax)):
			mensaje = ser.readline()
			tIntermedio = time.time()

			print(mensaje)

			if(mensaje[1:4] == "msg"):
				recibido = True
				print("RECIBIDO TRUE")
				mensaje = mensaje[5:-1]

		return mensaje

###############################################################