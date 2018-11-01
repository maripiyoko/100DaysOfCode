<template lang="pug">
  .card
    h1 {{msg}}
    p
      slot
</template>

<script>
export default {
  name: 'Day001',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="sass">
div
  border: none
  border-radius: 10px
  background-color: #FFFBFA
  box-shadow: 2px 2px 3px #f0ddd7
</style>