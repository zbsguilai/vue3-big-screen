

import { defineComponent, watch, shallowReactive, nextTick, ref, onUnmounted } from 'vue';
const PropsType = {
	cdata: {
		type: Array,
		require
	}
} as const
export default defineComponent({
	props: PropsType,
	setup(props) {
		// 配置项
		let options = shallowReactive({ showLegendSymbol: null, tooltip: null, geo: null, series: null })
		// 设置点的位置(经纬度)
		const geoCoordMap = {
			朝阳区: [116.486409, 39.921489, 20],
			海淀区: [116.310316, 39.956074, 20],
			丰台区: [116.286968, 39.863642, 20],
			西城区: [116.365322, 39.912345, 20],
			东城区: [116.418757, 39.917544, 20],
			昌平区: [116.231204, 40.220663, 20],
			大兴区: [116.341395, 39.726929, 20],  
			通州区: [116.656435, 39.909946, 20],
			石景山区: [116.222982, 39.906611, 20],
			顺义区: [116.654171, 40.130211, 20],
			房山区: [116.143267, 39.749144, 20],
			怀柔区: [116.637122, 40.324272, 20],
			密云区: [116.883352, 40.6, 20],
			延庆区: [115.985006, 40.5, 20],
			平谷区:[117.1,40.13,20] 
		};
		const seriesData = [
			{
				name: '朝阳区',
			},
			{
				name: '平谷区',
			},
			{
				name: '海淀区',
			},
			{
				name: '丰台区',
			},
			{
				name: '西城区',
			},
			{
				name: '东城区',
			},
			{
				name: '昌平区',
			},
			{
				name: '大兴区',
			},
			{
				name: '通州区',
			},
			{
				name: '石景山区',
			},
			{
				name: '顺义区',
			},
			{
				name: '房山区',
			},
			{
				name: '怀柔区',
			},
			{
				name: '密云区',
			},
			{
				name: '延庆区',
			},
		];


		const convertData = function (data) {
			const scatterData = [];
			for (let i = 0; i < data.length; i++) {
				const geoCoord = geoCoordMap[data[i].name];
				if (geoCoord) {
					scatterData.push({
						name: data[i].name,
						value: geoCoord.concat(data[i].value),
					});
				}
			}
			console.log(scatterData, 'convertData')
			return scatterData;
		}

		// 监听
		watch(() => props.cdata,
			(val: any) => {
				options = {
					showLegendSymbol: true,
					tooltip: {
						trigger: 'item',
						textStyle: {
							fontSize: 14,
							lineHeight: 22,
						},
						//函数通过在x坐标上加上50个单位（point[0] + 50）并在y坐标上减去20个单位（point[1] - 20）来调整位置。
						//将点从原始位置向右移动50个单位，并向上移动20个单位
						position: point => {
							// 固定在顶部
							return [point[0] + 50, point[1] - 20];
						},
					},
					// 底部背景
					geo: [{
						show: true,
						aspectScale: 0.85, //长宽比
						// zoom: 1.16,
						top: '10%',
						left: '17%',
						map: '北京',//设置使用的地理区域地图，这里设置为'福建'表示使用名为"福建"的地理区域地图。
						roam: false,//设置是否开启鼠标缩放和平移漫游的功能
						itemStyle: {
							normal: {
								borderColor: '#7ad5ff7f',
								shadowOffsetY: 5,
								shadowBlur: 15,
								areaColor: 'rgba(5,21,35,0.1)'
							}
						}
					}],
					series: [
						{
							name: '相关指数',
							type: 'map',
							aspectScale: 0.85, //长宽比
							zoom: 1.12, //缩放
							mapType: '北京', // 自定义扩展图表类型
							top: '9%',
							left: '16%',
							itemStyle: {
								normal: {
									// 背景渐变色
									areaColor: {
										type: 'linear-gradient',
										x: 0,
										y: 300,
										x2: 0,
										y2: 0,
										colorStops: [{
											offset: 0,
											color: 'RGBA(19,96,187,1)' // 0% 处的颜色
										}, {
											offset: 1,
											color: 'RGBA(7,193,223,1)' // 50% 处的颜色
										}],
										global: true // 缺省为 false
									},
									// borderColor: '#4ECEE6',
									// borderWidth: 1,
								},
								// 置强调效果的样式。
								emphasis: {
									areaColor: '#4f7fff',//设置强调区域的背景颜色
									borderColor: 'rgba(0,242,252,.6)',//设置强调区域的边框颜色
									borderWidth: 2,//设置强调区域的边框宽度
									shadowBlur: 10,//设置强调区域的阴影模糊程度
									shadowColor: '#00f2fc',//设置强调区域的阴影颜色
								},
							},
							label: {
								formatter: params => {
									`${params.name}`
								},
								show: true,
								position: 'insideRight',
								textStyle: {
									fontSize: 14,
									color: '#efefef',
								},
								emphasis: {
									textStyle: {
										color: '#fff',
									},
								},
							},
							data: val,
						},
						{
							type: 'effectScatter',//特殊效果的散点图
							coordinateSystem: 'geo',//指定使用地理坐标系来展示数据。
							symbolSize: 7,//设置散点的符号大小为7，表示散点的显示大小。
							effectType: 'ripple',//定散点图的效果类型为"ripple"，表示涟漪效果。目前只支持涟漪特效'ripple'
							legendHoverLink: false,//设置图例不与散点的鼠标悬停事件关
							showEffectOn: 'render',//指定散点图的效果在渲染时显示
							rippleEffect: {//配置涟漪效果的相关参数。
								period: 4,//设置涟漪效果的周期为4
								scale: 2.5,//设置涟漪效果的缩放比例为2.5。
								brushType: 'stroke'//设置涟漪效果的画刷类型为"stroke"，表示只绘制边框。
							},
							zlevel: 1,//设置图表图层的层级为1，用于控制图表元素的覆盖顺序。
							itemStyle: {//设置散点的样式。
								normal: {
									color: '#99FBFE',//点的颜色
									shadowBlur: 5,//阴影的模糊程度为
									shadowColor: '#fff',//置阴影的模颜色
								},
							},
							data: convertData(seriesData),
						},
					],
				}
			},
			{
				immediate: true,
				deep: true
			}
		)
		return () => {
			const height = "360px"
			const width = "330px"
			return <div>
				<echart options={options} height={height} width={width} />
			</div>
		}
	}
})