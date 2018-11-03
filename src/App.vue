<template lang="pug">
  #app
    Header
      | 100DaysOfCodes
    .container
      Card(msg="property message is here")
        | Day001
      Card(msg="style bind")
        | Day002
      TodoList(msg="components" footer="Day003")
</template>

<script>
import Header from './components/Header.vue'
import Card from './components/Card.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'app',
  components: {
    Header, 
    Card,
    TodoList
  }
}
</script>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  display: flex
  flex-direction: column

  .container
    flex: 1
    min-height: 100vh
    display: flex
    flex-direction: row
    margin-top: 40px

  .card
    width: 300px
    height: 300px
    margin: 20px
    border: none
    border-radius: 10px
    box-shadow: 2px 2px 3px #f0ddd7
    background-color: #FFFBFA

p
  margin: 0
</style>
