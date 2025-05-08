<template>
  <div class="homepage">
    <div class=" primary-title ">
      我的首页
    </div>
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content">
          首页
        </div>
      </el-col>
      <el-col :span="24">
          这是首页的第二行
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    
  </div>
</template>
  
<script setup>
  import { request } from '@/api/index';
  import { onMounted, reactive } from 'vue';
  import { ElRow, ElCol, ElTable, ElTableColumn } from 'element-plus';

    onMounted(()=>{
      // request('http://localhost:8080/demoResponseBody',{},'GET').then((res)=>{
      //   console.log(res);
      // })
    })
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .homepage{
    background: #fcfcfc80;
  }
  </style>
  