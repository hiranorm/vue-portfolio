<template>
  <section class="contact">
    <AppBackgroundHolder :title="title"/>
    <h2 class="block-title">お問い合わせ(まだ実際には送れません)</h2>
      <div class="block-body">
        <form action="" class="form">
            <div class="form-group">
              <label for="name">お名前<span class="badge">10文字</span></label>
              <p class="errors">{{name | maxLengthValidator(10)}}</p>
              <input class="textinput" type="text" name="name" id="name" v-model="name">
            </div>
            <div class="form-group">
              <label for="subject">件名<span class="badge">20文字</span></label>
              <p class="errors">{{subject | maxLengthValidator(20)}}</p>
              <input class="textinput" type="text" name="subject" id="subject" v-model="subject">
            </div>
            <div class="form-group">
              <label for="contents">内容<span class="badge">30文字</span></label>
              <p class="errors">{{contents | maxLengthValidator(30)}}</p>
              <div class="form-row">
                <textarea type="text" name="contents" id="contents" v-model="contents"></textarea>
              </div>
            </div>
            <p>
              <input class="button" type="submit" value="送信する">
            </p>
        </form>
      </div>
  </section>
</template>
<script>
import AppBackgroundHolder from '../parts/AppBackgroundHolder.vue'
 
export default {
  data () {
    return {
      title: 'Contact',
      name: '',
      subject: '',
      contents: '',
    }
  },
  filters: {
    //最大桁数チェックフィルタ
    maxLengthValidator: function(val, max) {
      if(val && val.length > max) {
        return max + '文字以内で入力してください。'
      }
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
label {
  font-weight: bold;
}
form {
  width: 50%;
  margin: 0 auto;
}
.form-group {
  padding: 10px;
}
.form-row button {
  flex: auto;
  margin-left: 10px;
}
input.button {
  background-color: #ba26f5;
  color: #f6f7fa;
  padding: 0.5em;
  border-radius: 5px;
  font-size: 13px;
  font-weight: bold;
}
.badge {
  font-size: 10px;
  font-weight: bold;
  line-height: 1;
  display: inline-block;
  background: #f6f7fa;
  padding: 4px 8px;
  border-radius: 2px;
  margin-left: .5em;
  position: relative;
  top: -1px;
}
.errors {
  color: red;
  margin: 10px 0 0;
  font-size: 12px;
}
input.textinput {
  width: 20em;
  padding: 0.3em;
  border: solid 0.5px #9c9c9c;
}
textarea {
  width: 20em;
  height: 5em;
  padding: 0.3em;
  border: solid 0.5px #9c9c9c;
  text-align: center;
}
form {
  padding-bottom: 5em;
}
</style>