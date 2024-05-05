# Namaste React 🚀

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds using .parcel-cache
- Image Optimization
- Minification
- Building
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostics
- Error Handling
- Ability to host on HTTPs
- Tree Shaking - remove unused code
- Different dev and production build

# Namaste Food App

Header

- Logo
- Nav Items

  Body

- Search Input
- Search
- Reastaurant Container
  - ReastaurantCard - image - name of res, star rating, cuisine, delivery time
  - Footer
- Copyright
- Links
- Address
- Contact

# Importing Types

Two types of Export/Import

- Default Export/Import
  export default Component
  import Component from "path"

- Named Export/Import
  export const Component;
  import {Componentt} from "path"

# React Hooks

(Normal JS Utility functions)

- useState()
- useEffect()

If state variable changes React re-renders the component

# 2 Types of Routing

- Client side routing
- Server side routing

# Higher Order Component

- Takes a Component and returns a Component

# Redux/Redux-Toolkit

![alt text](image.png)

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (CartSlice)
- dispatch (action)
- Selector

# Tpes of testing

- Unit Testing
- Integration Testing
- End to End Testing

# Setting up testing in our app

- Install React Testing Library
- Installed Jest
- Installed Babel dependencies
- Configure Babel
- Configure parcel config file to disable default Babel transpilation
- Jest Configuration
- Install jsdom library
- install @babel/preset-react to make jsx run in test cases
- include @babel/preset-react inside babel config
- Install @testing-library/jest-dom
