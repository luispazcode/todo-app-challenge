export const TodoItem = ({ todo }) => {
	return (
		<li className='flex gap-2 justify-between items-center mb-2'>
			<label className='cursor-pointer flex gap-2'>
				<input type='checkbox' id={todo.id} />
				{todo.description}
			</label>

			{todo.done && (
				<button className='bg-red-500 rounded-lg px-6 py-1 text-white'>
					Borrar
				</button>
			)}
		</li>
	);
};
