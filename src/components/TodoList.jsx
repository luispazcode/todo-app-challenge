import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, onCompleteTodo, onDeleteTodo }) => {
	return (
		<ul className='mt-6 px-4 md:px-32 text-lg'>
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					onCompleteTodo={onCompleteTodo}
					onDeleteTodo={onDeleteTodo}
				/>
			))}
		</ul>
	);
};
