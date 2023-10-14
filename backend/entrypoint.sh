#!/bin/sh

# echo "Waiting for db..."

# while ! nc -z db 3306; do
#   sleep 0.1
# done

# echo "DB started"

gunicorn -w 2 --bind 0.0.0.0:5000 run:app --timeout 120