# nuxt-todo

### demo
![clideo_editor_45916c5380b84270bb9ef25bd116f7a5](https://github.com/cortejojicoy/nuxt-todo/assets/34363543/bc012cdb-97ce-4b85-bd6f-7d0c7d095a66)

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


