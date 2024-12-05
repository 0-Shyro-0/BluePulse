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

@app.route('/bones.html')
def f1():
    return render_template('bones.html')

@app.route('/brain.html')
def f2():
    return render_template('brain.html')

@app.route('/heart.html')
def f3():
    return render_template('heart.html')

@app.route('/immune.html')
def f4():
    return render_template('immune.html')

@app.route('/lungs.html')
def f5():
    return render_template('lungs.html')

@app.route('/microbiote.html')
def f6():
    return render_template('microbiote.html')

@app.route('/skin.html')
def f7():
    return render_template('skin.html')

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
    app.run(host='10.74.252.216', debug=True)
