import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos }) => {
	return (
		<ul className='mt-6 px-4 md:px-32 text-lg'>
			{todos.map((todo) => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</ul>
	);
};
