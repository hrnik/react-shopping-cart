/**
 * Load state from localStorage
 * @return {state || undefined}
 */
export const loadState = () => {
	try{
		const state = localStorage.getItem('state');
		if(state === null){
			return undefined;
		}
		return JSON.parse(state);
	} catch (err){
		return undefined;
	}
};

/**
 * Save state to localStorage
 * @param state
 */
export const saveState = (state) =>{
	try {
		const savingState = JSON.stringify(state);
		localStorage.setItem('state', savingState);
	} catch (err) {
		console.log('Error parse json');
	}
};