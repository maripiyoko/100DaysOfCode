<template lang="pug">
  li
    label
      input(type="checkbox" :checked="status" @input="$emit('input', $event.target.checked)")
      | {{ displayName }}
    button(@click="$emit('delete', id)")
      | x
</template>

<script>
export default {
  name: 'Todo',
  props: [ 'id', 'name', 'status' ],
  computed: {
    displayName: function() {
      return this.id + ' ' + this.name
    }
  }
}
</script>
