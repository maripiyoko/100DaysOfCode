<script>
export default {
  data: function() {
    return {
      _isProccessing: false
    }
  },
  methods: {
    share: function() {
      if (this._isProccessing) {
        return
      }
      if (!window.confirm('Would you like to share?')) {
        return
      }
      this._isProccessing = true
      setTimeout(() => {
        window.alert('Shared!')
        this._isProccessing = false
      }, 300)
    }
  }
}
</script>
