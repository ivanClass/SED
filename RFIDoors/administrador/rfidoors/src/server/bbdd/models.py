import sqlite3

def drop_table():
    with sqlite3.connect('rfidoors.db') as connection:
        c = connection.cursor()
        c.execute("""DROP TABLE IF EXISTS usuarios;""")
        c.execute("""DROP TABLE IF EXISTS validez;""")
        c.execute("""DROP TABLE IF EXISTS historial;""")
    return True


def create_db():
    with sqlite3.connect('rfidoors.db') as connection:
        c = connection.cursor()
        table = """CREATE TABLE usuarios(
            id_tarjeta INTEGER PRIMARY KEY,
            nombre VARCHAR NOT NULL,
            apellido1 VARCHAR NOT NULL,
            apellido2 VARCHAR NOT NULL
        );
        """
        c.execute(table)


        table = """CREATE TABLE validez(
            
            id_tarjeta INTEGERT NULL,
            fecha_inicio DATETIME NOT NULL,
            fecha_fin DATETIME L NOT NULL,
            FOREIGN KEY(id_tarjeta) REFERENCES usuarios(id_tarjeta)
        );
        """
        c.execute(table)


        table = """CREATE TABLE historial(       
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            id_tarjeta INTEGERT NULL, 
            fecha_acceso DATETIME NOT NULL,
            FOREIGN KEY(id_tarjeta) REFERENCES usuarios(id_tarjeta)

        );
        """
        c.execute(table)

    return True

###################################################


if __name__ == '__main__':
    drop_table()
    create_db()

###################################################