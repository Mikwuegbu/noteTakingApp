const titlePost = document.getElementById('title');
const textArea = document.getElementById('post');
const submitBtn = document.getElementById('create-btn');
// const formData = [];
const cancelBtn = document.getElementById('cancel-btn');

//creating the id
// const uniqueId = () => {
// 	//checking for existing id
// 	const initialId = localStorage.getItem('initialId');
// 	//if found increment else create new one
// 	const currentId = initialId ? parseInt('initialId') + 1 : 1;

// 	//update the initialId
// 	localStorage.setItem('initialId', currentId);
// 	return currentId;
// };
// const createNote = () => {
// 	const note = localStorage.getItem('note');
// 	if (!note) {
// 		localStorage.setItem('note', JSON.stringify([]));
// 	}
// };

// const Notes = localStorage.getItem('note');
// const formdata = JSON.parse(note);
// const title = titlePost.value;
// const note = textArea.value;
// const id = formdata.length + 1;

// const formData = [...formdata];

//new Object
// const newPost = {
// 	id,
// 	title: titlePost.value,
// 	note: textArea.value,
// };

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
		validate.innerHTML = 'Created successfully!!';
		validate.style.color = 'green';
		clearInputs();
	}
};
//submit button function
const submitFn = (event) => {
	event.preventDefault();
	formValidate();

	//storing to the localStorage
	// formData.push(newPost);
	// localStorage.setItem('formData', JSON.stringify(formData));
};

//Cancel button function
const cancleFn = (event) => {
	event.preventDefault();
	location.href = './index.html';
};

submitBtn.addEventListener('click', submitFn);
cancelBtn.addEventListener('click', cancleFn);
