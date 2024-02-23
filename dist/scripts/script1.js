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
const submitFn = (event) => {
	// validating inputs
	if (!titlePost.value && !textArea.value) {
		event.preventDefault();
		document.getElementById('validate').innerHTML =
			'*Input fields cannot be empty';
	} else if (!titlePost.value || !textArea.value) {
		event.preventDefault();
		document.getElementById('validate').innerHTML =
			'*One input field cannot be empty';
	}

	formData.push(newPost);
	localStorage.setItem('formData', JSON.stringify(formData));
};

//EventListeners

submitBtn.addEventListener('click', submitFn);
