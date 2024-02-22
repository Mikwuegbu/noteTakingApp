const titlePost = document.getElementById('title');
const textArea = document.getElementById('post');
const submitBtn = document.getElementById('create-btn');
const cancel = document.getElementById('cancel-btn');
const formData = [];

//Functions
const submitFn = () => {
	// validating inputs
	if (!titlePost.value && !textArea.value) {
		document.getElementById('formData').append('Input Fields cannot be empty');
	} else if (!titlePost) {
		document.getElementById('formData').append('Title cannot be empty');
	} else if (!textArea) {
		document.getElementById('formData').append('Text cannot be empty');
	}

	formData.concat({
		id: 1,
		title: titlePost.value,
		note: textArea.value,
	});

	localStorage.setItem('formdata', formData);
};

//EventListeners

submitBtn.addEventListener('click', submitFn);
cancel.addEventListener('click', edit);
