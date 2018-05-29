# server.py
import sys
import time

from flask import Flask
from flask import jsonify
from flask_cors import CORS
from flask import request


sys.path.insert(0, '/home/pi/Desktop/SED/RFIDoors/')
sys.path.insert(0, '/home/pi/Desktop/SED/RFIDoors/administrador/rfidoors/src/server/')

from scripts.rfid import rfidLectura;
from scripts.rfid import rfidEscritura;
from scripts.led import led
from bbdd import consultarBBDD

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
	return "Bienvenido a la API RFIDoors"

@app.route("/alta", methods = ['POST'])
def alta():
	content = request.get_json()

	idTarjeta = rfidLectura.esperarDatoLecturaRFID()
	led.encenderLedVerde()
	time.sleep(2)
	led.apagarLedVerde()

	nombre = content['nombre']
	apellido1 = content['apellido1']
	apellido2 = content['apellido2']
	fechainicio = content['fechainicio']
	fechafin = content['fechafin']
	consultarBBDD.altaUsuario(idTarjeta, nombre, apellido1, apellido2, fechainicio, fechafin)
	
	return "Soy la funcion alta"

@app.route("/baja", methods = ['POST'])
def baja():
	#data = request.form
	content = request.get_json()
	idTarjeta = content['idTarjeta']
	consultarBBDD.borrarUsuario(idTarjeta)

	return "Eliminacion OK" 

@app.route("/consulta", methods = ['GET'])
def consulta():
	#data = request.form
	idTarjeta = rfidLectura.esperarDatoLecturaRFID()
   	led.encenderLedVerde()
	time.sleep(2)
	led.apagarLedVerde()
	
   	return consultarBBDD.consultarUsuario(idTarjeta)

@app.route("/consultaAccesos", methods = ['GET'])
def consultaAccesos():
	#data = request.form

   	return jsonify(consultarBBDD.consultarAccesos())

app.run(host='0.0.0.0')