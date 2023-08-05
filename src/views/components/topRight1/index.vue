<template>
    <!-- <div class="centerRight1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <i class="iconfont icon-align-left" />
        </span>
        <span class="fs-xl text mx-2">产品销售渠道分析</span>
      </div>
      <div class="d-flex  flex-column body-box">
        <dv-capsule-chart class="dv-cap-chart" :config="config" />
        <chart />
      </div>
    </div>
  </div> -->
    <div class="topRight1">
        <div class="bg-color-black ">
            <div class="top-capsule">
                <div class="d-flex ml-10">
                    <i class="iconfont icon-align-left" />
                    <span class="ml-3">图表</span>
                </div>
                <div class="d-flex flex-column  body-box  jc-center">
                    <dv-capsule-chart class="dv-capsule-chart" :config="config" />
                    <chart />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineComponent, reactive } from 'vue'
import Chart from './chart/index'


const config = reactive({
    data: [
        {
            name: '南阳',
            value: 167
        },
        {
            name: '周口',
            value: 67
        },
        {
            name: '漯河',
            value: 123
        },
        {
            name: '郑州',
            value: 55
        },
        {
            name: '西峡',
            value: 98
        }
    ]
})

</script>

<style lang="scss" scoped>
$box-height: 400px;
$box-width: 340px;
.ml-10 {
    margin-left: 10px;
} 
.topRight1 {
    padding: 4px;

    padding-top: 20px;
    height: $box-height;
    width: $box-width;
    border-radius: 5px;
    .dv-capsule-chart {
		width: 100%;
        height: 160px;
    }
      .bg-color-black {
        padding: 5px;
        height: $box-height;
        width: $box-width;
        border-radius: 10px;
    }
	  .body-box {
        border-radius: 10px;
        overflow: hidden;
		align-items: center;
        .dv-cap-chart {
            width: 100%;
            height: 160px;
        }
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
