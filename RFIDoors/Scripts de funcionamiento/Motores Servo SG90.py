import RPi.GPIO as GPIO
import time

#GPIO.setmode(GPIO.BOARD)
GPIO.setmode(GPIO.BCM)
GPIO.setup(5, GPIO.OUT)
GPIO.setup(12, GPIO.OUT)

pIzq = GPIO.PWM(5, 50)
pDer = GPIO.PWM(12, 50)


pIzq.start(7.5)
pDer.start(7.5)

try:
	while True:
		pIzq.ChangeDutyCycle(7.5) #Ponerlo a 90
		pDer.ChangeDutyCycle(7.5) #Ponerlo a 90
		time.sleep(3)
		pIzq.ChangeDutyCycle(0.5) #Ponerlo a 0
		pDer.ChangeDutyCycle(12.5) #Ponerlo a 0

		time.sleep(2)
		#p.ChangeDutyCycle(12.5) #Ponerlo a 180
		#time.sleep(3)
	

	#p.ChangeDutyCycle(7.5)
	#p.stop()
	#GPIO.cleanup()


except KeyboardInterrupt:
	pIzq.stop()
	pDer.stop()
	GPIO.cleanup()
