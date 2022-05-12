<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h6>numero pare {{$store.state.numero}}</h6>
    <HelloWorld />
    <hr>
    <h3>Registra't aqui</h3>
<hr>
<div class="row" v-for="(user, id) in users" :key="id">
  <h5> {{user.name}}</h5>
  <button @click="registerUser(user)">Register</button>
</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods: {
     registerUser(user) {
      const date = new Date;
      user.registered = true;
      this.$store.state.registrations.push(
        {userId: user.id, name: user.name, date: date.getMonth() + '/' + date.getDay()});
    }
  },
  computed: {
  users() {
        return this.$store.getters.unregisteredUsers;
      },
     // ...mapState('usuaris', ['users', 'registrations']),
}
}

</script>
