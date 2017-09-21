
export function setResourceAction(value){
	return {
		type: 'SET_RESOURCE_TYPE',
		payload: value
	}
}

export function setLocationAction(value){
	return {
		type: 'SET_LOCATION',
		payload: value
	}
}

export function setDeleteFilesAction(){
	return {
		type: 'SET_DELETE_FILES'
	}
}

export function setClearCacheAction(){
	return {
		type: 'SET_CLEAR_CACHE'
	}
}

export function setRunTypeAction(){
	return {
		type: 'SET_RUN_TYPE'
	}
}

export function setEmailAction(value){
	return {
		type: 'SET_EMAIL',
		payload: value
	}
}

export function displayResultsAction(num){
	return {
		type: 'DISPLAY_RESULTS',
		payload: num
	}
}

export function addImagesToStore(images){
	return {
		type: 'ADD_IMAGES',
		payload: images
	}
}

export function resetEverything(){
	return {
		type: 'RESET_EVERYTHING'
	}
}
