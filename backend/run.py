from flask import Flask
from app import create_app
from waitress import serve

app = create_app()

if __name__ == '__main__':

    app.run('127.0.0.1', port=5000, debug=True)
    # serve(app=app, host='127.0.0.1', port=5000)