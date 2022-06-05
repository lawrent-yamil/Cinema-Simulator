from flask import Flask, render_template, request, session, redirect, url_for
from _request_ import Request as DB

class App():
  # Iniciara la app
  def __init__(self):
    self.app = Flask(__name__)
    self.app.secret_key = 'mi_clave_secreta'

  # Rutas
  def routes(self):
    # Ruta principal
    @self.app.route('/')
    def index():
      data = { 'titulo': 'Cinemax Aserrí' }
      data['generos'] = [
        { 'nombre': 'Terror', 'id': 'terror' },
        { 'nombre': 'Comedia', 'id': 'comedia' },
        { 'nombre': 'Drama', 'id': 'drama' },
        { 'nombre': 'Acción', 'id': 'accion' },
        { 'nombre': 'Documental', 'id': 'documental' }
      ]
      return render_template('index.html', data=data)
    
    # Ruta de login
    @self.app.route('/login', methods=['GET', 'POST'])
    def login():
      data = { 'titulo': 'Log in' }
      if request.method == 'POST':
        user = request.form['usuario']
        password = request.form['password']
        db = DB()
        data['usuario'] = db.get_data_from_database({ 'nombre': user, 'password': password })
        if data['usuario']:
          session['username'] = user
          return redirect(url_for('index'))
        else:
          data['error'] = 'Usuario o contraseña incorrectos'
      return render_template('login.html', data=data)

    # Ruta de registro
    @self.app.route('/registro', methods=['GET', 'POST'])
    def registro():
      data = { 'titulo': 'Registro' }
      if request.method == 'POST':
        usuario = {
          'nombre': request.form['usuario'],
          'password': request.form['password']
        }
        print(usuario)
        db = DB()
        db.set_usuarios_to_tableUser(usuario)
        session['username'] = usuario['nombre']
        return redirect(url_for('index'))
      return render_template('registro.html', data=data)

    # Ruta de Salas
    @self.app.route('/salas')
    def salas():
      data = { 
        'titulo': 'Salas',
        'salas': [
          # con id,nombre,campos,precio
          { 'id': 1, 'nombre': 'Terramall', 'campos': '10', 'precio': '2000' },
          { 'id': 2, 'nombre': 'Multiplaza Escazú', 'campos': '20', 'precio': '2400' },
          { 'id': 3, 'nombre': 'Multiplaza Zapote', 'campos': '30', 'precio': '2800' },
          { 'id': 4, 'nombre': 'Expresso', 'campos': '40', 'precio': '3200' },
          { 'id': 5, 'nombre': 'Oxígeno', 'campos': '50', 'precio': '3600' },
          { 'id': 6, 'nombre': 'City Mall', 'campos': '60', 'precio': '4000' }
        ]
      }
      return render_template('salas.html', data=data)

    # Ruta de Dulceria
    @self.app.route('/dulceria')
    def dulceria():
      data = {'titulo': 'Dulceria',}
      # con imagenes de dulces
      data['dulceria'] = [
        { 'id': 1, 'nombre': 'Dulce 1', 'precio': '3000', 'descripcion': 'Descripción Dulce 1',
          'imagen': 'https://images.unsplash.com/photo-1631996622109-5a0290703f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' 
        },
        { 'id': 2, 'nombre': 'Dulce 2', 'precio': '2000', 'descripcion': 'Descripción Dulce 2',
          'imagen': 'https://images.unsplash.com/photo-1623603873797-afffbc61592d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        },
        { 'id': 3, 'nombre': 'Dulce 3', 'precio': '1000', 'descripcion': 'Descripción Dulce 3',
          'imagen': 'https://images.unsplash.com/photo-1642646682918-442f76c1ec74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        },
        { 'id': 4, 'nombre': 'Dulce 4', 'precio': '2030', 'descripcion': 'Descripción Dulce 4',
          'imagen': 'https://images.unsplash.com/photo-1639158924965-7be3bb57506b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=862&q=80'
        },
        { 'id': 5, 'nombre': 'Dulce 5', 'precio': '2600', 'descripcion': 'Descripción Dulce 5',
          'imagen': 'https://images.unsplash.com/photo-1512135479691-71087f6c117b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80'
        },
        { 'id': 6, 'nombre': 'Dulce 6', 'precio': '2100', 'descripcion': 'Descripción Dulce 6',
          'imagen': 'https://images.unsplash.com/photo-1649793950107-610f06f3660c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
        },
        { 'id': 7, 'nombre': 'Dulce 7', 'precio': '1000', 'descripcion': 'Descripción Dulce 7',
          'imagen': 'https://images.unsplash.com/photo-1586724832670-3b5ddb084c73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        },
        { 'id': 8, 'nombre': 'Dulce 8', 'precio': '2300', 'descripcion': 'Descripción Dulce 8',
          'imagen': 'https://images.unsplash.com/photo-1636628040211-7d15f57c230e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80'
        },
        { 'id': 9, 'nombre': 'Dulce 9', 'precio': '1500', 'descripcion': 'Descripción Dulce 9',
          'imagen': 'https://images.unsplash.com/photo-1633415983912-ab21f9772b3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=858&q=80'
        },
      ]
      return render_template('dulceria.html', data=data)
  
    # Cerrar secion
    @self.app.route('/logout')
    def logout():
      session.pop('username', None)
      return redirect(url_for('index'))

  # Correr la app
  def run(self):
    self.app.run(debug=True)

# Iniciar la app
app = App()

if __name__ == '__main__':
  app.routes()
  app.run()