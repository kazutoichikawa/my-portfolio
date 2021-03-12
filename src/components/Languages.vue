<template>
  
  <div>
    <h2>学習した知識</h2>
    <div class="languages-list">
      <LanguageCard 
      name='HTML&CSS'
      image_src='htmlcss.jpg'
      alt='htmlcss'
      period=4
      detail='フロントエンド言語の基礎として学習。
      Viewファイルの基礎に加え、レスポンシブWebデザインなどの概念を習得しました。'
      />
      <LanguageCard 
      name='JavaScript'
      image_src='javascript.png'
      alt='javascript'
      period=3
      detail='よりUIの高いWebアプリケーションを開発するために学習。
      非同期通信、json形式の概念などを習得しました'
      />
      <LanguageCard 
      name='Vue.js'
      image_src='vue.jpeg'
      alt='vue.js'
      period=1
      detail='自作アプリを作成するにあたり、SPAのWebサイトを実装できるようになりたいという思いで学習。当ポートフォリオサイトはVue.jsを使用しておりSPA仕様となっております。'
      />
      <LanguageCard 
      name='Ruby'
      image_src='ruby.png'
      alt='ruby'
      period=4
      detail='サーバーサイド言語習得の第一歩として学習。MVCの概念、フォームオブジェクト、アクティブハッシュなど応用的な使い方も学習しました。'
      />
      </div>
    <h2>Other</h2>
      <div class="languages-list">
      <LanguageCard 
      name='RubyonRails'
      image_src='rubyonrails.png'
      alt='rubyonrails'
      period=4
      />
      <LanguageCard 
      name='MySQL'
      image_src='mysql.png'
      alt='mysql'
      period=4
      />
      <LanguageCard 
      name='GitHub'
      image_src='github.png'
      alt='github'
      period=4
      />
      <LanguageCard 
      name='AWS'
      image_src='aws.jpg'
      alt='rubyonrails'
      period=2
      detail='AWS EC2によるデプロイ、AWS S3のストレージ利用について学習しました'
      />
      <LanguageCard 
      name='Docker'
      image_src='docker.jpg'
      alt='docker'
      period=1
      />
      </div>

  </div>  
</template>

<script>
import LanguageCard from './LanguageCard';
export default {
  components: {
     LanguageCard 
     }
}
</script>

<style scoped>
  .languages-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

</style>
