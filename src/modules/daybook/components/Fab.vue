<template>
  <button 
    @click="$emit('on:click')" 
    class="btn btn-primary"
  >
    <i class="fa fa-2x"
       :class="fontIcon"
    ></i>
  </button>
</template>

<script>
export default {
    // eslint-disable-next-line
    name: 'Fab',
    props: {
      fontIcon: {
        type: String,
        default: 'fa-plus'
      }
    }
}
</script>

<style lang="scss" scoped>

button {
    border-radius: 100%;
    bottom: 20px;
    height: 80px;
    position: fixed;
    right: 20px;
    width: 80px;
}

</style>