<template lang="pug">
  .card
    h1 Modal Component
    button(@click="show = true")
      | {{ buttonTitle }}
    transition(name="modal" enter-active-class="animated zoomIn" leave-active-class="animated fadeOut")
      .modal--overlay(v-if="show")
        .modal--content
          a.modal--close(@click="show = false")
          .modal--header
            slot(name="header")
          .modal--body
            slot(name="body")
</template>

<script>
export default {
  name: 'Modal',
  props: {
    buttonTitle: String,
  },
  data: function() {
    return {
      show: false
    }
  }
}
</script>

<style lang="sass" scoped>
.modal
  &--overlay
    z-index: 100
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: rgba(0,0,0,.8)
  &--content
    z-index: 200
    display: flex
    flex-direction: column
    position: relative
    background: white
    margin: 60px auto
    width: 70%
    height: 70%
    border: 1px solid #F3EFD9
    border-radius: 10px
  &--close
    position: absolute
    right: 10px
    top: 10px
    width: 28px
    height: 28px
    &:after
      content: 'x'
      color: dimgray
      cursor: pointer
      font-size: 24px
      font-weight: bolder
  &--header
    border-bottom: 1px solid #ddd
    color: dimgray
  &--body
    padding: 20px
    height: 100%
    overflow: scroll
</style>
