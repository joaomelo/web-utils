# Web-utils

It is a open source library for fullstack development of web apps with javascript. It promotes the fast creation and long term manutenability of interactive data centric web apps.


- Data layer to read and write data to a sql relational database.
- Api to serve data to the frontend or other apps.
- Ui components to build web interfaces.
- File-based routing system to simplify how to build web pages.
- Theme engine to customize the gui design.
- Authentication system to sign up and sign in users to the app.
- Authorization system to establish how users can read and write parts of the data.
- Admin studio to manage the application database.

# Values

 There are many ways to do something right. Web-utils has chosen its path with a set of values that guide its evolution is the years to come.

 - The framework is aimed at data centric interactive web apps like CRMs, RH resources and so on. It don't want to solve every use case.
 - Things just work. The user can create production ready web apps with minomal steps as possible. 

# Use

## Pages

Aggregate widgets to show them to the user.

Widgets show queries and convert user actions into system events. They are made of components.

Components are dummy UI blocks that show data and pass user actions to their parent widgets for processing.

We use the prime face library to enable fast creation of pages. But you can create components of your own.

Crude pages are automatically created.

## Queries

A view configuration of the system data. 

Views can be simple lists of table data of more complex configurations based on multiple table or data source like a list of user from a table,  with their photo retrieved from a object store like s3 and shopping preferences provided by a third party API.

Queries are the source for UI widgets that show data to the user.

Queries are automatically created based on the schema.

## Commands

Commands are tasks that will update the underlying data in any way. Commands are triggered by page events or by other commands.

Basic commands are created based on the schema.

## Schema

The schema is the data structure used by your app. You define it with javascript.

Every Web-utils app has a minimal default schema with auth and a key value store.

When you define tables in your schema it auto enables commands and queries.

You can have data validation at the schema level.

If you will use things like s3, third-party apis you can operate over this resources with queries and commands without a problem. Just the auto resources would not be availabe.

You can also analyse the use of postgresdb foreign data extension to incorporate external data sources to the schema.

## Authentication

....

## Authorization

...

## Serve

Web-utils serve

## Local development

Can create a postgresdb emulation using pg-mem. This is not suited for produtcion

# Architecture

This is a Web App served by NodeJS.

The Web UI is served as a Vue SPA. The static assets that compose this SPA are built with Vite in production mode or proxied to Vite dev server while in development mode.

The commands and queries are provided as dynamic api routes configured with ExpressJS.