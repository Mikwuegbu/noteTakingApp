const titlePost = document.getElementById('title');
const textArea = document.getElementById('post');
const submitBtn = document.getElementById('create-btn');
const formData = [];
const editbtn = document.getElementById('cancel-btn');

//creating the id
const uniqueId = () => {
	//checking for existing id
	const initialId = localStorage.getItem('initialId');
	//if found increment else create new one
	const currentId = initialId ? parseInt('initialId') + 1 : 1;

	//update the initialId
	localStorage.setItem('initialId', currentId);
	return currentId;
};

//new Object
const newPost = {
	id: uniqueId(),
	title: titlePost.value,
	note: textArea.value,
};

//submit button fun
const submitFn = () => {
	// validating inputs
	if (!titlePost.value && !textArea.value) {
		document.getElementById('formData').append('Input Fields cannot be empty');
	} else if (!titlePost) {
		document.getElementById('formData').append('Title cannot be empty');
	} else if (!textArea) {
		document.getElementById('formData').append('Text cannot be empty');
	}

	formData.concat(newPost);
	localStorage.setItem('formData', JSON.stringify(formData));
};

//EventListeners

submitBtn.addEventListener('click', submitFn);
