const InitialState = {
	title: 'profile',
	counter: 1
};
export default profileReducer = (state=InitialState, action) => {

	switch(action.type){
		case 'increase_counter': {
			const counter = state.counter+1;
			return {...state, counter};
		}
	}

	return {...state};
};