import { Tabs } from "@rewind-ui/core";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { useReducer } from "react";
import { todoReducer } from "./helpers/todoReducer";

const initialState = [];

export const App = () => {
	const [todos, dispatch] = useReducer(todoReducer, initialState);

	const handleAddTodo = (newTodo) => {
		dispatch({
			type: "add",
			payload: newTodo,
		});
	};

	return (
		<main className='m-auto max-w-4xl h-screen px-4 font-lato'>
			<h1 className='text-5xl font-black text-center uppercase py-4'>#Todo</h1>

			<Tabs
				fullWidth={true}
				color='blue'
				defaultTab='tab-1'
				tone='line'
				size='lg'
				method='hide'
			>
				<Tabs.List>
					<Tabs.Tab anchor='tab-1'>All</Tabs.Tab>
					<Tabs.Tab anchor='tab-2'>Active</Tabs.Tab>
					<Tabs.Tab anchor='tab-3'>Completed</Tabs.Tab>
				</Tabs.List>
				<Tabs.Content anchor='tab-1'>
					<AddTodo onNewTodo={handleAddTodo} />
					<TodoList todos={todos} />
				</Tabs.Content>
				<Tabs.Content anchor='tab-2'>
					<AddTodo />
					<TodoList todos={todos} />
				</Tabs.Content>
				<Tabs.Content anchor='tab-3'>
					<TodoList todos={todos} />
				</Tabs.Content>
			</Tabs>
		</main>
	);
};

/* 
  TODO:
  - Marcar Todo como completado
  - Borrar Todo
  - Filtrar por completados
  - Filtrar por activos
  - Filtrar por All
*/
