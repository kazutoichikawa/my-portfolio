<template>
  
  <div>
    <h2>Languages</h2>
    <div class="languages-list">
      <LanguageBox 
      name='HTML&CSS'
      image_src='htmlcss.jpg'
      alt='htmlcss'
      period=4
      detail='フロントエンド言語の基礎として学習。
      Viewファイルの基礎に加え、レスポンシブWebデザインなどの概念を習得しました。'
      />
      <LanguageBox 
      name='JavaScript'
      image_src='javascript.png'
      alt='javascript'
      period=3
      detail='よりUIの高いWebアプリケーションを開発するために学習。
      非同期通信、非同期通信、Ajaxの概念を習得しました'
      />
      <LanguageBox 
      name='Vue.js'
      image_src='vue.jpeg'
      alt='vue.js'
      period=1
      detail='自作アプリを作成するにあたり、SPAのWebサイトを実装できるようになりたいという思いで学習。当ポートフォリオサイトはVue.jsを使用しておりSPA仕様となっております。'
      />
      <LanguageBox 
      name='Ruby'
      image_src='ruby.png'
      alt='ruby'
      period=4
      detail='サーバーサイド言語習得の第一歩として学習。MVCの概念、フォームオブジェクト、アクティブハッシュなど応用的な使い方も学習しました。'
      />
      </div>
    <h2>Other</h2>
      <div class="languages-list">
      <LanguageBox 
      name='RubyonRails'
      image_src='rubyonrails.png'
      alt='rubyonrails'
      period=4
      />
      <LanguageBox 
      name='MySQL'
      image_src='mysql.png'
      alt='mysql'
      period=4
      />
      <LanguageBox 
      name='GitHub'
      image_src='github.png'
      alt='github'
      period=4
      />
      <LanguageBox 
      name='AWS'
      image_src='aws.jpg'
      alt='rubyonrails'
      period=2
      detail='AWS EC2によるデプロイ、AWS S3のストレージ利用について学習しました'
      />
      <LanguageBox 
      name='Docker'
      image_src='docker.jpg'
      alt='docker'
      period=1
      />
      </div>

  </div>  
</template>

<script>
import LanguageBox from './LanguageBox';
export default {
  components: {
     LanguageBox 
     },

}
</script>

<style scoped>
  .languages-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

</style>
