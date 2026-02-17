export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify({
      todos: state.todos,
      filters: state.filters,
      sorting: state.sorting,
      events: state.events,
      finances: state.finances,
    });
    localStorage.setItem('todos', serializedState);
  } catch (err) {
    console.error('Could not save state:', err);
  }
};
  
  export const loadState = () => {
    try {
      const savedState = localStorage.getItem("todos");
      return savedState ? JSON.parse(savedState) : undefined;
    } catch (error) {
      console.error("Error loading state from LocalStorage:", error);
      return undefined;
    }
  };