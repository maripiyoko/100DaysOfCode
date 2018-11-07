<template lang="pug">
  .color
    label
      | Card Color Day007
    input(:value="value" placeholder="#FFFFFF" @input="$emit('input', $event.target.value)")
</template>

<script>
export default {
  name: 'FormSample',
  props: {
    value: String,
  }
}
</script>

<style lang="sass" scoped>
input
  font-size: 22px
  border: 1px solid dimgray
  padding: 5px 10px
  width: 8ex
  margin-left: 10px
  &:focus
    outline: 0
    border-color: #1ab188
</style>
