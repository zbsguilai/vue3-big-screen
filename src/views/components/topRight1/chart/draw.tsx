import { defineComponent, watch, shallowReactive } from 'vue'

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
		// 定义固定配置项
		const lineStyle = {
			normal: {
				width: 1,
				opacity: 0.5
			}
		};
		// 配置项
		let options = shallowReactive({ radar: null, series: null })

		watch(
			() => props.cdata,
			(val: any) => {
				// Schema:
				// date,AQIindex,PM2.5,PM10,CO,NO2,SO2


				const dataBJ = [
					[94, 69, 114, 2.08, 73, 39, 22],
					[99, 73, 110, 2.43, 76, 48, 23],
					[31, 12, 30, 0.5, 32, 16, 24],
					[42, 27, 43, 1, 53, 22, 25],
					[154, 117, 157, 3.05, 92, 58, 26],
					[234, 185, 230, 4.09, 123, 69, 27],
					[160, 120, 186, 2.77, 91, 50, 28]
				]
				const dataGZ = [
					[84, 94, 140, 2.238, 68, 18, 22],
					[93, 77, 104, 1.165, 53, 7, 23],
					[99, 130, 227, 3.97, 55, 15, 24],
					[146, 84, 139, 1.094, 40, 17, 25],
					[113, 108, 137, 1.481, 48, 15, 26],
					[81, 48, 62, 1.619, 26, 3, 27],
					[56, 48, 68, 1.336, 37, 9, 28]
				]
				const dataSH = [
					[91, 45, 125, 0.82, 34, 23, 1],
					[65, 27, 78, 0.86, 45, 29, 2],
					[83, 60, 84, 1.09, 73, 27, 3],
					[109, 81, 121, 1.28, 68, 51, 4],
					[106, 77, 114, 1.07, 55, 51, 5],
					[109, 81, 121, 1.28, 68, 51, 6],
					[106, 77, 114, 1.07, 55, 51, 7]
				]
				const lineStyle = {
					width: 1,
					opacity: 0.5
				};
				options = {

					//   radar: {
					//     indicator: val.indicatorData,
					//     shape: "circle",
					//     splitNumber: 5,
					//     radius: ["0%", "65%"],
					//     name: {
					//       textStyle: {
					//         color: "rgb(238, 197, 102)"
					//       }
					//     },
					//     splitLine: {
					//       lineStyle: {
					//         color: [
					//           "rgba(238, 197, 102, 0.1)",
					//           "rgba(238, 197, 102, 0.2)",
					//           "rgba(238, 197, 102, 0.4)",
					//           "rgba(238, 197, 102, 0.6)",
					//           "rgba(238, 197, 102, 0.8)",
					//           "rgba(238, 197, 102, 1)"
					//         ].reverse()
					//       }
					//     },
					//     splitArea: {
					//       show: false
					//     },
					//     axisLine: {
					//       lineStyle: {
					//         color: "rgba(238, 197, 102, 0.5)"
					//       }
					//     }
					//   },
					radar: {
						indicator: [
							{ name: '数据1', max: 300 },
							{ name: '数据2', max: 250 },
							{ name: '数据3', max: 300 },
							{ name: '数据4', max: 5 },
							{ name: '数据5', max: 200 },
							{ name: '数据5', max: 100 }
						],
						shape: 'circle',
						splitNumber: 5,
						axisName: {
							color: 'rgb(238, 197, 102)'
						},
						radius: ["0%", "65%"],
						splitLine: {
							lineStyle: {
								color: [
									'rgba(238, 197, 102, 0.1)',
									'rgba(238, 197, 102, 0.2)',
									'rgba(238, 197, 102, 0.4)',
									'rgba(238, 197, 102, 0.6)',
									'rgba(238, 197, 102, 0.8)',
									'rgba(238, 197, 102, 1)'
								].reverse()
							}
						},
						splitArea: {
							show: false
						},
						axisLine: {
							lineStyle: {
								color: 'rgba(238, 197, 102, 0.5)'
							}
						}
					},
					series: [
						{
							name: "北京",
							type: "radar",
							lineStyle: lineStyle,
							data: val.dataBJ,
							symbol: "none",
							itemStyle: {
								normal: {
									color: "#F9713C"
								}
							},
							areaStyle: {
								normal: {
									opacity: 0.1
								}
							}
						},
						{
							name: "上海",
							type: "radar",
							lineStyle: lineStyle,
							data: val.dataSH,
							symbol: "none",
							itemStyle: {
								normal: {
									color: "#B3E4A1"
								}
							},
							areaStyle: {
								normal: {
									opacity: 0.05
								}
							}
						},
						{
							name: "广州",
							type: "radar",
							lineStyle: lineStyle,
							data: val.dataGZ,
							symbol: "none",
							itemStyle: {
								normal: {
									color: "rgb(238, 197, 102)"
								}
							},
							areaStyle: {
								normal: {
									opacity: 0.05
								}
							}
						}
					]
				}
				// options = {
				//   radar: {
				//     indicator: val.indicatorData,
				//     shape: "circle",
				//     splitNumber: 5,
				//     radius: ["0%", "65%"],
				//     name: {
				//       textStyle: {
				//         color: "rgb(238, 197, 102)"
				//       }
				//     },
				//     splitLine: {
				//       lineStyle: {
				//         color: [
				//           "rgba(238, 197, 102, 0.1)",
				//           "rgba(238, 197, 102, 0.2)",
				//           "rgba(238, 197, 102, 0.4)",
				//           "rgba(238, 197, 102, 0.6)",
				//           "rgba(238, 197, 102, 0.8)",
				//           "rgba(238, 197, 102, 1)"
				//         ].reverse()
				//       }
				//     },
				//     splitArea: {
				//       show: false
				//     },
				//     axisLine: {
				//       lineStyle: {
				//         color: "rgba(238, 197, 102, 0.5)"
				//       }
				//     }
				//   },
				//   series: [
				//     {
				//       name: "北京",
				//       type: "radar",
				//       lineStyle: lineStyle,
				//       data: val.dataBJ,
				//       symbol: "none",
				//       itemStyle: {
				//         normal: {
				//           color: "#F9713C"
				//         }
				//       },
				//       areaStyle: {
				//         normal: {
				//           opacity: 0.1
				//         }
				//       }
				//     },
				//     {
				//       name: "上海",
				//       type: "radar",
				//       lineStyle: lineStyle,
				//       data: val.dataSH,
				//       symbol: "none",
				//       itemStyle: {
				//         normal: {
				//           color: "#B3E4A1"
				//         }
				//       },
				//       areaStyle: {
				//         normal: {
				//           opacity: 0.05
				//         }
				//       }
				//     },
				//     {
				//       name: "广州",
				//       type: "radar",
				//       lineStyle: lineStyle,
				//       data: val.dataGZ,
				//       symbol: "none",
				//       itemStyle: {
				//         normal: {
				//           color: "rgb(238, 197, 102)"
				//         }
				//       },
				//       areaStyle: {
				//         normal: {
				//           opacity: 0.05
				//         }
				//       }
				//     }
				//   ]
				// }
			},
			{
				immediate: true,
				deep: true
			}
		)

		return () => {
			const height = "200px"
			const width = "260px"

			return <div>
				<echart options={options} height={height} width={width} />
			</div>
		}
	}
})

