#!/bin/bash
set -e

# Check if it's a command to run directly 
if [ "$1" = 'php' ]; then
    shift
    exec "$@"
fi

cd /var/www/html  # Important! Change to the project directory

# Check if .env exists and copy example if not
if [ ! -f .env ]; then
    cp .env.example .env
fi

# Check if the command is 'php artisan serve'
if [ "$1" = 'artisan' ] && [ "$2" = 'serve' ]; then
    # Run migrations before starting the development server
    php artisan migrate --force

    # Start the development server
    exec php artisan serve --host=0.0.0.0 --port=8000
fi

exec docker-php-entrypoint php-fpm