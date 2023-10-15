# Backend

A Flask app in python

## Virtual env

Create your virtual environment (using `venv` or `virtualenv`)

```bash
python -m venv hackathon
```

for Windows

```
/hackathon/Scripts/activate.bat
```

for Linux/MacOS

```
source hackathon/bin/activate
```

## Install dependency

```bash
pip install -r requirements.txt
```

## Modify your `.env` file

edit your `.env` according to your environment

## Start flask

```
(windows) waitress-serve --host 127.0.0.1 --port 5009 --call app:create_app
```
