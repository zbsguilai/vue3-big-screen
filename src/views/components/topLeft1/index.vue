<template>
    <div class="topLeft1">
        <div class="bg-color-black">
            <div class="d-flex">
                <i class="iconfont icon-tongji4" />
                <span>任务通过率</span>
            </div>
            <chart/>
            <div class="bottom-data">
                <div class="item-box mt3" v-for="(item,index) in viewdata" :key="item.text">
                    <div class="d-flex">
                        <i :class="[iconFont[index],'iconfont']"></i>
                        <dv-digital-flop class="dv-digital-flop" :config="item.config" />
                    </div>
                    <p class="mt-2">{{item.text}}<span>(件)</span> </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Chart from "@/views/components/topLeft1/chart/index";
import { onMounted, onUnmounted, reactive } from "vue";
// 下层数据
const dataArr = [
    {
        number: 150,
        text: "今日构建总量",
    },
    {
        number: 144,
        text: "总共完成数量",
    },
    {
        number: 361,
        text: "正在编译数量",
    },
    {
        number: 571,
        text: "未通过数量",
    },
];
let intervalInstance = null;
// 对应图标
const iconFont = reactive([
    "icon-diagnose",
    "icon-monitoring",
    "icon-cloudupload",
    "icon-clouddownload",
]);
const viewdata = reactive([]);
const setData = () => {
    dataArr.forEach((e) => {
        viewdata.push({
            config: {
                content: `{nt}`,
                number: [e.number],
                text: e.text,
                toFixed: 1,
                style: {
                    fontSize: 24,
                },
            },
            text: e.text,
        });
    });
};
const updateData = () => {
    intervalInstance = setInterval(() => {
        viewdata.forEach((item,index) => {
            item.config.number[0] += ++index;
            item.config = { ...item.config };
        });
    }, 1000);
};

onMounted(() => {
    setData();
    updateData();
});

// const numberData = reactive([])
// let intervalInstance = null
// onMounted(() => {
//   setData()
//   changeTiming()
// })

// const setData = () => {
//   dataArr.forEach(e => {
//     numberData.push({
//       config: {
//         number: [e.number],
//         toFixed: 1,
//         content: '{nt}',
//         style: {
//           fontSize: 24
//         }
//       },
//       text: e.text
//     })
//   })
// }

// const changeTiming = () => {
//   intervalInstance = setInterval(() => {
//     changeNumber()
//   }, 2000)
// }
// const changeNumber = () => {
//   numberData.forEach((item, index) => {
//     item.config.number[0] += ++index
//     item.config = { ...item.config }
//   })
// }
onUnmounted(() => {
    clearInterval(intervalInstance);
});
</script>

<style lang="scss" scoped>
$box-width: 300px;
$box-height: 410px;
.topLeft1 {
    padding: 16px;
    height: $box-height;
    width: $box-width;
    border-radius: 10px;
    .bg-color-black {
        height: $box-height - 30px;
        border-radius: 10px;
    }
    .text {
        color: #c3cbde;
    }
    .dv-dec-3 {
        position: relative;
        width: 100px;
        height: 20px;
        top: -3px;
    }

    .bottom-data {
        .item-box {
            & > div {
                padding-right: 5px;
            }
            font-size: 14px;
            float: right;
            position: relative;
            width: 50%;
            color: #d3d6dd;
            .dv-digital-flop {
                width: 120px;
                height: 30px;
            }
            i {
                font-size: 20px;
                line-height: 30px;
                margin-left: 20px;
            }
            .colorYellow {
                color: yellowgreen;
            }
            p {
                text-align: center;
            }
        }
    }
}
</style>
