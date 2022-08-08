<template>
  <div>
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="main"></div>
    <button @click="getPdf('main', '论文图片')">导出为pdf</button>
  </div>
</template>

<script>
export default {
  methods: {
    initChart: function () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据 绘制图表
      myChart.setOption({
        //表格标题
        title: {
          //标题文本
          text: "商品库存",
        },
        //鼠标悬浮提示框
        tooltip: {},
        //x轴样式
        xAxis: {
          //数据
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
          axisLabel: {
            textStyle: {
              color: "#000",
              fontSize: 20,
            },
          },
        },
        //y轴样式
        yAxis: {
          axisLabel: {
            textStyle: {
              color: "#000",
              fontSize: 30,
            },
          },
        },
        //一组数值以及他们映射成的图
        series: [
          {
            //数据名称
            name: "库存",
            //柱状图
            type: "bar",
            //数据来源
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    },
  },
  //钩子函数
  mounted() {
    //调用initChart方法
    this.initChart();
  },
};
</script>

<style lang="less" scoped>
#main {
  width: 1000px;
  height: 600px;
  margin: 50px auto;
}
</style>
