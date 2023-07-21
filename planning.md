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
