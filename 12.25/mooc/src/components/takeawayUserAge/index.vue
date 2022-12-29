<template>
	<div>
        <div class="wrap">
            <h5>慕课外卖用户年龄分布&平均年龄</h5>
            <p>of Age</p>
            <div id="user-age" style="width:100%;height:10px "></div>
            <ul>
                <li>
                    <h5>304,378</h5>
                    <p>
                        <i></i>
                        <span>0-20</span>
                    </p>
                </li>
                <li>
                    <h5>304,378</h5>
                    <p>
                        <i></i>
                        <span>0-20</span>
                    </p>
                </li>
                <li>
                    <h5>304,378</h5>
                    <p>
                        <i></i>
                        <span>0-20</span>
                    </p>
                </li>
                <li>
                    <h5>304,378</h5>
                    <p>
                        <i></i>
                        <span>0-20</span>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
	import * as echarts from 'echarts';
	export default {
		data() {
			return {};
		},
		mounted() {
			var chartDom = document.getElementById('user-age');
			var myChart = echarts.init(chartDom);
			var option;

			option = {
				xAxis: {
					type: 'value',
					// data: ['Mon'],
				},
				yAxis: {
					type: 'category',
				},
				series: [
					{
						data: [120],
						type: 'bar',
					},
				],
			};

			option && myChart.setOption(option);
		},
	};
</script>

<style lang="scss" scoped>
.wrap{
    color: #fff;
    >p{
        font-size: 12px;
    }
    >ul{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        >li{
            text-align: center;
            >p{
                >i{
                    background-color: #7ea345;
                    padding: 4px;
                    box-sizing: border-box;
                    border-radius: 50%;
                    display: inline-block;
                    margin-right: 2px;
                }
                >span{
                    font-size: 12px;
                }
            }
        }
    }
}
</style>
