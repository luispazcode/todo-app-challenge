import { useForm } from "../hooks/useForm";

export const AddTodo = ({ onNewTodo }) => {
	const { description, onInputChange, onResetForm } = useForm({
		description: "",
	});

	const onFormSubmit = (e) => {
		e.preventDefault();

		if (description.length <= 2) return;
		onNewTodo({
			id: new Date().getTime() * 300,
			description,
			done: false,
		});
		onResetForm();
	};

	return (
		<form
			className='w-full px-4 md:px-32 flex flex-wrap md:flex-nowrap gap-4'
			onSubmit={onFormSubmit}
		>
			<input
				type='text'
				placeholder='add details'
				className='w-full border rounded-lg p-2'
				name='description'
				value={description}
				onChange={onInputChange}
			/>
			<button
				type='submit'
				className=' bg-blue-500 rounded-lg px-6 py-2 text-white'
			>
				Add
			</button>
		</form>
	);
};
