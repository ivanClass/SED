import sys
import time

sys.path.insert(0, '/home/pi/Desktop/SED/RFIDoors/')
sys.path.insert(0, '/home/pi/Desktop/SED/RFIDoors/administrador/rfidoors/src/server/')

from scripts.rfid import rfidLectura;
from scripts.rfid import rfidEscritura;
from scripts.servo import movimientoServo;
from scripts.uart import escrituraUart;
from scripts.uart import lecturaUart;
from scripts.ultrasonido import datosUltrasonido;
from scripts.led import led;
from scripts.zumbador import zumbador;


#print(rfidLectura.esperarDatoLecturaRFID())


##TIPOS DE MENSAJE
# - Preguntar por una llava a la bbdd -> {id:llave}
# - Responder sobre una llave         -> {respuestaBBDD:si}
# - Solicitar nueva acceso a bbdd     -> {acceso:llave}


while (True):

	#En primer lugar esperamos la lectura de alguna tarjeta
	print("Acercar llave")
	llave = rfidLectura.esperarDatoLecturaRFID()

	##
	print(llave)

	##Preguntamos si la base de datos contiene la tarjeta acercada
	mensaje = "{id:" + str(llave) + "}"

	escrituraUart.mandarMensajeUART(mensaje)

	##Esperamos respuesta de la base de datos con tiempo maximo de 15 segundos
	respuestaBBDD = lecturaUart.recibirDatoUART(15)
	##respuestaBBDD = '{respuestaBBDD:si}'
	print("Respuesta BBDD")
	print(respuestaBBDD)

	if (respuestaBBDD != ""):
		print("Ha habido respuestas de la BBDD")
		existenciaBBDD = respuestaBBDD[15:-1]

		if(existenciaBBDD == "si"):
			print("La BBDD ha dicho que la tarjeta es valida")
			led.encenderLedVerde()
			zumbador.sonidoAccesoPermitido()

			#Agregar a la base de datos un nuevo acceso de esta tarjeta
			mensaje = '{acceso: ' + str(llave) + '}'
			escrituraUart.mandarMensajeUART(mensaje)

			#Las puertas se abren, tarjeta reconocida en la base de datos
			movimientoServo.abrirPuertas()

			#Arranco el sensor ultrasonido para detectar la pasada
			datosUltrasonido.encenderYdetectarUltrasonido(10, 18)
			
			#Cierro las puertas
			movimientoServo.cerrarPuertas()
			#led.apagarLedVerde()

		else:
			#Las puertas se quedan cerradas
			led.encenderLedRojo()
			zumbador.sonidoAccesoDenegado()
			time.sleep(3)
			led.apagarLedRojo()