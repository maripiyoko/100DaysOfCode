<template>
  <div id="app">
    <Header>100DaysOfCodes</Header>
    <div class="container">
      <Day001 msg="property message is here">Hello Day001</Day001>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Day001 from './components/Day001.vue'

export default {
  name: 'app',
  components: {
    Header, 
    Day001
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
</style>
