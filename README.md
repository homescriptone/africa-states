# africa-states
A list of municipalities in African countries.

[![issues](https://img.shields.io/github/issues/homescriptone/africa-states)](https://github.com/homescriptone/africa-states)
[![forks](https://img.shields.io/github/forks/homescriptone/africa-states)](https://github.com/homescriptone/africa-states)
[![stars](https://img.shields.io/github/stars/homescriptone/africa-states)](https://github.com/homescriptone/africa-states)
[![license](https://img.shields.io/github/license/homescriptone/africa-states)](https://github.com/homescriptone/africa-states)
[![twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fhomescriptone%2Fafrica-states)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fhomescriptone%2Fafrica-states)


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
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Feel free to add states of your country by following the format already defined.

Please make sure to update tests as appropriate.

## License
[Apache](http://www.apache.org/licenses/)
