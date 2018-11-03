<template lang="pug">
  li
    label
      input(type="checkbox" v-model="status" :change="$emit('status-changed')")
      | {{ name }}
</template>

<script>
export default {
  name: 'Todo',
  props: [ 'name' ],
  data: function() {
    return {
      status: false
    }
  }
}
</script>
