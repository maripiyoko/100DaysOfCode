<template lang="pug">
  li
    label.name
      input(type="checkbox" :checked="status" @input="$emit('input', $event.target.checked)")
      input(type="text" :value="name" @change="$emit('name-changed', $event.target.value)")
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
  font-size: 24px

a
  cursor: pointer

input
  font-size: 22px
  border: none
  border-bottom: 1px solid #888
  padding: 5px 10px
  &:focus
    outline: 0
    border-bottom: 1px solid #1ab188
</style>
