import { createStore } from 'vuex'
import feines from '../modules/feines'
import usuaris from '@/modules/usuaris';

export default createStore({
  state: {
    msg: 'Usant Vuex de nou',
    nom: 'Nuri',
    cognom: 'Serradell',
    amics: [],
    amic: null,
    numero: 10,
    diesAny: [],
    registrations: [],
    users: [
      {id: 1, name: 'Nuri', registered: false},
      {id: 2, name: 'Anna', registered: false},
      {id: 3, name: 'John', registered: false},
      {id: 4, name: 'Xavi', registered: false},
    ]
    
  },
  getters: {
    missatge(state) {
      return state.msg;
    },
    nomComplet(state) {
      return `${state.nom} ${state.cognom}`
    },
    unregisteredUsers(state) {
      return state.users.filter(user => {
        return !user.registered;
      })
    },
    registrations(state) {
      return state.registrations;
    },
    totalRegistrations(state) {
      return state.registrations.length;
    }
  },
  mutations: {
    addAmic(state) {
      state.amics = [state.amic, ...state.amics]
    },
    aumentar(state) {
      state.numero ++;
    },
    disminuir(state) {
      state.numero --;
    },
    disminuirMultiplicador(state, n) {
      state.numero -= n;
    },
    omplirDiesAny(state, saberAction) {
      state.diesAny = saberAction;
    }
  },
  actions: {
    addAmicAction(context) {
      context.commit('addAmic');
    },
    aumentar(context) {
      context.commit('aumentar');
    },
    saberDiesAny: async function ({commit}) {
     const data = await fetch('https://jsonplaceholder.typicode.com/users');
    // const data = await fetch('http://http://localhost:8080/db.json', {'content-type': 'application/json',
    // mode: 'no-cors'})
      const diesAny = await data.json();
    // console.log(diesAny);
      commit('omplirDiesAny', diesAny)
    }
  },
  modules: {
    feines,
    usuaris
  }
  
})
