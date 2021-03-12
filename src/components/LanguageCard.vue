<template>
  <div class="language-box-wrapper">
    <h3>{{ name }}</h3>
      <img :src="require(`@/assets/images/${image_src}`)" alt="alt" width="300px" height="200px" />
    <div class="detail-wrapper">
      <p>学習期間： {{ period }}カ月間</p>
      <p>{{detail}}</p>
    
    </div>
    
    
  </div>  
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true,
      },
      image_src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        required: true,
      },
      period: {
        type: String,
        required: true,
      },
      detail: {
        type: String
      }
    }
  }


</script>

<style scoped>
.language-box-wrapper {
  width: 320px;
  height: 400px;
  border: 1px solid #666666;
  margin: 20px;
}

.detail-wrapper {
  text-align: left;
  margin: 20px;
  font-size: 12px;
}

</style>
