# Arrow Keys React

[![npm version](https://badge.fury.io/js/arrow-keys-react.svg)](http://badge.fury.io/js/arrow-keys-react)

[![NPM](https://nodei.co/npm/arrow-keys-react.png)](https://nodei.co/npm/arrow-keys-react/)

Easily integrate your react component with keyboard arrow keys, with the same configuration used in swipe-react and wheel-react packages.

# Usage
1. Install the npm package:
```bash
    npm install --save arrow-keys-react
```
2. Import it:
```javascript
    import ArrowKeysReact from 'arrow-keys-react';
```
3. Config arrow keys events ('left', 'right', 'up', 'down'), at least one of them, in your component constructor, or in render function:
```javascript
    ArrowKeysReact.config({
      left: () => {
        console.log('left key detected.');
      },
      right: () => {
        console.log('right key detected.');
      },
      up: () => {
        console.log('up key detected.');
      },
      down: () => {
        console.log('down key detected.');
      }
    });
```

4. Integrate with your React component:
```javascript
  <YourComponent {...ArrowKeysReact.events} />
```