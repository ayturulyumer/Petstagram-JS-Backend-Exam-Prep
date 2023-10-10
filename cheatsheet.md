# cheat-sheet

1. Init project
2. Install nodemon in dev environment
3.Install and setup express JS

- Add static middleware 
- Add body parser
- Add routes

4. Add static resources (css/images) 
5. Add view folder with ready htmls
6. Add view engine (express-handlebars)
    * Install handlebars
    * Add to express
    * Config views folder (only for src)
    * Add main layout
    * Add partials folder
    * Fix header nav to home
    * Render home page
7. Add controllers folder with home controller
8. Add Database
    * Install mongoose
    * Connect db
9.Authentication views
    * Add user controller
    * Add the controller to routes
    * Fix header nav to login,register and logout
    * Render login page
    * Render register page
10. Add user model
    * Add unique for username 
    * Validate repass with virtual property
11. Modify login and register forms in html
12. Add register and login post actions in userController
13. Add user service/manager
    * Require userService in userController
    * Add register method in userService