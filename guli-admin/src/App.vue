<template>

  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  ak: 'TyG1fMgAyRV8bjmDdNTyGU1Ut4gDUAjK'
})

export default {
  name: 'App'
}
</script>
