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
  border: 1px solid black

</style>