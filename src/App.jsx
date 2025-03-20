import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

export default function App() {
  return (
    <main className="max-w-[600px] mx-auto bg-white rounded-lg p-[20px]">
      <h1>
        <span className="text-gradient">Todo</span> List
      </h1>
      <TodoForm />
      <TodoList />
    </main>
  );
}
