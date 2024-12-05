from flask import Flask, render_template, request, redirect, url_for
import subprocess

app = Flask(__name__)

# Liste des IP autorisées
AUTHORIZED_IPS = [
    "10.74.252.195",
    "10.74.252.210",
    "10.74.252.216",
    "10.74.252.199",
    "10.74.252.203",
    "10.74.252.212",
]

@app.route('/')
def index():
    # Obtenir l'adresse IP du client
    client_ip = request.remote_addr
    if client_ip not in AUTHORIZED_IPS:
        # Rediriger vers une route d'erreur si l'IP n'est pas autorisée
        return redirect(url_for('unauthorized'))
    return render_template('index.html')

@app.route('/unauthorized')
def unauthorized():
    return redirect('https://youareanidiot.cc/')

if __name__ == '__main__':
    app.run(host='10.74.252.212', debug=True)
