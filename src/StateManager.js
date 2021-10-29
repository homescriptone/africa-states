const states_lists = require('./states').states_lists;

/**
 * This class is responsible to manage states.
 */
export default class StateManager {

    /**
     * Get states of many countries.
     * @returns 
     */
    get_all_states(){
        return states_lists;
    }

    /**
     * Get state based on a country identifier.
     * @param {string} country_code 
     * @returns 
     */
    get_state( country_code ){
        return this.get_all_states()[country_code.toUpperCase()];
    }
}