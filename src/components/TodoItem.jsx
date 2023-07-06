export const TodoItem = ({ todo, onCompleteTodo, onDeleteTodo }) => {
	return (
		<li className='flex gap-2 justify-between items-center mb-2'>
			<label
				className={`cursor-pointer flex gap-2 ${
					todo.done ? "line-through" : ""
				}`}
			>
				<input
					type='checkbox'
					id={todo.id}
					checked={todo.done}
					onChange={({ target }) => {
						onCompleteTodo(target.id);
					}}
				/>
				{todo.description}
			</label>

			{onDeleteTodo && (
				<button
					className='bg-red-500 rounded-lg px-6 py-1 text-white'
					onClick={() => {
						onDeleteTodo(todo.id);
					}}
				>
					Borrar
				</button>
			)}
		</li>
	);
};
