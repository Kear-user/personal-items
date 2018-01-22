var vm = new Vue({
	el: '#myChart',
	methods:{
		drawLine:function(){
			// 基于准备好的dom，初始化echarts实例
			var myChart = echarts.init(document.getElementById('demo1'))
			//绘制图表
			var option = {
				title:{
					text:'在Vue中使用echarts'
				},
				tooltip:{},
				legend:{
					data:['销量']
				},
				xAxis:{
					data:['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子']
				},
				yAxis:{},
				series:[{
					name:'销量',
					type:'bar',
					data:[5,20,36,10,10,20]
				}]
			}
			myChart.setOption(option)
		}
	}
})
vm.drawLine();


