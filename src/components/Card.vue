<template lang="pug">
  .card.clickable(:style="style" @click="clickCard")
    h1 {{msg}}
    .row
      slot
    .row
      label
        | Card Color
      input(v-model="style.backgroundColor" placeholder="set card color")
    .row
      span
        | click count={{count}}
</template>

<script>
export default {
  name: 'Card',
  props: {
    msg: String
  },
  data: function() {
    return {
      count: 0,
      style: {
        backgroundColor: '#FFFBFA',
        boxShadow: '2px 2px 3px #f0ddd7'
      }
    }
  },
  methods: {
    clickCard: function() {
      this.count++
    }
  }
}
</script>

<style scoped lang="sass">
div
  border: none
  border-radius: 10px
  margin: 10px 0

.clickable
  cursor: pointer

input
  font-size: 22px
  border: 1px solid dimgray
  padding: 5px 10px
  width: 8ex
  margin-left: 10px
  &:focus
    outline: 0
    border-color: #1ab188
</style>