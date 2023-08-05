<template>
    <div class="topCenter">
        <div class="digital-card">
            <div class="item-content bg-color-black colorBlue " v-for="item in titleItem" :key="item.text">
                <p class="ml-3">{{item.text}}</p>
                <div>
                    <dv-digital-flop class="dv-dig-flop ml-1 mt-1 pl-3" :config="item.config" />
                </div>
            </div>
        </div>
        <div class="digital-echart">
            <div class="d-e-left ml-3">
                <div class="chart-title">
                     <i class="iconfont icon-tongji2"></i>
                    <span class="ml-2">年度负责人组件达标榜</span>
                </div>
				<dv-scroll-ranking-board :config="rankConfig" class="dv-scroll-board" />
            </div>
            <div class="d-e-right ml-3">
                <div class="der-top d-flex">
					<div class="pie-content">
						<div class="pie-title">通过率</div>
						<chart/>
					</div>
					<div class="pie-content">
						<div class="pie-title">完成率</div>
						<chart/>
					</div>
                </div>
                <div class="der-bottom mt-3">
					<dv-water-level-pond :config="waterConfig" class="dv-water-level-pond" />
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="center">
    <div class="up">
      <div
        class="bg-color-black item"
        v-for="item in titleItem"
        :key="item.title"
      >
        <p class="ml-3 colorBlue fw-b">{{ item.title }}</p>
        <div>
          <dv-digital-flop class="dv-dig-flop ml-1 mt-1 pl-3" :config="item.config" />
        </div>
      </div>
    </div>
    <div class="down">
      <div class="ranking bg-color-black">
        <span>
          <i class="iconfont icon-tongji2"></i>
        </span>
        <span class="fs-xl text mx-2 mb-1">年度负责人组件达标榜</span>
        <dv-scroll-ranking-board class="dv-scr-rank-board" :config="ranking" />
      </div>
      <div class="percent">
        <div class="item bg-color-black">
          <span>今日任务通过率</span>
          <chart
            :tips="rate[0].tips"
            :colorObj="rate[0].colorData"
          />
        </div>
        <div class="item bg-color-black">
          <span>今日任务达标率</span>
          <chart
            :tips="rate[1].tips"
            :colorObj="rate[1].colorData"
          />
        </div>
        <div class="water">
          <dv-water-level-pond class="dv-wa-le-po" :config="water" />
        </div>
      </div>
    </div>
  </div> -->
</template>

<script setup>
import { defineComponent, reactive, onMounted } from 'vue'
import Chart from './chart/index.tsx'

// 下层数据
const titleDate = [
    {
        number: 1020,
        text: '今年累计任务建次数'
    },
    {
        number: 18,
        text: '本月累计任务次数'
    },
    {
        number: 4,
        text: '今日累计任务次数'
    },
    {
        number: 71,
        text: '今年失败任务次数'
    },
    {
        number: 949,
        text: '今年失败成功次数'
    },
    {
        number: 811,
        text: '今年达标任务个数'
    },
]
const titleItem = reactive([])


// 初始化数据
onMounted(() => {
    setData()
})

const setData = () => {
    titleDate.forEach(item => {
        titleItem.push({
            config: {
                number: [item.number],
                content: '{nt}',
                style: {
                    fontSize: 26
                },
                toFixed: 1,
                textAlign: "left"
            },
            text: item.text
        })
    })
}
const rankConfig = reactive({
    data: [
        {
            name: '周口',
            value: 55
        },
        {
            name: '南阳',
            value: 120
        },
        {
            name: '西峡',
            value: 78
        },
        {
            name: '驻马店',
            value: 66
        },
        {
            name: '新乡',
            value: 80
        },
        {
            name: '新乡2',
            value: 80
        },
        {
            name: '新乡3',
            value: 80
        },
        {
            name: '新乡4',
            value: 80
        },
        {
            name: '新乡5',
            value: 80
        },
        {
            name: '新乡6',
            value: 80
        }
    ],
    carousel: 'single',//轮播方式单个
    unit: '人'
})

const waterConfig = reactive({
    data: [24, 45],//水位位置
    shape: 'roundRect',
    formatter: '{value}%',
    waveNum: 3//波浪数量
})

const rate = reactive([
    {
        id: 'centerRate1',
        tips: 60,
        colorData: {
            textStyle: '#3fc0fb',
            series: {
                color: ['#00bcd44a', 'transparent'],
                dataColor: {
                    normal: '#03a9f4',
                    shadowColor: '#97e2f5'
                }
            }
        }
    },
    {
        id: 'centerRate2',
        tips: 40,
        colorData: {
            textStyle: '#67e0e3',
            series: {
                color: ['#faf3a378', 'transparent'],
                dataColor: {
                    normal: '#ff9800',
                    shadowColor: '#fcebad'
                }
            }
        }
    }
])

       

</script>

<style lang="scss" scoped>
.topCenter {
    display: flex;
    flex-direction: column;
    .digital-card {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-around;
        .item-content {
            border-radius: 6px;
            padding-top: 8px;

            margin-top: 8px;
            width: 32%;
            height: 70px;
            .dv-dig-flop {
                width: 150px;
                height: 30px;
            }
        }
    }
    .digital-echart {
        display: flex;
        height: 255px;
        justify-content: space-between;
        padding: 5px 4px;
        .d-e-left {
            width: 59%;

            .chart-title {
            }
            .dv-scroll-board {
            }
        }
        .d-e-right {
            flex: 1;
            .der-top {
				.pie-content{
					.pie-title{
						text-align: center;
					}

				}
            }
            .der-bottom {
				.dv-water-level-pond{
					width: 100%;
				}
            }
        }
    }
}
.center {
    display: flex;
    flex-direction: column;
    .up {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .item {
            border-radius: 6px;
            padding-top: 8px;
            margin-top: 8px;
            width: 32%;
            height: 70px;
            .dv-dig-flop {
                width: 150px;
                height: 30px;
            }
        }
    }
    .down {
        padding: 6px 4px;
        padding-bottom: 0;
        width: 100%;
        display: flex;
        height: 255px;
        justify-content: space-between;
        .bg-color-black {
            border-radius: 5px;
        }
        .ranking {
            padding: 10px;
            width: 59%;
            .dv-scr-rank-board {
                height: 220px;
            }
        }
        .percent {
            width: 40%;
            display: flex;
            flex-wrap: wrap;
            .item {
                width: 50%;
                height: 120px;
                span {
                    margin-top: 8px;
                    font-size: 14px;
                    display: flex;
                    justify-content: center;
                }
            }
            .water {
                width: 100%;
                .dv-wa-le-po {
                    height: 120px;
                }
            }
        }
    }
}
</style>
