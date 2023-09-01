import TodoItem from "@/components/TodoItem";
import { getTodos } from "@/actions/serverActions";
import Link from "next/link";

async function Todos() {
    const allTodos = await getTodos();

    return (
        <main>
            <header className='flex justify-between items-center mb-4 p-8'>
                <h1 className='text-2xl'>Todo&apos;s</h1>
                <Link href="/" className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'>Home</Link>
                <Link href="/todos/new" className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'>Add Todo</Link>

            </header>
            <ul className='pl-4'>
                {allTodos ? allTodos.map(todo => (
                    <TodoItem key={todo.id} {...todo} />
                ))
                    : null}
            </ul>
        </main>
    )
}

export default Todos