<template>
  <div>
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'

  export default {
    components: {
      Navbar
    },
    head: {
      title: 'Nuxt App'
    }
  }
</script>


