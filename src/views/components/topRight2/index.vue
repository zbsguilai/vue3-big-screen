<template>
    <div class="topRight1">
        <div class="bg-color-black ">
            <div class="card-title mt-3">
                <i class="iconfont icon-vector" />
                <span> 轮播表</span>
            </div>
            <div class="d-flex jc-center">

                <dv-scroll-board class=" dv-scroll-board" :config="carouselData" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineComponent, reactive } from 'vue'
// import Chart from './chart/index.tsx'


const carouselData = reactive({
    header: ['列1', '列2', '列3'],
    data: [
        ['行1列1', '行1列2', '行1列3'],
        ['行2列1', '行2列2', '行2列3'],
        ['行3列1', '行3列2', '行3列3'],
        ['行4列1', '行4列2', '行4列3'],
        ['行5列1', '行5列2', '行5列3'],
        ['行6列1', '行6列2', '行6列3'],
        ['行7列1', '行7列2', '行7列3'],
        ['行8列1', '行8列2', '行8列3'],
        ['行9列1', '行9列2', '行9列3'],
        ['行10列1', '行10列2', '行10列3']
    ],
    index: true,
    rowNum: 7, //表格行数
    headerHeight: 35,
    headerBGC: '#0f1325', //表头
    oddRowBGC: '#0f1325', //奇数行
    evenRowBGC: '#171c33', //偶数行
    columnWidth: [50],
    align: ['center']
})
</script>
<style lang="scss" scoped>
$box-height: 410px;
$box-width: 300px;
.topRight1 {
    padding: 16px;
    padding-top: 20px;
    height: $box-height;
    width: $box-width;
    border-radius: 5px;
    .bg-color-black {
        height: $box-height - 30px;
        border-radius: 10px;
    }
    .dv-scroll-board {
        width: 270px;
        height: 340px;
    }
}
.centerRight1 {
    padding: 5px;
    height: $box-height;
    width: $box-width;
    border-radius: 5px;
    .bg-color-black {
        padding: 5px;
        height: $box-height;
        width: $box-width;
        border-radius: 10px;
    }
    .text {
        color: #c3cbde;
    }
    .body-box {
        border-radius: 10px;
        overflow: hidden;
        .dv-cap-chart {
            width: 100%;
            height: 160px;
        }
    }
}
</style>
