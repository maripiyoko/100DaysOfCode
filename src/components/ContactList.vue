<template lang="pug">
  .card
    slot(name="header")
    ul
      li(v-for="contact in contacts" :key="contact.id")
        slot(:contact="contact")
    slot(name="footer")
</template>

<script>
export default {
  name: 'ContactList',
  props: [ 'contacts' ]
}
</script>

<style lang="sass" scoped>
li
  margin: 10px
  border-bottom: 1px solid #aaa
</style>
