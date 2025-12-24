<template>
  <section class="home-about">
    <div class="section__title">
      <div class="section__title-text">01. About Me</div>
    </div>

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

      <AppButton :button-text="buttonText" :url="url"/>

    </v-container>

  </section>
</template>

<script>
import AppButton from './AppButton.vue'

export default {
  data () {
    return {
      buttonText: '詳しくみる',
      url: '/about'
    }
  },
  components: {
    AppButton
  }
}
</script>

<style lang="scss" scoped>
.section__title {
  padding-top: 120px;
  text-align: center;
 
  &-text {
    font-weight: 700;
    font-size: 40px;
    color: #e65f78;
  }
}
/* ここから追加 */
.home-about__contents {
  margin-top: 20px;
  justify-content: center;

  &-img {
    text-align: center;
  }
 
  &-text {
    word-wrap: break-word;
  }
}
/* ここまで追加 */
</style>