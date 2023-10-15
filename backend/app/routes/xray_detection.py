from . import bp
from flask import Response
from common import logging
from flask import request
from ..metricss import custom_metrics


_logger = logging.getLogger("config")


@bp.route('/upload', methods=['POST', 'GET'])
def upload_image():

    if 'image' in request.files:
        image = request.files['image']

    _logger.info(image.filename)

    if 'abnormal' in image.filename:

        custom_metrics.abnormal_counter.inc()

        return Response("這張圖片怪怪der...abnormal... 老闆快來看看!!!", 200)


    return Response("normal..........", 200)
