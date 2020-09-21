import { BEGIN, COMMIT, REVERT } from 'redux-optimist';
import {
	GET_RAICHU,
	GET_RAICHU_BEGIN,
	GET_RAICHU_COMPLETE,
	GET_RAICHU_FAILED
} from '../pokemonActions';

let nextTransactionID = 0;
export default function(store) {
	return next => action => {
		if (action.type !== GET_RAICHU) {
			return next(action);
		}
		let transactionID = nextTransactionID++;
		const raichu = {
			completed: true

			}
		console.log('GET_RAICHU_BEGIN')
		next({
			type: GET_RAICHU_BEGIN,
			payload: raichu,
			optimist: { type: BEGIN, id: transactionID }
		});

		setTimeout(() => {	
			fetch('https://jsonplaceholder.typicode.com/todos/1')
				.then(res => res.json())
				.then(raichu => {
					console.log('GET_RAICHU_COMPLETE');
					next({
						type: GET_RAICHU_COMPLETE,
						payload: raichu,
						optimist: { type: COMMIT, id: transactionID }
					});
				})
				.catch(error => {
					console.log('GET_RAICHU_FAILED');
					next({
						type: GET_RAICHU_FAILED,
						payload: { error: error.message },
						optimist: { type: REVERT, id: transactionID }
					});
				});
		}, 1000); // simulate a request that takes 1 second
	};
}