<template>
  <section class="work">
    <AppBackgroundHolder :title="title"/>
    <h2>ここでは今後作成するアプリを紹介する予定です。</h2>
    <h3>チュートリアルで作ったTodoリストです。</h3>
    <AppButton :button-text="buttonText" :url="url"/>
  </section>
</template>

<script>
import AppBackgroundHolder from '../parts/AppBackgroundHolder.vue'
import AppButton from '../parts/AppButton.vue'

export default {
  data () {
    return {
      title: 'work',
      buttonText: 'チュートリアルTodoリスト',
      url: '/todo'
    }
  },
  components: {
    AppButton,
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
h3 {
  padding: 0.5em;
}
</style>