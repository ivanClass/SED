# server.py
from flask import Flask

app = Flask(__name__)

@app.route("/")
def index():
	return "Bienvenido a la API RFIDoors"

@app.route("/alta", methods = ['POST'])
def alta():
	#data = request.form
	return "Soy la funcion alta"

@app.route("/baja", methods = ['POST'])
def baja():
	#data = request.form
	return "Soy la funcion baja"

@app.route("/consulta", methods = ['GET'])
def consulta():
	#data = request.form
	return "Soy la funcion consulta"

app.run(host='0.0.0.0')