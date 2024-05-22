# nuxt-todo

### demo

![demo](https://github-production-user-asset-6210df.s3.amazonaws.com/34363543/332646433-bc012cdb-97ce-4b85-bd6f-7d0c7d095a66.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240522%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240522T034614Z&X-Amz-Expires=300&X-Amz-Signature=90bb4f14004fe87ddde9c8d66ed4b9cae886aa7d6f2e842e23a06fe6c6db6562&X-Amz-SignedHeaders=host&actor_id=34363543&key_id=0&repo_id=801983913)

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


