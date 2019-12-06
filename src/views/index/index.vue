<template>
  <div class="index">
      <div class="main">
          <router-view></router-view>
      </div>
      <div class="footer">
          <router-link to='/index/home'>首页</router-link>
          <router-link to='/index/my'>我的</router-link>
      </div>
  </div>
</template>

<script>

</script>

<style scoped>
.index{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.main{
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
.footer{
    border-top:2px solid #eee;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>