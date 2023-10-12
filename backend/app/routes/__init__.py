from flask import Blueprint

bp = Blueprint('main', __name__)

from .xray_detection import upload_image