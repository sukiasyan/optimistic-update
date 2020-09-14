import optimist from 'redux-optimist';
import {
	GET_PIKACHU,
	GET_RAICHU_BEGIN, // new action
	GET_RAICHU_COMPLETE, // new action
	GET_RAICHU_FAILED
} from './pokemonActions';

const initialState = { pokemon: [], error: '' };

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PIKACHU: {
			console.log('GET_PIKACHU');
			return { ...state, pokemon: action.payload.pokemon };
		}
		case GET_RAICHU_BEGIN: { // optimistically update store immediately
			console.log('GET_RAICHU_BEGIN:', action.payload);
			return {
				...state,
				pokemon: action.payload.pokemon,
				error: action.payload.error
			};
		}
		case GET_RAICHU_COMPLETE: { // really update store if request succeeds
			console.log('GET_RAICHU_COMPLETE:', action.payload);
			return {
				...state,
				pokemon: action.payload.pokemon,
				error: action.payload.error
			};
		}
		case GET_RAICHU_FAILED: { // remove what was optimistically updated to the store if request fails and save the error to the store instead
			console.log('GET_RAICHU_FAILED:', action.payload);
			return { ...state, error: action.payload.error };
		}
		default:
			return state;
	}
};

export default optimist(reducer);