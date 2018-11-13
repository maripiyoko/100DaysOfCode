<template lang="pug">
  a(@click="share")
    img.button(src="../assets/chess_knight.svg" alt="share")
</template>

<script>
import Sharable from './mixins/Sharable.vue'

export default {
  name: 'ImageShareButton',
  mixins: [ Sharable ]
}
</script>

<style <style lang="sass" scoped>
.button
  width: 120px
  height: 120px
  border: 1px solid dimgray
  border-radius: 15px
  cursor: pointer
</style>
