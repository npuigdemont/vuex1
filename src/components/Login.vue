<template>
  <div class="hello">
    <h1>Login page</h1>
    <input type="text" name="username" v-model="input.username" placeholder="Username">
    <br>
    <input type="password" name="password" v-model="input.password" placeholder="Enter your password">
    <br>
    <button type="button" @click="login()">Login</button>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      input: {
        username: '',
        password: ''
      }
    }
  },
  methods:  {
    login() {
      if(this.input.username == "admin" && this.input.password == "pass") {
        this.$store.commit("setAuthentication", true);
        this.$router.replace({name: 'secure'})
      } else {
        alert("The username or password is incorrect")
      }
    }
  }
  
}     
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  margin: 4px;
}
</style>
