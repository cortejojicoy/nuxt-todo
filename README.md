# nuxt-todo

### run/build the docker 
```
docker compose --env-file ./backend/.env up -d
```

### migrate data
```
docker compose exec app php artisan migrate
```

### copy env files
```
docker compose exec app cp .env.example .env
```

### key:generate
```
docker compose exec app php artisan key:generate
```

### storage bootstrap/cache
```
docker compose exec app chmod -R 777 storage bootrap/cache
```


