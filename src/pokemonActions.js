export const GET_PIKACHU = 'GET_PIKACHU';
export const GET_RAICHU = 'GET_RAICHU';
export const GET_RAICHU_BEGIN = 'GET_RAICHU_BEGIN'; // new action
export const GET_RAICHU_COMPLETE = 'GET_RAICHU_COMPLETE'; // new action
export const GET_RAICHU_FAILED = 'GET_RAICHU_FAILED';

export const getPikachu = () => {
	return dispatch => {
		return fetch('https://pokeapi.co/api/v2/pokemon/pikachu/')
			.then(res => res.json())
			.then(pikachu => {
				console.log('getPikachu(), dispatch GET_PIKACHU');
				dispatch({
					type: GET_PIKACHU,
					payload: { pokemon: pikachu }
				});
			})
			.catch(console.error);
	};
};

export const getRaichu = () => {
	return dispatch => {
		console.log('getRaichu(), dispatch GET_RAICHU');
		dispatch({
			type: GET_RAICHU // let middleware take it from here, we're going to create a file that receives this action
		});
	};
};