<template lang="pug">
  .card.todo-list
    h1 {{msg}}
    .row
      slot
    input(v-model="newTodo" @change="addNewTodo" placeholder="Add New TODO")
    p
      | {{ "completed todos=" + totalCompleted }}
    ul
      Todo(v-for="todo in todos" :name="todo.name" @status-changed="statusChanged")
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
    }
  },
  data: function() {
    return {
      newTodo: "",
      todos: []
    }
  },
  methods: {
    addNewTodo: function() {
      this.todos.push({ key: this.todos.length+1, name: this.newTodo, status: false })
      this.newTodo = ""
    },
    statusChanged: function() {
      console.log('statusChanged')
    }
  }
}
</script>

<style lang="sass" scoped>
.todo-list
  display: flex
  flex-direction: column

input
  font-size: 22px
  border: none
  border-bottom: 1px solid #888
  padding: 5px 10px
  &:focus
    outline: 0
    border-bottom: 1px solid #1ab188

ul
  margin: 0
  padding: 0 10px
  list-style: none
  li
    text-align: left
    margin: 5px 0
</style>
