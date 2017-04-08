# 06-templating-pug

A home page that displays the bakery's name, a picture and a short bio.

An about page with a bio of yourself and the company's slogan.

An inventory page which would list the most popular pastries along with their prices.

A simple nav bar which does not display a link to the current page, but only the pages not being viewed.

e.g: If the URL is currently localhost:8080/about only Home and Inventory links should be shown.

Requirements

Set up a simple Express server with three routes; /, /about and /inventory. Each route should render the corresponding pug file.

Be sure to set Express' view engine to use Pug.

Using the include keyword, insert the nav.pug partial into each of the pug files.

In about.pug, create a variable to store the current date and time using the JavaScript Date() method. Using Pug's string interpolation, insert the date variable into a paragraph tag which should read: Today's date is Sun Feb 19 2017 14:36:06 GMT-0600 (CST).;

In server.js, create a variable that stores an array of at least 5 objects. Each object should contain a name and a price for a pastry. Using the res.render() method, send the array to the template. Using Pug's iteration methods, display each pastry as a single paragraph tag, e.g: Blueberry Muffin: 1.59 each

Using Pug's conditional syntax in nav.pug, write logic to determine which page is currently being displayed and only render the pages which are not being viewed.

Bonus

Create a layout.pug in the views directory. By using the extends and block keywords, we can create a single pug file that will act as a parent template and can be inherited, or extended in a child template. The layout.pug should contain the html, head, and body tags. It can also include the nav.pug since layout.pug can be extended in each of our files.
Restructure index.pug, about.pug and inventory.pug to inherit layout.pug.

HINT: Be sure to use the block content keywords in layout.pug where each child pug file will be shown.
