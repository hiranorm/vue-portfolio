<template>
  <section class="about">
    <AppBackgroundHolder :title="title"/>
    <h2>プロフィール</h2>
    <v-container>
      <v-row class="home-about__contents">
        <v-col md="5" class="home-about__contents-img">
          <img src="../../assets/profile.png" alt="" class="img-fluid">
        </v-col>
        <v-col md="5" class="home-about__contents-text">
          <p>name: hiran0rm</p>
          <p>都内在住の雪豹好きエンジニア見習いです。</p>
          <p>推理小説を読んだり書いたり。</p>
          <p>最近面白かったのは東野圭吾の「放課後」</p>
          <p>使えるもの: Python,機械学習,Javascript,Vue,html,css</p>
          <p>ここにはポートフォリオとなるものを載せていきます。</p>
        </v-col>
      </v-row>

    </v-container>
  </section>
</template>

<script>
import AppBackgroundHolder from '../parts/AppBackgroundHolder.vue'
 
export default {
  data () {
    return {
      title: 'About'
    }
  },
  components: {
    AppBackgroundHolder
  }
}
</script>

<style lang="scss" scoped>
h2 {
  padding: 1em;
  padding-left: 6em;
  text-align: left;
}
</style>