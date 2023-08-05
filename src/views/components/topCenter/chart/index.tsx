import { defineComponent, watch, shallowReactive } from 'vue'

// 声明类型
const PropsType = {
  tips: {
    type: Number,
    default: 50,
    require: true
  },
  colorObj: {
    type: Object,
    default: () => ({
      textStyle: "#3fc0fb",
      series: {
        color: ["#00bcd44a", "transparent"],
        dataColor: {
          normal: "#03a9f4",
          shadowColor: "#97e2f5"
        }
      }
    })
  }
} as const

// 定义主体
export default defineComponent({
  props: PropsType,
  setup(props) {
    // 配置项
    let options = shallowReactive({title:null,series:null})

    watch(
      () => props.tips,
      (val: any) => {
        options = {
          title: {
            text: val * 1 + "%",
            x: "center",//设置标题位置
            y: "center",//设置标题位置
            textStyle: {
              color: props.colorObj.textStyle,
              fontSize: 16
            }
          },
          series: [
            {
              type: "pie",
              radius: ["75%", "80%"],//设置饼图的半径范围，内半径为 75%，外半径为 80%。
              center: ["50%", "50%"],//设置饼图的中心位置，使用数组表示，["50%", "50%"] 表示居中。
              hoverAnimation: false,///设置鼠标悬停时关闭扇区的动画效果
              color: props.colorObj.series.color,//设置饼图扇区的颜色，
              label: {
                normal: {
                  show: false
                }
              },
              data: [
                {
                  value: val,
                  itemStyle: {
                    normal: {
                      color: props.colorObj.series.dataColor.normal,
                      shadowBlur: 10,
                      shadowColor: props.colorObj.series.dataColor.shadowColor
                    }
                  }
                },
                {
                  value: 100 - val
                }
              ]
            }
          ]
        }
      },
      {
        immediate: true,
        deep: true
      }
    )

    return () => {
      const height = "100px"
      const width = "120px"

      return <div>
        <echart options={options} height={height} width={width} />
      </div>
    }
  }
})

