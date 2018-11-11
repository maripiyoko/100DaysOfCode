<template lang="pug">
  .card
    h1 {{msg}}
    .row
      slot
    input(v-model="newTodo" @change="addNewTodo" placeholder="Add New TODO")
    p.stat
      | {{ numTodoStat }}
    ul.todo-list
      transition-group(name="list" enter-active-class="animated slideInRight" leave-active-class="animated fadeOutLeft")
        Todo(v-for="(todo, index) in todos" :key="todo.id" :name="todo.name" v-model="todo.status" @delete="todos.splice(index, 1)" @name-changed="todos[index].name = $event")
    .bottom
      | {{footer}}
</template>

<script>
import Todo from './Todo.vue'

export default {
  name: 'TodoList',
  components: {
    Todo
  },
  props: {
    msg: String,
    footer: String
  },
  computed: {
    totalCompleted: function() {
      return this.todos.reduce(function(sum, todo) {
        return todo.status == true ? sum + 1 : sum
      }, 0)
    },
    numTodoStat: function() {
      return this.totalCompleted + " / " + this.todos.length
    }
  },
  data: function() {
    return {
      maxId: 0,
      newTodo: "",
      todos: []
    }
  },
  methods: {
    addNewTodo: function() {
      this.maxId++
      this.todos.push({ id: this.maxId, name: this.newTodo, status: false })
      this.newTodo = ""
    }
  }
}
</script>

<style lang="sass" scoped>
.card
  display: flex
  flex-direction: column

.todo-list
  display: flex
  flex-direction: column
  overflow: scroll

.stat
  text-align: right

input
  font-size: 22px
  border: none
  border-bottom: 1px solid #888
  padding: 5px 10px
  &:focus
    outline: 0
    border-bottom: 1px solid #1ab188
</style>
