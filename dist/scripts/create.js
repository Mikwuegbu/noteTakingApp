const titlePost = document.getElementById('title');
const textArea = document.getElementById('post');
const submitBtn = document.getElementById('create-btn');
const cancelBtn = document.getElementById('cancel-btn');

function createFormData(title, note) {
	// Retrieve existing data from local storage
	let formData = JSON.parse(localStorage.getItem('formData')) || [];

	// Get the last used id or set it to 0
	let lastId = formData.length > 0 ? formData[formData.length - 1].id : 0;

	// Increment the last used id
	let newId = lastId + 1;

	// Create a new form data object
	let newFormData = {
		id: newId,
		title: title,
		note: note,
	};

	formData.push(newFormData);
	localStorage.setItem('formData', JSON.stringify(formData));
}

//Clear the inputs
const clearInputs = () => {
	titlePost.value = '';
	textArea.value = '';
};

//Validating form Inputs
const formValidate = () => {
	const validate = document.getElementById('validate');
	if (!titlePost.value && !textArea.value) {
		validate.innerHTML = '*Input fields cannot be empty!';
		validate.style.color = 'red';
	} else if (!titlePost.value || !textArea.value) {
		validate.innerHTML = '*One input field cannot be empty!';
		validate.style.color = 'red';
	} else {
		//Delay redirect
		setInterval(() => {
			location.href = './index.html';
		}, 1000);

		//confirm submission
		validate.innerHTML = 'Created successfully!!';
		validate.style.color = 'green';
		createFormData(titlePost.value, textArea.value);
		clearInputs();
	}
};
//submit button function
const submitFn = (event) => {
	event.preventDefault();
	formValidate();
};

//Cancel button function
const cancleFn = (event) => {
	event.preventDefault();
	location.href = './index.html';
};

submitBtn.addEventListener('click', submitFn);
cancelBtn.addEventListener('click', cancleFn);
