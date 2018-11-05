<template lang="pug">
  li
    label.name
      input(type="checkbox" :checked="status" @input="$emit('input', $event.target.checked)")
      | {{name}}
    a(class="delete" @click="$emit('delete')" title="delete it!")
      | x
</template>

<script>
export default {
  name: 'Todo',
  props: [ 'name', 'status' ]
}
</script>

<style lang="sass" scoped>
li
  display: flex
  flex-direction: row

.name
  flex-grow: 10

.delete
  color: #FF6667
  width: 10px

a
  cursor: pointer
</style>
