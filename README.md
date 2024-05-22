# nuxt-todo

## file structure
```
.docker/
backend/
 ├── app/
 ├── ...
 ├── config/
 ├── .../
 ├── routes/
 ├── .../
 └── tests/
       ├── Feature/
       |     └── SocialAuthTest.js
       ...
    .env
    Dockerfile

frontend/
 ├── components/
 ├── .../
 ├── middleware/
 |     └── auth.ts
 ├── pages/
 |     ├── auth/
 |     |     └── callback.vue
 |     ├── dashboard.vue
 |     └── index.vue
 ├── .../
 ├── shared/
 |     └── api.ts
 └── store/
       ├── actions
       |     └── authActions.js
       ├── reducers
       |     └── authSlice.js
       └── store.js
docker-compose.yml
```



![alt text](./frontend/assets/image.png)

## Installation

- #### copy the `ssh` link refer the image above
- #### create a workstation folder on your local
- #### perform git cli for `remote` -> `fetch` -> `pull` using copy link ssh


> **Note**
>
> make sure you have [Composer](https://getcomposer.org/download/) installed on local; [Git](https://git-scm.com/downloads); IDE (VSCode)
> then inside `backend` folder run `composer install`

## Once all codes are copied on local; lets configure first the `backend`

- #### copy env files from example
```
docker compose exec app cp .env.example .env
```
- #### run/build the docker 
```
docker compose --env-file ./backend/.env up -d
```
- #### after the build run this in-sequence
```
docker compose exec app php artisan key:generate
docker compose exec app chmod -R 777 storage bootrap/cache
docker compose exec app php artisan migrate
```
## lets configure the `frontend` 
- #### do npm install inside `frontend` folder
```
npm install
```

> **Note**
>
> Node Version 19.6.0 (npm v9.6.6)

- #### run the `frontend` via
```
npm run dev
```

## To use GitHub Login refer to this [docs](https://laravel.com/docs/11.x/socialite)



# Demo App

![demo](https://github-production-user-asset-6210df.s3.amazonaws.com/34363543/332646433-bc012cdb-97ce-4b85-bd6f-7d0c7d095a66.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240522%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240522T034614Z&X-Amz-Expires=300&X-Amz-Signature=90bb4f14004fe87ddde9c8d66ed4b9cae886aa7d6f2e842e23a06fe6c6db6562&X-Amz-SignedHeaders=host&actor_id=34363543&key_id=0&repo_id=801983913)
