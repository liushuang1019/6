<template>
  <div class="home">
      <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide" v-for='(item,index) in swiperlist' :key='index'>
                  <img :src="item.img" alt="">
              </div>
          </div>
      </div>
      <div class="list">
          <dl class="item" v-for='(item,index) in homelist' :key='index'>
              <dd>
                  <img :src="item.img" alt="">
              </dd>
              <dt>
                  {{item.tit}}
              </dt>
          </dl>
      </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
  data(){
      return {
          
      }
  },
  methods:{
      ...mapActions(['getall'])
  },
  created(){
      this.getall()
  },
  computed:{
      ...mapState(['swiperlist','homelist'])
  },
  mounted(){
       this.$nextTick(()=>{
          new Swiper('.swiper-container',{
              loop:true
          })
      })
  }
}
</script>

<style scoped>
 .home{
        width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
 }
 .home .swiper-container{
     width: 100%;
     height: 200px;
 }
  .home .swiper-container img{
      width: 100%;
      height: 200px;
  }
  .home .list{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content:space-around;
      align-items: center;
  }
  .list .item{
      width: 25%;
    height: 100px;
    flex-direction: column;
    display: flex;
      justify-content:space-around;
      align-items: center;
  }
</style>