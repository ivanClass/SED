import sys

sys.path.insert(0, '/home/pi/Desktop/RFIDoors/')

from scripts.rfid import rfidLectura
from scripts.rfid import rfidEscritura
from scripts.servo import movimientoServo
from scripts.uart import escrituraUart
from scripts.uart import lecturaUart
from scripts.ultrasonido import datosUltrasonido

mensaje = "{id:" + "123456789" + "}"

escrituraUart.mandarMensajeUART(mensaje)
