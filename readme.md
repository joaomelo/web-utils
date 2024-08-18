# Calystone

It is a open source library for fullstack development of web apps with javascript. It promotes the fast creation and long term manutenability of interactive data centric web apps.

The long term vision of the framework is to provide:

 - Data layer to read and write data to a sql relational database.
 - Api to serve data to the frontend or other apps.
 - Ui components to build web interfaces.
 - File-based routing system to simplify how to build web pages.
 - Theme engine to customize the gui design.
 - Authentication system to sign up and sign in users to the app.
 - Authorization system to establish how users can read and write parts of the data.
 - Admin studio to manage the application database.

# The Lifecycle

1. pages render queries.
2. pages capture user actions and raise events.
2. actions handle events and apply side effects.
3. queries recompute and trigger page reactivity.

# Pages

Aggregate widgets to show them to the user.

Widgets show queries and convert user actions into system events. They are made of components.

Components are dummy UI blocks that show data and pass user actions to their parent widgets for processing.

# Queries

A view configuration of the system data. 

Views can be simple lists of table data of more complex configurations based on multiple table or data source like a list of user from a table,  with their photo retrieved from a object store like s3 and shopping preferences provided by a third party API.

Queries are the source for UI widgets that show data to the user.

# Commands

Commands are tasks that will update the underlying data in any way. Commands are triggered by page events or by other commands.

# Data

Is the brigde layer that connects commands and queries to real storage services.

# Values

 There are many ways to do something right. Calystone has chosen its path with a set of values that guide its evolution is the years to come.

 - All features should remain open source.
 - Commitment to the open web standards in contrast to with technologies steered by single companies.
 - The framework is aimed at transactional interactive web apps.
 - The user can create production ready web apps with many steps as possible. 
 - Ease of creation and maintenance of web apps is more important than the ability of customization. The user can alway use more low-level frameworks to build the app the way they liked.
