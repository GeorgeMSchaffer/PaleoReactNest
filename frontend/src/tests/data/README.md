
# Paleo Playground

*DISCLAIMER:* This project is for study purposes only. PaleoDB.com already has amazing APIs and tools 
so if you are looking for useful data see [paleodb.org].

Currently development is focused on getting a baseline app done in React and Spring before moving on to complete the rest.

###
    Technologies used:
    - Frontends
        - React
        - Angular
        - Vue
        - Blazor
        - React via TypeScript
    - Backends
        - NEXT.js / NEST.js via TypeScript
        - JAVA Spring Boot via Kotlin 
        - JAVA Spring Boot via Java
        - ASP.NET Core Web API Project

## TODOS
* Add relationships between species, diversity to interval etc and defined them.
* Add filters, sorting paginations

## JSON Server Params

### Conditions
`→ ==`

`lt → <`

`lte → <=`

`gt → >`

`gte → >=`

`ne → !=`

`GET /posts?views_gt=9000`

`Range`

`start`

`end`

`limit`

`GET /posts?_start=10&_end=20`

`GET /posts?_start=10&_limit=10`

`Paginate`

`page`

`per_page (default = 10)`

`GET /posts?_page=1&_per_page=25`

`Sort`

`_sort=f1,f2`

`GET /posts?_sort=id,-views`

`Nested and array fields`

`x.y.z...`

`x.y.z[i]...`

`GET /foo?a.b=bar`

`GET /foo?x.y_lt=100`

`GET /foo?arr[0]=bar`

### Embed
`GET /posts?_embed=comments`

`GET /comments?_embed=post`
### Delete`
`DELETE /posts/1

DELETE /posts/1?_dependent=comments`
### Serving static files
`If you create a ./public directory, JSON Server will serve its content in addition to the REST API.
``
`You can also add custom directories using -s/--static option.

json-server -s ./static
json-server -s ./static -s ./node_modules`
