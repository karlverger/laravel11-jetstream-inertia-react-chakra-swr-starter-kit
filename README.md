# Laravel 11 Starter kit with Jetstream, Inertia, React, SWR and Charka Ui
> 💡 **This project is just a simple starter kit with the technology stack that our projects use most often.**

You can use this starter kit by typing this command : 
```shell
$ composer create-project karlverger/starterkit:dev-master winklecard new-project-name
```

After you have created your new project, you will need to setup your DB connection in your .env file

```dotenv
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```

And you gonna have  to type :
```shell
$ npm install
$ npm run dev
$ php artisan migrate:refresh --seed 
$ php artisan serve
```

# Packages and repositories

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).


## About Jetstream
[Jetstream GitHub](https://github.com/laravel/jetstream)
Jetstream provides the implementation for your application's login, registration, email verification, two-factor authentication, session management, API via Laravel Sanctum, and optional team management features. Jetstream is designed using Tailwind CSS and offers your choice of Livewire or Inertia scaffolding.

## About Intertia JS
[IntertiaJS GitHub](https://github.com/inertiajs)

Inertia is a new approach to building classic server-driven web apps. We call it the modern monolith.

Inertia allows you to create fully client-side rendered, single-page apps, without the complexity that comes with modern SPAs. It does this by leveraging existing server-side patterns that you already love.

Inertia has no client-side routing, nor does it require an API. Simply build controllers and page views like you've always done! Inertia works great with any backend framework, but it's fine-tuned for Laravel.


## About React
[React GitHub](https://github.com/facebook/react)

React can be used to develop single-page, mobile, or server-rendered applications. Because React is only concerned 
with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality. 
A key advantage of React is that it only rerenders those parts of the page that have changed, avoiding unnecessary rerendering of unchanged DOM elements.

## About SWR
[SWR GitHub](https://github.com/vercel/swr)

SWR is a React Hooks library for data fetching.

The name “SWR” is derived from stale-while-revalidate, a cache invalidation strategy popularized by HTTP RFC 5861. SWR first returns the data from cache (stale), then sends the request (revalidate), and finally comes with the up-to-date data again.

## About Chakra-ui
[Chakra-ui GitHub](https://github.com/chakra-ui/chakra-ui)

Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.

> This kit use the repository :  https://github.com/ozziexsh/laravel-jetstream-react

## License

The framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
