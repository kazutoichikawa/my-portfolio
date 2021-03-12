<template>
  <div>
    <h2>プログラミングスクール卒業後のアウトプットリスト</h2>
    <div class='work-list'>
      <WorkCard
        name='レストラン検索アプリ(デプロイ済み)'
        image_src='oriapp.png'
        alt='rest'
        githuburl='https://github.com/kazutoichikawa/rest'
        purpose='設計からデプロイまでを一連の流れをアウトプットするため'
        detail='JavaScript, Ruby, RubyonRails, Docker, MySQL2, AWSEC2, AWSS3, MariaDB'
      />
      <WorkCard
        name='メモアプリ(未デプロイ)'
        image_src='memo-app.png'
        alt='memo'
        githuburl='https://github.com/kazutoichikawa/memo-app'
        purpose='Vue.jsとRubyonRailsを併用し、API通信の技術を習得するため'
        detail='Vue.js, RubyonRails, MySQL2'
      />
      <WorkCard
        name='ECサイト風アプリ(未デプロイ)'
        image_src='uber-eats-like.png'
        alt='uber'
        githuburl='https://github.com/kazutoichikawa/uber-eats-like5'
        purpose='SPAの仕組みを理解するため'
        detail='React.js, RubyonRails, MySQL2'
      />
    </div>
  </div>
</template>

<script>
import WorkCard from './WorkCard'
export default {
  components: {
    WorkCard
    
  },
  data (){
    return{
    activeItem:""
    }
  },
  methods: {
    selectItem(item){
      this.selectedItem = item;
    }
  }
}
</script>

<style scoped>
  .work-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .img_wrap:hover{
  box-shadow: 10px 10px 10px rgba(0,0,0,0.5);
  transform: translateY(-10px);
  transition-duration: 0.5s;
}
</style>
