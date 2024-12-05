from flask import Flask, render_template, request
import subprocess
app = Flask(__name__)



@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='10.74.252.212', debug=True)
