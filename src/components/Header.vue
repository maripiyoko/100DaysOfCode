<template lang="pug">
  header
    img(alt="Vue logo" src="../assets/logo.png")
    h1
      slot
</template>

<style scoped lang="sass">
header
  height: 60px
  overflow: hidden
  display: flex

  img
    height: 58px
    width: 58px

  h1
    flex: 1
    margin: 0
</style>
