<template>
<section class="background-holder">
  <v-container fluid fill-height class="background-holder__content">
    <v-row>
      <v-col class="background-holder__content-text">
        <p>{{title}}</p>
      </v-col>
    </v-row>
  </v-container>
</section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style  lang="scss" scoped>
@import "../../styles/common/common.scss";

.background-holder__content {
  background: url("../../assets/home-hero.png");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 30vh;
 
  &-text {
    color: white;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    text-shadow:  2px  2px 10px #777 ,
               -2px  2px 10px #777 ,
                2px -2px 10px #777 ,
               -2px -2px 10px #777;
 
    @include display_pc {
      font-size: 40px;
    }
  }
}
</style>