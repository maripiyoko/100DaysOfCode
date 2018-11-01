<template lang="pug">
  div
    h1 {{msg}}
    p
      slot
  </div>
</template>

<script>
export default {
  name: 'Day001',
  props: {
    msg: String
  }
}
</script>

<style scoped>
div {
  border: 1px solid black;
}
</style>