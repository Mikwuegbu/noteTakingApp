const mainPage = document.getElementById('main');

const newNote = (formData) => {
	html = `<div class="pb-1 hover:shadow-md hover:cursor-pointer">
				<div
					class="font-medium text-justify tracking-normal my-10 mx-10 xl:mx-72"
				>
					<h1 class="font-semibold text-2xl mb-2">
						${formData.title}
					</h1>
					${formData.note}
					<div class="mt-6 space-x-7 flex justify-end">
						<button
							class="bg-blue-600 text-white px-6 py-1.5 rounded-2xl hover:bg-blue-500"
						>
							Edit
						</button>
						<button
							class="bg-red-600 text-white px-4 py-1.5 rounded-2xl hover:bg-red-500"
						>
							Delete
						</button>
					</div>
				</div>
			</div>`;

	mainPage.insertAdjacentHTML('beforeend', newNote);
};

const createNewNote = () => {
	const newNote = localStorage.getItem('formData');
	JSON.parse(newNote).forEach((formData) => {
		newNote(formData);
	});
};
createNewNote();