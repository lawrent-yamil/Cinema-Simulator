import mysql.connector as mariaDB

class Request():
  def __init__(self):
    try:
      self.mariaDB = mariaDB.connect(
        user='root',
        password='2005',
        host='localhost',
        database='db_cinema'
      )
      self.cursor = self.mariaDB.cursor()
    except mariaDB.Error as error:
      print("Error: {}".format(error))

  def set_usuarios_to_tableUser(self, usuario):
    sql = "INSERT INTO usuarios (nombre_usuario, contrasena) VALUES (%s, %s)"
    val = (usuario['nombre'],usuario['password'])
    self.cursor.execute(sql, val)
    self.mariaDB.commit()
  
  def get_data_from_database(self, user):
    sql = "SELECT * FROM usuarios WHERE nombre_usuario = %s"
    val = (user['nombre'],)
    self.cursor.execute(sql, val)
    data = self.cursor.fetchone()
    return data