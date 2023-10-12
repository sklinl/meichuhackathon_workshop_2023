"""App configuration."""

import dataclasses

import dacite
import yaml
import os
from dotenv import load_dotenv
load_dotenv()

from common import logging
_logger = logging.getLogger("config")

@dataclasses.dataclass(frozen=True)
class DbConfig:
    _logger.info(os.environ.get("SQLALCHEMY_DATABASE_URI"))
    SQLALCHEMY_DATABASE_URI: str = os.environ.get("SQLALCHEMY_DATABASE_URI")

@dataclasses.dataclass(frozen=True)
class MetabaseConfig:
    METABASE_SITE_URL: str = os.environ.get("METABASE_SITE_URL")
    METABASE_SECRET_KEY: str = os.environ.get("METABASE_SECRET_KEY")
    METABASE_DASHBOARD_NO: int = os.environ.get("METABASE_DASHBOARD_NO")

@dataclasses.dataclass(frozen=True)
class Config:
    db: DbConfig
    metabase: MetabaseConfig