<template>
  <section class="home-hero">
    <v-container fluid fill-height class="home-hero__content">
      <v-row>
        <v-col class="home-hero__content-text">
          <p>Walk beyond the horizon</p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style  lang="scss" scoped>
@import "../../styles/common/common.scss";

.home-hero__content {
  background: url("../../assets/home-hero.png");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 50vh;

  @include display_pc {
    height: 90vh;
  }
 
  &-text {
    color: rgb(255, 255, 255);
    text-shadow:  2px  2px 10px #777 ,
               -2px  2px 10px #777 ,
                2px -2px 10px #777 ,
               -2px -2px 10px #777;
    text-align: center;
    font-size: 28px;
    font-weight: bold;

    @include display_pc {
      font-size: 40px;
    }
  }
}
</style>