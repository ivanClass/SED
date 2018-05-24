import sqlite3
import json

def existeUsuario(id_llave):
    
    contador = 0

    try:
        with sqlite3.connect("/home/pi/Desktop/SED/RFIDoors/administrador/rfidoors/src/server/bbdd/rfidoors.db") as connection:
            cursor = connection.cursor()
            cursor.execute("""
                SELECT * FROM usuarios WHERE id_tarjeta=?;
                """, (id_llave,))

            for row in cursor:
            	contador = contador + 1
            	print(row)

            print("Consulta: consultarUsuario -> correcta")
    except ValueError:
        
        print(ValueError)
        print("Consulta: consultarUsuario -> Error")
    

    return contador

def obtenerFechaValidez(id_llave):
    fecha = ""

    try:
        with sqlite3.connect("/home/pi/Desktop/SED/RFIDoors/administrador/rfidoors/src/server/bbdd/rfidoors.db") as connection:
            cursor = connection.cursor()
            cursor.execute("""
                SELECT fecha_fin FROM validez WHERE id_tarjeta=?;
                """, (id_llave,))

            for row in cursor:
                fecha = row


            print("Consulta: ObtenerFechaValidezUsuario -> correcta")
    except ValueError:
        
        print(ValueError)
        print("Consulta: ObtenerFechaValidezUsuario -> Error")
    

    return fecha


def altaUsuario(id_tarjeta, nombre, apellido1, apellido2, fecha_ini, fecha_fin):
    try:
        with sqlite3.connect("/home/pi/Desktop/SED/RFIDoors/administrador/rfidoors/src/server/bbdd/rfidoors.db") as connection:
            cursor = connection.cursor()
            cursor.execute("""
                INSERT INTO usuarios VALUES(?, ?, ?, ?);
                """, (id_tarjeta, nombre, apellido1, apellido2))

            print("Consulta: altaUsuario -> correcta")
    except ValueError:
        print(ValueError)
        print("Consulta: altaUsuario -> Error")

    ######################################################################################################3

    try:
        with sqlite3.connect("/home/pi/Desktop/SED/RFIDoors/administrador/rfidoors/src/server/bbdd/rfidoors.db") as connection:
            cursor = connection.cursor()
            cursor.execute("""
                INSERT INTO validez VALUES(?, ?, ?);
                """, (id_tarjeta, fecha_ini, fecha_fin))

            print("Consulta: altaValidez -> correcta")
    except ValueError:
        print(ValueError)
        print("Consulta: altaValidez -> Error")


def nuevoAccesoHistorial(id_tarjeta, fecha):
    try:
        with sqlite3.connect("/home/pi/Desktop/SED/RFIDoors/administrador/rfidoors/src/server/bbdd/rfidoors.db") as connection:
            cursor = connection.cursor()
            cursor.execute("""
                INSERT INTO historial VALUES(?, ?, ?);
                """, (None, id_tarjeta, fecha))

            print("Consulta: altaAccesoHistorial -> correcta")
    except ValueError:
        print(ValueError)
        print("Consulta: altaAccesoHistorial -> Error")


def consultarUsuario(id_llave):
    
    resultado = {}

    try:
        with sqlite3.connect("/home/pi/Desktop/SED/RFIDoors/administrador/rfidoors/src/server/bbdd/rfidoors.db") as connection:
            cursor = connection.cursor()
            cursor.execute("""
                SELECT * 
                FROM usuarios LEFT JOIN validez ON usuarios.id_tarjeta = validez.id_tarjeta
                WHERE usuarios.id_tarjeta=?;
                """, (id_llave,))

            for row in cursor:
                resultado = row

            print("Consulta: consultarUsuario -> correcta")
    except ValueError:
        print(ValueError)
        print("Consulta: consultarUsuario -> Error")

    usuario = {"id_tarjeta": resultado[0], "nombre": resultado[1], "apellido1": resultado[2], "apellido2": resultado[3], "fecha_ini": resultado[5], "fecha_fin": resultado[6]}

    usuario = json.dumps(usuario)

    return usuario


def consultarAccesos():
    accesos = []
    contador = 0

    try:
        with sqlite3.connect("/home/pi/Desktop/SED/RFIDoors/administrador/rfidoors/src/server/bbdd/rfidoors.db") as connection:
            cursor = connection.cursor()
            cursor.execute("""
                SELECT historial.fecha_acceso, usuarios.id_tarjeta, usuarios.nombre, usuarios.apellido1, usuarios.apellido2
                FROM historial LEFT JOIN usuarios ON usuarios.id_tarjeta = historial.id_tarjeta
                ORDER BY datetime(historial.fecha_acceso) DESC
                """)

            for row in cursor:
                resultado = row
                usuario = {"fecha_acceso": resultado[0], "id_tarjeta": resultado[1], "nombre": resultado[2], "apellido1": resultado[3], "apellido2": resultado[4]}
                #usuario = json.dumps(usuario)
                accesos.append(usuario)
                contador = contador + 1


            print("Consulta: consultarAccesos -> correcta")
    except ValueError:
        print(ValueError)
        print("Consulta: consultarAccesos -> Error")

        #accesos = json.dumps(accesos)

    return accesos


def borrarUsuario(id_llave):

    try:
        with sqlite3.connect("/home/pi/Desktop/SED/RFIDoors/administrador/rfidoors/src/server/bbdd/rfidoors.db") as connection:
            cursor = connection.cursor()
            cursor.execute("""
                DELETE FROM usuarios WHERE id_tarjeta=?;
                """, (id_llave,))

            cursor.execute("""
            DELETE FROM historial WHERE id_tarjeta=?;
            """, (id_llave,))

            cursor.execute("""
            DELETE FROM validez WHERE id_tarjeta=?;
            """, (id_llave,))

            print("Consulta: borrarUsuario -> correcta")
    except ValueError:
        print(ValueError)
        print("Consulta: borrarUsuario -> Error") 

#43503879590
