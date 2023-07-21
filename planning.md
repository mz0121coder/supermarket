## Project Setup

- set up folder structure
- component tree
- subfolders for components with their files
- install clsx for constructing className strings conditionally (used in some of the UI components)

## UI components

### Button

- CSS for Button with custom variables
- destructure className, children, outline, ...rest from props
- import clsx and conditionally set the className ('btn', 'btn-outlined','btn-default') with the generic syntax `clsx({"your-class-name": booleanValue}) `
