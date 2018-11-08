<template lang="pug">
  .card.clickable(:style="style" @click="clickCard")
    slot(name="header")
    FormSample(v-model="style.backgroundColor")
    .row
      | click count={{count}}
    slot(name="footer")
</template>

<script>
import FormSample from './FormSample.vue'

export default {
  name: 'Card',
  components: {
    FormSample
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
.clickable
  cursor: pointer
</style>