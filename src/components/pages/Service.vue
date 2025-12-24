<template>
  <section class="service">
    <AppBackgroundHolder :title="title"/>
    <h2>ここには実装可能なパーツを載せます。</h2>

    <carousel
      :autoplay="true"
      :loop="true"
      :per-page="1"
      :speed="1200">
        <slide>
          <img src='../../assets/carousel/09_carousel_01.jpg' alt="スライド1">
        </slide>
        <slide>
          <img src='../../assets/carousel/09_carousel_02.jpg' alt="スライド2">
        </slide>
        <slide>
          <img src='../../assets/carousel/09_carousel_03.jpg' alt="スライド3">
        </slide>
        <slide>
          <img src='../../assets/carousel/09_carousel_04.jpg' alt="スライド4">
        </slide>
        <slide>
          <img src='../../assets/carousel/09_carousel_05.jpg' alt="スライド5">
        </slide>
    </carousel>

    <div id="textform">
      <div id="inputtext">
        <h3>入力フォーム</h3>
        <input type="text" name="message" v-model="message" placeholder="ここに入力します">
        <p>入力メッセージ： {{message}} </p>
      </div>
    </div>

    <div id="checkform">
      <div id="checkbox">
        <h3>チェックボックス</h3>
        <input type="checkbox" id="checkbox" v-model="flag">
        <label for="checkbox">{{ flag }}</label>
      </div>
    </div>
    <div id="radioform">
      <div id="radiobottun">
        <h3>ラジオボタン</h3>
        <input type="radio" value="りんご" v-model="picked">
        <label for="りんご">りんご</label>
        <br>
        <input type="radio" value="ごりら" v-model="picked">
        <label for="ごりら">ごりら</label>
        <br>
        <input type="radio" value="らっぱ" v-model="picked">
        <label for="らっぱ">らっぱ</label>
        <br>
        <span>あなたが選択したのは「{{ picked }}」です。</span>
      </div>
    </div>
    <div id="selectform">
      <div id="selectbox">
        <h3>セレクトボックス</h3>
        <select v-model="selected">
          <option disabled value="">Please select one</option>
          <option>へび</option>
          <option>びーかー</option>
          <option>かめれおん</option>
        </select>
        <br>
        <span>あなたが選んだのは「{{ selected }}」です。</span>
      </div>
    </div>
    <div id="mulselform">
      <div id="multiselect">
        <h3>複数選択</h3>
        <select multiple v-model="multiselected">
          <option>救急車</option>
          <option>消防車</option>
          <option>霊柩車</option>
        </select>
        <br>
        <span>あなたが選んだのは「{{ multiselected }}」です。</span>
      </div>
    </div>
    <!-- <div id="">
      <div id=""></div>
    </div> -->
  </section>
</template>

<script>
import AppBackgroundHolder from '../parts/AppBackgroundHolder.vue'
import { Carousel, Slide } from 'vue-carousel';

export default {
  data () {
    return {
      title: 'Service',
      message: '',
      flag: false,
      picked: null,
      selected: null,
      multiselected: [],
    }
  },
  components: {
    AppBackgroundHolder,
    Carousel,
    Slide
  }
}
</script>

<style lang="scss" scoped>
.VueCarousel{
  height: 100%;
}
.VueCarousel-wrapper, .VueCarousel-inner, .VueCarousel-slide{
  height: 100% !important;
}
.VueCarousel-slide .slider-inner {
  height: 100%;
  background-color: #62caaa; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  color: #fff; 
  border: 2px solid #fff;
  font-size: 30px; 
  border-radius: 10px;
}
img {
  width: 80%;
  height: 80%;
}
h2 {
  padding: 1em;
  padding-left: 6em;
  text-align: left;
}
h3 {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}
#textform,#checkform,#radioform,#selectform,#mulselform {
  padding-bottom: 2em;
  padding-left: 2em;
  padding-right: 2em;
}
#inputtext,#checkbox,#radiobottun,#selectbox,#multiselect {
  background-color: rgba(199, 239, 243, 0.925);
  padding: 1em;
}
h3 {
  text-align: left;
  padding-left: 2em;
}
input,select {
  background-color: rgb(248, 248, 248);
}
.service {
  padding-bottom: 2em;
}
</style>