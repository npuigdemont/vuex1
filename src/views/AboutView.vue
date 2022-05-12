<template>
  <div class="about">
    <h1>This is an about page</h1>

    <h2 v-for="(feina, index) in feinesState" :key="index"> {{feina}}</h2>
    <h4>{{contador}}</h4>
    <h6>{{numero}}</h6>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
 computed: {
   ...mapState('feines', ['feinesState', 'contador']),
   ...mapState(['numero']) 
 }
}
</script>