import { ref } from 'vue';

export default {
    setup() {
        const newTodo = ref('')
        const defaultData = [
            {
                done: true,
                content: 'Write a blog post'
            },
            {
                done: false,
                content: 'Listen to a podcast'
            }
        ]
        const todos = ref(todosData)

        function addTodo() {
            if (newTodo.value) {
                todos.value.push({
                    done: false,
                    content: newTodo.value
                })
                newTodo.value = ''
            }
        }
        function doneTodo(todo) {
            todo.done = !todo.done
        }
        function removeTodo(index) {
            todos.value.splice(index, 1)
        }
        useHead({
            title: 'To-Do App',
            meta: [
                {
                    name: 'description',
                    content: 'Nuxt 3 To-Do App with Composition API'
                }
            ]
        })
        return {
            newTodo,
            defaultData,
            todos,
            addTodo,
            doneTodo,
            removeTodo,
            useHead
        }
    }
}

