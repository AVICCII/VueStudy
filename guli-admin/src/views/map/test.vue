<template>
  <baidu-map
    class="map"
    :center="{ lng: 117.290926, lat: 31.864414 }"
    :zoom="15"
  >
    <bm-marker
      v-for="(item, index) in points"
      :key="index"
      :position="item"
      :dragging="true"
      animation="BMAP_ANIMATION_BOUNCE"
      @click="showItem(index)"
    >

    </bm-marker>
          <bm-info-window
        :show="show"
        :position="position"
        @close="infoWindowClose"
        @open="infoWindowOpen"
        >山东菏泽枣庄牛逼</bm-info-window
      >
  </baidu-map>
</template>

<script>
export default {
  data() {
    return {
      position: { lng: '', lat: '' },
      show:false, 
      points: [{ lng: 117.276553, lat: 31.877907 },{ lng: 117.276553, lat: 31.877907 },{ lng: 117.285033, lat: 31.885266 },{ lng: 117.307743, lat: 31.854232 }],

    };
  },

created(){
},
  methods: {
      showItem(item){
          this.position=this.points[item]
          this.show=true
      },

      infoWindowClose () {
      this.show = false
    },
    infoWindowOpen () {
      this.show = true
    }
    },
  }

</script>

<style>
.map {
  width: 100%;
  height: 600px;
}
</style>