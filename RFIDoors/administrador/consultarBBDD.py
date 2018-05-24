import sys
import datetime

sys.path.insert(0, '/home/pi/Desktop/SED/RFIDoors/')
sys.path.insert(0, '/home/pi/Desktop/SED/RFIDoors/administrador/rfidoors/src/server/')


from scripts.rfid import rfidLectura;
from scripts.rfid import rfidEscritura;
from scripts.servo import movimientoServo;
from scripts.uart import escrituraUart;
from scripts.uart import lecturaUart;
from scripts.ultrasonido import datosUltrasonido;
from bbdd import consultarBBDD;


mensaje = ""
fechaValida = ""

while (True):
	mensaje = lecturaUart.recibirDatoUART(30)

	##TIPOS DE MENSAJE
	# - Preguntar por una llava a la bbdd -> {id:llave}
	# - Responder sobre una llave         -> {respuestaBBDD:si}
	# - Solicitar nueva acceso a bbdd     -> {acceso:llave}


	if (mensaje[1:3] == "id"):

		print("UART")

		existencia = consultarBBDD.existeUsuario(mensaje[4:-1])

		print(existencia)

		if(existencia >= 1):
			fechaValida = consultarBBDD.obtenerFechaValidez(mensaje[4:-1])
			print(fechaValida)

			if (str(fechaValida[0]) > str(datetime.datetime.now())):
				print("Existe con fecha valida")
				mensaje = "{respuestaBBDD:si}"
			else:
				print("existe con fecha no valida")
				mensaje = "{respuestaBBDD:no}"
		else:
			print("No existe")
			mensaje = "{respuestaBBDD:no}"

		print("Envio respuesta")
		escrituraUart.mandarMensajeUART(mensaje)

	if (mensaje[1:7] == "acceso"):
		fecha = datetime.datetime.now()
		llave = mensaje[8:-1]
		consultarBBDD.nuevoAccesoHistorial(llave, fecha)