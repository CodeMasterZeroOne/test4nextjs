"use server"

import { PrismaClient } from "@prisma/client";
import { revalidateTag } from "next/cache";
import { redirect } from 'next/navigation'

const prisma = new PrismaClient({ log: ['query'] });

export async function getTodos() {
    const res = await prisma.todos.findMany()
    // console.log('returned res:', res)
    return res
}
export async function createTodo(data) {
    const title = data.get("title")?.valueOf()

    if (typeof title !== "string" || title.length === 0) {
        throw new Error("Invalid Title.")
    }
    console.log('title is', title)
    const newTodo = await prisma.todos.create({
        data: {
            title: title,
            completed: false
        }
    })
    // console.log('added new todo:', newTodo)
    // revalidateTag('todos')
    redirect("/todos")
}
export async function toggleTodo(id, completed) {
    // "use server"
    // console.log(id, completed)
    await prisma.todos.update({ where: { id }, data: { completed } })
}
export async function removeTodo(id) {
    // "use server"
    console.log('remove', id)
    await prisma.todos.delete({ where: { id } })
    revalidateTag('todos')
    // redirect('/')
}