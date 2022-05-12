<template>
  <div class="hello">
    <h1>{{ $store.getters.missatge }}</h1>
    <h5>{{$store.getters.nomComplet}}</h5>
    <h4>Amics:</h4>
    <input type="text" v-model="amic">
    <button @click="addAmic">Afegir amic</button>
    <ul>
      <li v-for="(amic, index) in $store.state.amics"
      :key="index">
      {{amic}}</li>
    </ul>

    <button @click="$store.commit('aumentar')">+</button><br>
    <button @click="aumentar">Augmentar per mapMutations</button><br>
    <button @click="disminuir">Disminuir per mapMutations</button><br>
    <button @click="disminuirMultiplicador(2)">Disminuir 2 amb paràmetres per mapMutations</button>
    <button @click="disminuirMultiplicador(3)">Disminuir 3 amb paràmetres per mapMutations</button>
    <h4>numero {{numero}}</h4> mapState
    <h6>numero {{$store.state.numero}}</h6>
    <br>
    <button @click="saberDiesAny">Obtenir usuaris</button><br>
    <ul  v-for="(item, id) of diesAny" :key="id">
      <li>{{item.name}}</li>
    </ul>

<br>
 <div id="registrations">
        <div class="summary">
            <h3>Registrations</h3>
            <h5>Total: {{ total }}</h5>
        </div>
        <hr>
        <div class="row" v-for="(registration, id) in registrations" :key="id">
            <h4>{{ registration.name }}</h4>
            <span @click="unregister(registration)">(Unregister)</span>
            <div class="date">{{ registration.date }}</div>
        </div>
    </div>


  </div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';
export default {
  name: 'HelloWorld',
  data() {
    return {
      amic: '',
    }
  },
  methods: {
    ...mapMutations(['aumentar', 'disminuir', 'disminuirMultiplicador']),
    ...mapActions(['saberDiesAny']),
   // ...mapGetters( 'usuaris', ['registrations', 'totalRegistrations']),
  //  ...mapGetters( 'usuaris', ['registrations']),

    addAmic() {
      this.$store.state.amic = this.amic;
      this.$store.dispatch('addAmicAction');
      this.amic = '';
    },
    unregister(registration) {
                const user = this.$store.state.users.find(user => {
                    return user.id == registration.userId;
                });
                user.registered = false;
                this.$store.state.registrations.splice(this.$store.state.registrations.indexOf(registration), 1);
            }
    
  },
  computed: {
    ...mapState(['numero', 'diesAny']),
    ...mapGetters({registrations: 'registrations', total: 'totalRegistrations'}),
   // ...mapState('usuaris', ['users', 'registrations']),
      }
   
}     
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input {
  margin-right: 8px;
}
button {
  margin: 6px;
}
</style>
