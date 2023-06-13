<template>
  <div></div>
</template>

<script>
export default {
  layout: "defaults",
  name: 'IndexPage',
  created(){
    this.$router.push({name: 'dashboard'})
  }
  
}
</script>
