## Project Setup

- set up folder structure
- component tree
- subfolders for components with their files
- install react router dom
- install clsx for constructing className strings conditionally (used in some of the UI components)

## UI Kit

### Button

- CSS for Button with custom variables
- destructure className, children, outline, ...rest from props
- import clsx and conditionally set the className ("btn", "btn-outlined", "btn-default") with the generic syntax `clsx({"your-class-name": booleanValue}) `

### Input

- CSS for Input with custom variables
- destructure className, type (with default value of "text"), required, placeholder, ...rest from props
- import clsx and always include "input" in className

## Static and dynamic pages

- Set up the routes for Home, Products, About and Cart components
- Include buttons that go to each path in the Navbar component
- Highlight current active path by using NavLink component (from react-router-dom) and calling `isActive` to mark the current page as active (give it the 'active' class).
- Add custom text and images to static pages (Home and About) and dynamic pages(Products and Cart)

## Fetch and display products

- After setting up main routes to pages, fetch from this API on the Products page:
- Base URL: 'https://react-tutorial-demo.firebaseio.com/'
- Endpoint: 'supermarket.json'
- Render a <Product /> component for each product received.
- Pass down the correct image, name, description and price as props.
- Use the Button from UI Kit instead of plain button elements (use .btn-outline classNames).
- Use a <Loader /> while fetch request is loading

## Showing more product details

- When the client clicks on the product image, it should take them to the product details page located at `/products/X` where X is the id of that product.
- Create and render a <ProductDetails /> component that fetches the product details from the API.

### Implement nested routes:

Example with /products/1:

- clicking on Details should take the user to /products/1 and render <ProductDetailInfo /> (this is shown by default the first time you open the page)
- clicking on Nutrition should take the user to /products/1/nutrition and render <ProductDetailNutrition />
- clicking on Storage should take the user to /products/1/storage and render <ProductDetailStorage />

## Product Cart

- In the <App  />, define a state for cart, initially empty array
- Also define functions `handleProductAdd` and `handleProductDelete`
- initially just console.log a message in these functions
- pass down the cart prop to <Navbar />, <Product /> and <Cart />
- pass both functions down to <Product /> and pass the add function to <ProductDetailsInfo />

### Add/delete a product

- immutably add a new product by updating the handleProductAdd function
- add a quantity property to the product
- if it isn't in the cart already, set quantity to 1
- otherwise increase quantity by 1 every time the product is added
- immutably delete the product by updating the handleProductDelete

### Show product quantity

- in Products.js file, pass the quantity prop down to <Product /> when mapping over the products state
- if product exists in the cart (prop passed down from <App />), display the quantity, otherwise show 0
- update cart in <Navbar /> by passing down the sum of product quantities in the cart (use reduce method)
- when the quantity for a product is 0, do not render the quantity and the Product Delete button

## Implement cart page

- <Cart /> component takes in a cart prop
- show default message when there are no products in the cart
- when there are products, in the <Cart /> component show a table and map over the cart
- for each product, render a table row with the product image, name, price and quantity
- also show total price for each product (price \* quantity)
- show the total quantity of price (of all products) at the bottom of the table

### Restore cart from localStorage

- use lazy initial state to get cart from local storage (if it exists)
- otherwise initially set it to an empty array
- every time the cart state changes, save it in localStorage
