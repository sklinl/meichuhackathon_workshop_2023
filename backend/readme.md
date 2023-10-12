
## Virtual env
python -m venv hackthon
/hackthon/Scripts/activate.bat

## install dependency
pip install -r requirements.txt

## start flask
(windows) waitress-serve --host 127.0.0.1 --port 5009 --call app:create_app