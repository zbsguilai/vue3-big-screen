import { defineComponent, ref, watch, shallowReactive } from 'vue'

// 声明类型，断言cdata为不可变的常量
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
    // 配置项,创建一个浅响应式对象，只有对象的顶层属性会被转换为响应式的
    let options = shallowReactive({color:null,tooltip:null,toolbox:null,calculable:null,legend:null,series:null})
    watch(
      () => props.cdata,
      (val: any) => {
        options = {
          color: [
            '#37a2da',
            '#32c5e9',
            '#9fe6b8',
            '#ffdb5c',
            '#ff9f7f',
            '#fb7293',
            '#e7bcf3',
            '#8378ea'
          ],//饼图每块的颜色
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'//系列名称  数据项的名称  数据项的数值 数据项数值的百分比
          },
          toolbox: {
            show: true
          },
          calculable: true,
          legend: {
            orient: 'horizontal',//表示图例的布局方式为水平排列
            icon: 'circle',
            bottom: 0,//图例位于图表的底部位置。
            x: 'center',//表示图例水平居中对齐。
            data: val.xData,//表示图例的数据项名称，通常与图表中的数据系列相对应。
            textStyle: {
              color: '#fff'
            }
          },
          series: [
            {
              name: '通过率统计',
              type: 'pie',
              radius: [10, 50],//表示饼图的半径范围，[10, 50] 表示内外两个半径分别为 10 和 50。
              roseType: 'area',//即玫瑰图类型，会使饼图的扇区呈现出一定的弧度和曲线
              center: ['50%', '40%'],//表示饼图的中心位置，['50%', '40%'] 表示在图表容器中横向位置为 50%，纵向位置为 40% 处
              itemStyle: {
                borderRadius: 5
              },
              label: {
                show: true,
                color: "#fff",
              },
              emphasis: {//饼图扇区在高亮状态下的标签显示
                label: {
                  show: true
                }
              },
              data: val.seriesData
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
      const height = "220px"
      const width = "260px"

      return <div>
        <echart ref={chartRef} options={options} height={height} width={width} />
      </div>
    }
  }
})

