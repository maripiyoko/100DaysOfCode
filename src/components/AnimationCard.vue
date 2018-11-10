<template lang="pug">
  .card
    h1
      button(@click="show = !show")
        | AnimationCard
    .view
      transition(name="rocket")
        .rocket(v-if="show")
          img(src="../assets/rocket.svg")
          img(src="../assets/dash.svg")
          img(src="../assets/dash.svg")
      transition(name="fuwafuwa")
        img(v-if="show" src="../assets/fuwafuwa.svg" class="fuwafuwa")
</template>

<script>
export default {
  name: 'AnimationCard',
  data: function() {
    return {
      show: false
    }
  }
}
</script>

<style lang="sass" scoped>
.card
  background-color: #9A89A0 !important
  button
    font-size: 20px
    padding: 0.3em 1em
    text-decoration: none
    color: dimgray
    border: solid 2px #F3EFD9
    border-radius: 3px
    transition: .4s
    &:focus
      outline: 0
    &:hover
      cursor: pointer
      background-color: #9A89A0
      color: #F3EFD9
      
.view
  position: relative
  height: 190px
  img
    display: block
    margin: auto
  .fuwafuwa
    position: absolute
    bottom: -14px
    left: 30px

.rocket-enter-active
  transition: all .9s ease
.rocket-enter
  transform: translateY(100px)
  opacity: 
.fuwafuwa-enter-active
  transition: all 1.5s ease-in
.fuwafuwa-enter
  opacity: 0
</style>
