import MyTodos from "./components/ui/main/MyTodos";
import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <main className="h-svh px-4 py-8 max-w-4xl mx-auto">
      <TodoProvider>
        <MyTodos />
      </TodoProvider>
    </main>
  );
}

export default App;
