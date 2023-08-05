<template>
    <div id="index" ref="appRef">
        <div class="bg">
            <dv-loading v-if="loading">Loading...</dv-loading>
            <div v-else class="main-box">
                <!-- 头部 -->
                <div class="d-flex jc-center">
                    <dv-decoration-10 class="dv-decoration-10" />
                    <dv-decoration-8 style="width:200px;height:50px;" :color="decorationColors" />
                    <div class="title">
                        <div class="title-text">
                            Vue3大屏模版
                        </div>
                    </div>
                    <dv-decoration-8 :color="decorationColors" :reverse="true" style="width:200px;height:50px;" />
                    <dv-decoration-10 :reverse="true" class="dv-decoration-10" style="transform:rotate(180deg)" />
                </div>
                <!-- 第二行 -->
                <div class="d-flex jc-between">
                    <div class="aside-width d-flex">
                        <div class="title-card-left ml-4">
                            <span class="tc-before"></span>
                            <div class="text">标题一</div>
                        </div>
                        <div class="title-card-left tc-custom ml-3">
                            <div class="text">标题二 </div>
                        </div>
                    </div>
                    <div class="aside-width d-flex">
                        <div class="title-card-right right mr-4">
                            <div class="text">标题一</div>
                        </div>
                        <div class="title-card-right right tc-custom mr-4">
                            <span class="tc-after"></span>
                            <div class="text mr-3">
                                {{timeNow.year}}
                                {{timeNow.week}} 
                                {{timeNow.day}}
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 视图 -->
                <div class="echarts-content mt-20">
                    <!-- 第三行数据 -->
                    <div class="top-view">
                        <dv-border-box-8 :reverse="true">
                            <topLeft1 />
                        </dv-border-box-8>
                        <dv-border-box-8>
                            <topLeft2 />
                        </dv-border-box-8>
                        <top-center />

                        <top-right1 />
                        <dv-border-box-13>
                            <top-right2 />
                        </dv-border-box-13>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <!-- 第四行数据 -->
                    <div class="bottom-view">
                        <bottomLeft />
                        <bottom-right/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineComponent, onMounted, onUnmounted, reactive, ref } from "vue";
import useDraw from "@/utils/useDraw";
import { formatTime } from "@/utils/index";
import { WEEK } from "@/constant/index"; 
import topLeft1 from "../components/topLeft1/index.vue";
import topLeft2 from "../components/topLeft2/index.vue";
import topCenter from "../components/topCenter/index.vue";
import topRight2 from "../components/topRight2/index.vue";
import topRight1 from "../components/topRight1/index.vue";
import bottomLeft from "../components/bottomLeft/index.vue";
import bottomRight from "../components/bottomRight/index.vue";
const { appRef, calcRate, windowDraw, unWindowDraw } = useDraw();
const loading = ref<boolean>(false);
const decorationColors = ["#568aea", "#000000"];
const timeNow = reactive({
    year: "",
    week: "",
    day: "",
    setInterval: null,
});
const handleTime = () => {
    timeNow.setInterval = setInterval(() => {
        const date = new Date();
        timeNow.day = formatTime(date, "HH: mm: ss");
        timeNow.year = formatTime(date, "yyyy-MM-dd");
        timeNow.week = WEEK[date.getDay()];
    }, 1000);
};
onMounted(() => {
    handleTime();
    windowDraw();
    calcRate();
});
onUnmounted(() => {
    unWindowDraw();
});
</script>
<style lang="scss">
.mt-20 {
    margin-top: 20px;
}
#index {
    color: #d3d6dd;
    width: 1920px;
    height: 1080px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: left top;
    .bg {
        width: 100%;
        height: 100%;
        padding: 16px 16px 0 16px;
        background-image: url("../../assets/pageBg.png");
        background-size: cover;
        background-position: center center;
    }
    .main-box {
        .dv-decoration-10 {
            width: 33.33%;
            height: 5px;
        }
        .title {
            position: relative;
            width: 500px;
            text-align: center;
            .title-text {
                position: absolute;
                bottom: 0;
                font-size: 24px;
                left: 50%;
                transform: translate(-50%);
            }
        }
        .aside-width {
            width: 40%;
            .title-card-left,
            .title-card-right {
                height: 50px;
                line-height: 50px;
                background-color: #0f1325;
                transform: skewX(45deg);
                .text {
                    display: inline-block;
                    transform: skewX(-45deg);
                }
            }
            .title-card-left {
                width: 500px;
                .tc-before {
                    position: absolute;
                    left: -25px;
                    top: 0;
                    height: 50px;
                    width: 50px;
                    background-color: #0f1325;
                    transform: skewX(-45deg);
                }

                &.tc-custom {
                    width: 300px;
                    text-align: center;
                }
            }
            .title-card-right {
                width: 300px;
                text-align: center;
                &.tc-custom {
                    width: 500px;
                    text-align: right;
                }
                .tc-after {
                    position: absolute;
                    right: -25px;
                    top: 0;
                    height: 50px;
                    width: 50px;
                    background-color: #0f1325;
                    transform: skewX(-45deg);
                }
            }
        }
        .echarts-content {
            .top-view {
                display: grid;
                grid-template-columns: 2fr 3fr 5fr 3fr 2fr;
            }
            .bottom-view {
                display: grid;
                grid-template-columns: 5fr 5fr;
            }
        }
    }
}
</style>
