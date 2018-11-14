<template lang="pug">
  #app
    Header
      | 100DaysOfCodes
    .container
      Card
        h1(slot="header") 
          | property message is here
        .row(slot="footer")
          | Day001
      Card
        h2(slot="header")
          | style bind
        .row(slot="footer")
          | Day002
      TodoList(msg="components" footer="Day003,4,5")
      ContactList(:contacts="contacts")
        h1(slot="header")
          | scoped slot 
        .row(slot="footer")
          | Day009
        div(slot-scope="{contact}")
          div {{ contact.name }}
          div {{ contact.email }}
      AnimationCard
      TodoList(msg="transition" footer="Day011")
      Modal(buttonTitle="Show Modal One")
        h2(slot="header")
          | Modal Sample One
        div(slot="body")
          form
            .ently
              label Name
              input(type="text" value="" placeholder="Enter Name")
      .card
        h1 Mixin
        div
          TextShareButton
        div
          ImageShareButton
        div
          | Day013
      .card
        h1 Router
        .page
          .navigation
            router-link.routing(to="/page1") Go To Page1
            router-link.routing(to="/page2") Go To Page2
          .content
            router-view
</template>

<script>
import Header from './components/Header.vue'
import Card from './components/Card.vue'
import TodoList from './components/TodoList.vue'
import ContactList from './components/ContactList.vue'
import AnimationCard from './components/AnimationCard.vue'
import Modal from './components/Modal.vue'
import TextShareButton from './components/TextShareButton.vue'
import ImageShareButton from './components/ImageShareButton.vue'
import router from './router'

export default {
  name: 'app',
  router,
  components: {
    Header, 
    Card,
    TodoList,
    ContactList,
    AnimationCard,
    Modal,
    TextShareButton,
    ImageShareButton,
  },
  data: function() {
    return {
      contacts: [
        { id: 1, name: 'Jo', email: 'jo@example.com' },
        { id: 2, name: 'Taro', email: 'taro@example.com' },
        { id: 3, name: 'Hanney', email: 'hanney@example.com' }
      ]
    }
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
    flex-wrap: wrap
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

ul
  margin: 0
  padding: 0 10px
  list-style: none
  li
    text-align: left
    margin: 5px 0

.routing
  margin: auto
  text-decoration: none
  color: #2288cc

.page
  display: flex
  flex-direction: column
  .navigation
    display: flex
    flex-direction: row
    justify-item: center
    height: 40px
  .content
    flex-grow: 1
</style>
