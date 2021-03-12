<template>
  <div>
    <h2>プロフィール</h2>
    <div class="profile-wrapper">
      <img :src="require(`@/assets/images/me.jpg`)" alt="alt" width="300px" height="300px" />
      <h3>市川 一斗</h3>
      <p>愛知県長久手市出身</p>
      <p>
        新卒で某大手CVSに入社し、スーパーバイザー職を経験。大手ならではのキャッシュレスサービスの導入や、業務機器刷新に対する加盟店の前向きな感想を頂いたことがきっかけで、ITで人の生活を支えになるような仕事をしたいと考え、プログラミング学習を開始。<br>
        2021年2月にプログラミングスクール卒業し、現在独学中
      </p>

      <h2>エンジニアとしての目標</h2>
      <p>
        提案できるエンジニアを目指しています。<br>
        情報収集、課題抽出が得意で、異業種交流会など人と関わる事で様々な知識に触れて参りました。<br>
        この経験やこれまで培ってきた知識を活かしてクライアントが持つ課題に対し、他業界ではどのような○○のような問題解決方法があります。このような設計にするとさらにいいと思いますが、いかがでしょうか？と提案、そしてそれを実装することができるようなエンジニアになることが目標です。
      </p>

      <h2>趣味・特技</h2>
      <h4>バスケットボール</h4>
      <img :src="require(`@/assets/images/basket.jpg`)" alt="alt" width="200px" height="200px" />
      <p>
        学生時代に立ち上げたチームにて代表を勤めました。<br>
        東京の大会ではベスト4、愛知県の大会にて優勝を経験しました。<br>
        バスケットボールで培った、チームマネジメント能力、課題抽出のスキル、忍耐力は今でも役に立っています。
      </p>
      
      <h4>旅行</h4>
      <div class="flex">
        <img :src="require(`@/assets/images/trip1.jpg`)" alt="alt" width="200px" height="200px" />
        <img :src="require(`@/assets/images/trip2.jpg`)" alt="alt" width="200px" height="200px" />
      </div>
      
      コロナ禍で最近は行けていませんが、旅行が好きです。<br>
      新しい物を見つけては記念に撮影し、インスタグラムに投稿しています。<br>
      現在フォロワーが1000人を突破しました。

      <h4>珈琲作り</h4>
      <div class="flex">
        <img :src="require(`@/assets/images/coffee1.jpg`)" alt="alt" width="200px" height="200px" />
        <img :src="require(`@/assets/images/coffee2.jpg`)" alt="alt" width="200px" height="200px" />
      </div>
      <p>
        コロナ禍になってから始めた趣味です。<br>
        豆の種類、産地、焙煎方法、抽出方法などから様々な要素で味の変化が起こる奥深さに惹かれました。<br>
        コーヒーショップの従業員さんとのコミュニケーションも楽しみの一つです。
      </p>
      
      <h4>読書</h4>
      年間20冊程度読みます。<br>
      新しい物が好きで、ジャンル問わず学術書を好みます。<br>
      前職では、個人目標という形で半年で12冊読破を名言し、上長に読書感想文を提出しました。<br>
      直近で印象に残った本は、「24のキーワードでまるわかり！最速で身に付く世界史」

      <h2>保有資格</h2>
      <p>普通自動車免許</p>
      <p>実用英語技能検定準2級</p>
      <p>ファイナンシャルプランナー3級</p>
      <p>Mos Excel 2016スペシャリスト</p>
    </div>

  </div>
</template>

<script>

</script>

<style scoped>
.profile-wrapper {
  margin: 0px 20px;
  padding: 20px;
  border: 1px solid #666666;
}

h2 {
  margin-top: 50px;
}

img {
  border-radius: 10px;
  margin: 0 10px;
}
</style>
