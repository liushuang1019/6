import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    swiperlist:[],
    homelist:[]
  },
  mutations: {
    savedata(state,data){
      state.swiperlist=data.swiperlist;
      state.homelist=data.homelist;
    }
  },
  actions: {
    getall({commit}){
      axios.get('/getdata').then(res=>{
        commit('savedata',res.data)
      })
      //  axios.get('/getdata',(req,res)=>{
      //     commit('savedata',res.data)
      //  })
    }
  },
  modules: {
  }
})
