import time

from flask import Flask, render_template
app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0


@app.route("/")
def root():
    return render_template('main.html')


@app.route("/time")
def mr_wolf():
    return str(time.time())


if __name__ == "__main__":
    app.run(debug=True)
