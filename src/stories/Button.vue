<template lang="pug">
  button.button(:class="size")
    slot
</template>

<script>
export default {
  props: [ 'size' ]
}
</script>

<style lang="sass" scoped>
.button
  border: 1px solid dimgray
  border-radius: 15px
  cursor: pointer
</style>
