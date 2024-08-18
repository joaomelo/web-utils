# Calystone

It is a open source framework for fullstack development of web apps with javascript.

The long term vision of the framework is to provide:

 - Data layer to read and write data to a sql relational database.
 - Api to serve data to the frontend or other apps.
 - Ui components to build web interfaces.
 - File-based routing system to simplify how to build web pages.
 - Theme engine to customize the gui design.
 - Authentication system to sign up and sign in users to the app.
 - Authorization system to establish how users can read and write parts of the data.
 - Admin studio to manage the application database.

# Values

 There are many ways to do something right. Calystone has chosen its path with a set of values that guide its evolution is the years to come.

 - All features should remain open source.
 - Commitment to the open web standards in contrast to with technologies steered by single companies.
 - The framework is aimed at transactional interactive web apps.
 - The user can create production ready web apps with many steps as possible. 
 - Ease of creation and maintenance of web apps is more important than the ability of customization. The user can alway use more low-level frameworks to build the app the way they liked.
 
# The Lifecycle

1. pages render queries.
2. pages capture user actions and raise events.
2. actions handle events and apply side effects.
3. queries recompute and trigger page reactivity.

# References and Prior Work

- [A Data Loop](https://day8.github.io/re-frame/a-loop/)
- https://github.com/tc39/proposal-signals?tab=readme-ov-file