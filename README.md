## Generating new components
```bash
# After setup of course :)
# cd my-new-project
yo react-webpack:component my/namespaced/components/name
```

The above command will create a new component, as well as its stylesheet and a basic testcase.

## Generating new stateless functional components
```
yo react-webpack:component my/namespaced/components/name --stateless
```

Stateless functional components where introduced in React v0.14. They have a much shorter syntax than regular ones and no state or lifecycle methods at all. Please read the [React 0.14 release notes](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html) to get more information about those components.

___Note___: You will still be able to set properties for stateless components!

## Usage
The following commands are available in your project:
```bash
# Start for development
npm start # or
npm run serve

# Start the dev-server with the dist version
npm run serve:dist

# Just build the dist version and copy static files
npm run dist

# Run unit tests
npm test

# Lint all files in src (also automatically done AFTER tests are run)
npm run lint

# Clean up the dist directory
npm run clean

# Just copy the static assets
npm run copy
```
