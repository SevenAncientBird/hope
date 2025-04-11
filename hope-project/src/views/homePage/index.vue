<template>
  <div class="hello">
    <div>
      我的首页
    </div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content">
          这是首页的第一行
        </div>

      </el-col>
      <el-col :span="24">
          这是首页的第二行
      </el-col>
    </el-row>
    
  </div>
</template>
  
<script setup>
  import { request } from '@/api/index';
  import { onMounted } from 'vue';

    onMounted(()=>{
      request('http://localhost:8080/demoResponseBody',{},'GET').then((res)=>{
        console.log(res);
      })
    })
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  