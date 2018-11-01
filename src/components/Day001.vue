<template>
  <div>
    <h1>{{msg}}</h1>
    <p><slot/></p>
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