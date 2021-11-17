<template>
  <div class="home">
    <Socials/>
    <TextComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import Socials from '@/components/Socials.vue'
import TextComponent from '@/components/TextComponent.vue'

export default {
  name: 'Home',
  components: {
    Socials,
    TextComponent,
  }
}
</script>
