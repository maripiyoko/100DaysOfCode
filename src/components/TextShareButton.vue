<template lang="pug">
  button(@click="share") Text Share
</template>

<script>
import Sharable from './mixins/Sharable.vue'

export default {
  name: 'TextShareButton',
  mixins: [ Sharable ]
}
</script>
