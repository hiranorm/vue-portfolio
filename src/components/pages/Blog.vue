<template>
  <section class="blog">
    <AppBackgroundHolder :title="title"/>
    <h2>ブログサイト構築のポートフォリオ</h2>
    <p>別でデプロイしたVuepressで作ったブログのポートフォリオサイトも載せておきました。</p>
    <a href="https://h-vuepress-portfolio.netlify.app/">Vuepressブログポートフォリオはこちら</a>
  </section>
</template>

<script>
import AppBackgroundHolder from '../parts/AppBackgroundHolder.vue'

export default {
  data () {
    return {
      title: 'Blog'
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