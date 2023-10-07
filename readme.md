# Full Stack Blog Web Application

# Description

It is a fullstack blog web application built with Django/Djanog Rest Framewok on the backend and React on the frontend.

![Blog Website](https://github.com/RitiKS-11/Blog/blob/master/frontend/src/assets/11.png)

# Setup Django Server

Follow the below steps to setup and run the djagno server

#### Install Dependencies

```
make install
```

#### Migrate Database

```
make migrate
```

#### Run the server

```
make runserver
```

# Setup React Frontend

Follow the below steps to setup and run the frontend

#### Install Dependencies

```
make install-react
```

#### Run the frontend

```
make dev
```

# API Documentation

### Users

-   `api/login/token` - POST
-   `api/login/token/refresh` - POST
-   `api/user/register` - POST
-   `api/change-password` - POST
-   `api/user/:username` - POST

## Blog

-   `api/blog/list` - GET
-   `api/blog/create` - POST
-   `api/blog/update/:id` - PUT, PATCH
-   `api/blog/delete/:id` - DELETE
-   `api/blog/search/` - POST
