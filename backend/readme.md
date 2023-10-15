# Backend

A Flask app in python

## Requirement
python 3.11
requirements.txt

## Virtual env

Create your virtual environment (using `venv` or `virtualenv`)

```bash
python -m venv hackathon
```

for Windows

```
.\hackathon\Scripts\activate.bat
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
(local) flask run
(windows) waitress-serve --host 127.0.0.1 --port 5009 --call app:create_app
```
