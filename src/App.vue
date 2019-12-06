<template>
   <div class="app">
     <router-view></router-view>
   </div>
</template>

<script>
export default {

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;text-decoration: none;
}
body,html,.app{
  width: 100%;
  height: 100%;
}
.app{
  display: flex;
  flex-direction: column;
}
</style>