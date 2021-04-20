from flask import Flask
import sys
app = Flask(__name__)


@app.route("/")
def hello():
    return u'\U0001f604'


if __name__ == "__main__":
    from waitress import serve
    # Runs server and listens on port 5000
    serve(app, host='0.0.0.0',port=5000)
