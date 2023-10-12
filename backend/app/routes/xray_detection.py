from . import bp
from flask import Response
from common import logging
from flask import request

_logger = logging.getLogger("config")


@bp.route('/upload', methods=['POST'])
def upload_image():
    if 'image' in request.files:
        image = request.files['image']
        _logger.info(image)

        # Process the uploaded image here, for example, save it to a folder
        # image.save('path/to/save/image.jpg')

        result = f'{image.filename} is abnormal. Please check it and notice to relevant personnel.'
        _logger.info(result)
        return Response(result, 200)
    return Response('No image provided', 400)