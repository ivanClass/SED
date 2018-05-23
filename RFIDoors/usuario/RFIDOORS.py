import sys

sys.path.insert(0, '/home/pi/Desktop/RFIDoors/')

from scripts.rfid import rfidLectura, rfidEscritura
from scripts.servo import movimientosServo
from scripts.uart import escrituraUart, lecturaUart
from scripts.ultrasonido import datosUltrasonido


print(rfidLectura.esperarDatoLecturaRFID())