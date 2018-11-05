<template lang="pug">
  li
    label
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
