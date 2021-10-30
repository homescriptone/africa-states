# africa-states
A list of municipalities in African countries.

[![npm version](https://img.shields.io/npm/v/@stripe/react-stripe-js.svg?style=flat-square)](https://www.npmjs.com/package/@stripe/react-stripe-js)

## Installation
First, install the package : 
```sh
  // using npm
  npm install https://github.com/homescriptone/africa-states
  
  or
  
  // using yarn
  yarn add https://github.com/homescriptone/africa-states
```

## Usage
```js
  import StateManager from '@homescriptone/africa-states'

  //Instantiate the StateManager
  const state_obj = new StateManager();
  
  //Get all states
  let all_states = state_obj.get_all_states();

  //Get state from a specific country
  let benin_states = state_obj.get_state('BJ');
  let togo_states  = state_obj.get_state('TG'); 
  ...

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Feel free to add states of your country by following the format already defined.

Please make sure to update tests as appropriate.

## License
[Apache](http://www.apache.org/licenses/)
