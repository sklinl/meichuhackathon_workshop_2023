"""Logging utils.

Example usage:

    from common import logging
    logger = logging.getLogger("happy")
    logger.debug("debug message")
    logger.exception(Exception)
"""

import logging
import logging.handlers
import os

# For compatability of logging module
CRITICAL = 50
FATAL = CRITICAL
ERROR = 40
WARNING = 30
WARN = WARNING
INFO = 20
DEBUG = 10
NOTSET = 0

Logger = logging.Logger


# Settings
BASE_PATH: str = "logs"
DEFAULT_LEVEL: int = DEBUG

formatter = logging.Formatter("%(asctime)s | %(levelname)s | %(name)s | %(message)s")


def create_handlers() -> list[logging.Handler]:
    stream_handler = logging.StreamHandler()
    stream_handler.setFormatter(formatter)

    if os.path.isfile(BASE_PATH):
        raise ValueError("Base path of the logger has been occupied.")
    if not os.path.exists(BASE_PATH):
        os.makedirs(BASE_PATH)

    file_handler = logging.handlers.TimedRotatingFileHandler(
        os.path.join(BASE_PATH, "log.log"),
        when="midnight",
        interval=1,
        backupCount=14,  # 2 weeks
        encoding="utf-8",
    )
    file_handler.setFormatter(formatter)

    handlers = [stream_handler, file_handler]
    return handlers


_handlers = create_handlers()


def setup_handler(logger: logging.Logger) -> None:
    for handler in _handlers:
        logger.addHandler(handler)


def getLogger(name: str) -> logging.Logger:  # pylint: disable=invalid-name
    logger = logging.getLogger(name=name)
    setup_handler(logger=logger)
    logger.setLevel(DEFAULT_LEVEL)
    return logger


def setup_logger(name: str) -> None:
    getLogger(name)