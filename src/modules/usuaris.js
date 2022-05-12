export default {
    namespaced: true,
    state: {
        registrations: [],
        users: [
          {id: 1, name: 'Nuri', registered: false},
          {id: 2, name: 'Anna', registered: false},
          {id: 3, name: 'John', registered: false},
          {id: 4, name: 'Xavi', registered: false},
        ]
    },
    mutations: {

    },
    actions: {

    },
    getters: {
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
    }
}