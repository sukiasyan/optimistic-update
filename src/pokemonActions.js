
export const GET_RAICHU = 'GET_RAICHU';
export const GET_RAICHU_BEGIN = 'GET_RAICHU_BEGIN'; // new action
export const GET_RAICHU_COMPLETE = 'GET_RAICHU_COMPLETE'; // new action
export const GET_RAICHU_FAILED = 'GET_RAICHU_FAILED';



export const getRaichu = () => {
	return dispatch => {
		dispatch({
			type: GET_RAICHU // let middleware take it from here, we're going to create a file that receives this action
		});
	};
};