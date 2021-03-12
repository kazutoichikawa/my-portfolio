<template>
  <div class='work-wrapper'>
    <h3>{{ name }}</h3>
      <img :src="require(`@/assets/images/${image_src}`)" alt="alt" width="430px" height="250px"/>
    <div class="detail-wrapper">
      <a v-bind:href="githuburl" target="_blank" rel="noopener noreferrer"></a>
      <p class='purpose-wrapper'>学習目的： {{ purpose }}</p>
      <p class='detail-wrapper'>アウトプットした知識：{{ detail }}</p>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    name:{
      type: String,
      require: true,
    },
    image_src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        required: true,
      },
      githuburl: {
        type: String,
      },
      purpose:{
        type:String,
        required: true,
      },
      detail: {
        type: String,
      }
  }
}
</script>

<style scoped>
.work-wrapper {
  width: 800px;
  height: 420px;
  border: 1px solid #666666;
  margin: 20px;
  position: relative;
}

.detail-wrapper {
  text-align: left;
  margin: 20px;
  font-size: 12px;
}

.purpose-wrapper{
  text-align: left;
  margin: 20px;
}

.work-wrapper a {
    position: absolute;
    top: 0;
    left: 0;
    height:100%;
    width: 100%;
}
</style>
