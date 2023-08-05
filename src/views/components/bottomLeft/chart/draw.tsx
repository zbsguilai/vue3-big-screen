import { defineComponent, watch, ref } from 'vue'
import * as echarts from 'echarts'
// 声明类型
const PropsType = {
	cdata: {
		type: Object,
		require: true
	}
} as const

// 定义主体
export default defineComponent({
	props: PropsType,
	setup(props) {
		// 定义 ref
		const chartRef = ref()
		// 配置项
		let options = {}

		// 监听
		watch(
			() => props.cdata,
			(val: any) => {
				options = {
					tooltip: {
						show: true,
						trigger: "item",
						axisPointer: {
							type: "shadow",
							label: {
								show: true,
								backgroundColor: "#7B7DDC"
							}
						}
					},
					legend: {
						show: true,
					},
					grid: {
						x: "8%",
						width: "88%",
						top: "5%",
						bottom: '7%'
					},
					xAxis: {
						data: val.category,
						axisLine: {
							lineStyle: {
								color: "#B4B4B4"
							}
						},
						axisTick: {
							show: false
						}
					},
					yAxis: [
						{
							splitLine: { show: false },
							axisLine: {
								lineStyle: {
									color: "#B4B4B4"
								}
							},
							axisLabel: {
								formatter: "{value} "
							}
						},
						{
							splitLine: { show: false },
							axisLine: {
								lineStyle: {
									color: "#B4B4B4"
								}
							},
							axisLabel: {
								formatter: "{value} "
							}
						}
					],
					series: [
						{
							name: "贯通率",
							type: "line",
							smooth: true,
							showAllSymbol: true, //是否显示所有数据点的图形符号。设置为 true，每个数据点都将显示图形符号
							symbol: "emptyCircle",//数据点的图形符号形状-空心圆形

							symbolSize: 8,//数据点的图形符号大小
							yAxisIndex: 1,//系列使用的 Y 轴索引
							itemStyle: {//系列的图形样式配置
								normal: {
									color: "#F02FC2"
								}
							},
							data: val.rateData
						},
						{
							name: "已贯通",
							type: "bar",
							barWidth: 10,//柱状图的宽度（像素）
							itemStyle: {
								normal: {
									barBorderRadius: 5,//柱状图的边框圆角半径
									color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
										{ offset: 0, color: "#956FD4" },
										{ offset: 1, color: "#3EACE5" }
									])
								}
							},
							data: val.barData
						},
						{
							name: "计划贯通",
							type: "bar",
							barGap: "-100%",//柱状图之间的间隔。这里设置为 "-100%"，表示柱状图之间没有间隔，紧密排列。
							barWidth: 10,
							itemStyle: {
								normal: {
									barBorderRadius: 5,
									color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
										{ offset: 0, color: "rgba(156,107,211,0.8)" },
										{ offset: 0.2, color: "rgba(156,107,211,0.5)" },
										{ offset: 1, color: "rgba(156,107,211,0.2)" }
									])
								}
							},
							z: -12,//系列的层级，用于控制图表中系列的显示顺序。这里设置为 -12，表示该系列位于较底层
							data: val.lineData
						}
					]
				}
				// 手动触发更新
				if (chartRef.value) {
					// 通过初始化参数打入数据
					chartRef.value.initChart(options)
				}
			},
			{
				immediate: true,
				deep: true
			}
		)

		return () => {
			const height = "450px"
			const width = "100%"

			return <div>
				<echart ref={chartRef} height={height} width={width} />
			</div>
		}
	}
})

