<template>
  <header>
    <img alt="Vue logo" src="../assets/logo.png"/>
    <h1><slot/></h1>
  </header>
</template>

<style scoped>
header {
  height: 60px;
  overflow: hidden;
  display: flex;
}
header img {
  height: 58px;
  width: 58px;
}
header h1 {
  flex: 1;
  margin: 0;
}
</style>
