# custom_metrics.py
from prometheus_client import Counter

# Define a custom Counter metric
abnormal_counter = Counter('abnormal_counter', 'count of abnormal image')