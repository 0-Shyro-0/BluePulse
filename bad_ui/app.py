from flask import Flask, render_template, request, redirect, url_for
import subprocess

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/unauthorized')
def unauthorized():
    return redirect('https://youareanidiot.cc/')

if __name__ == '__main__':
    app.run(host='10.74.252.212', debug=True)
