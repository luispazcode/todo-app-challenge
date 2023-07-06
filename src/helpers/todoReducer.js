export const todoReducer = (initialState, action) => {
	switch (action.type) {
		case "add":
			return [...initialState, action.payload];

		case "complete":
			return initialState.map((todo) => {
				if (todo.id === parseInt(action.payload)) {
					return {
						...todo,
						done: !todo.done,
					};
				} else {
					return todo;
				}
			});

		case "delete":
			return initialState.filter((todo) => todo.id != action.payload);

		default:
			return initialState;
	}
};
