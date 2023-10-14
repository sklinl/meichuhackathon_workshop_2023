from . import bp
from flask import Response
from common import logging
from flask import request
from ..metricss import custom_metrics


_logger = logging.getLogger("config")


@bp.route('/upload', methods=['POST'])
def upload_image():
    # TODO
    return Response("test", 200)
