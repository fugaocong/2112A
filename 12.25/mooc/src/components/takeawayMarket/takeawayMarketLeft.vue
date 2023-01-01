<template>
	<div class="content row-flex-start" style="width: 100%; height: 400px">
		<div class="left_map" id="left_map" @click="showChinaMap"></div>
		<div class="right_opetate row-center" id="right_opetate"></div>
	</div>
</template>

<script>
	import * as echarts from 'echarts';
	import china from '../../assets/china.json';
	// import axios from "axios"
	echarts.registerMap('china', china);
	var provinces = [
		'shanghai',
		'hebei',
		'shanxi',
		'neimenggu',
		'liaoning',
		'jilin',
		'heilongjiang',
		'jiangsu',
		'zhejiang',
		'anhui',
		'fujian',
		'jiangxi',
		'shandong',
		'henan',
		'hubei',
		'hunan',
		'guangdong',
		'guangxi',
		'hainan',
		'sichuan',
		'guizhou',
		'yunnan',
		'xizang',
		'shanxi1',
		'gansu',
		'qinghai',
		'ningxia',
		'xinjiang',
		'beijing',
		'tianjin',
		'chongqing',
		'xianggang',
		'aomen',
		'taiwan',
	];
	var provincesText = [
		'上海',
		'河北',
		'山西',
		'内蒙古',
		'辽宁',
		'吉林',
		'黑龙江',
		'江苏',
		'浙江',
		'安徽',
		'福建',
		'江西',
		'山东',
		'河南',
		'湖北',
		'湖南',
		'广东',
		'广西',
		'海南',
		'四川',
		'贵州',
		'云南',
		'西藏',
		'陕西',
		'甘肃',
		'青海',
		'宁夏',
		'新疆',
		'北京',
		'天津',
		'重庆',
		'香港',
		'澳门',
		'台湾',
	];
	let points = [
		{ value: [87.628579, 43.793301], itemStyle: { color: '#00EEFF' } },
		{ value: [104.076452, 30.651696], itemStyle: { color: '#00EEFF' } },
		{ value: [103.826777, 36.060634], itemStyle: { color: '#00EEFF' } },
		{ value: [102.709372, 25.046432], itemStyle: { color: '#00EEFF' } },
		{ value: [108.327537, 22.816659], itemStyle: { color: '#00EEFF' } },
		{ value: [112.982951, 28.116007], itemStyle: { color: '#00EEFF' } },
		{ value: [117.020725, 36.670201], itemStyle: { color: '#00EEFF' } },
		{ value: [113.753094, 34.767052], itemStyle: { color: '#00EEFF' } },
		{ value: [112.578781, 37.813948], itemStyle: { color: '#00EEFF' } },
		{ value: [119.296194, 26.101082], itemStyle: { color: '#00EEFF' } },
		{ value: [120.152575, 30.266619], itemStyle: { color: '#00EEFF' } },
		{ value: [118.763563, 32.061377], itemStyle: { color: '#00EEFF' } },
		{ value: [116.407387, 39.904179], itemStyle: { color: '#00EEFF' } },
		{ value: [108.953939, 34.266611], itemStyle: { color: '#00EEFF' } },
		{ value: [113.266887, 23.133306], itemStyle: { color: '#FFFA00' } },
	];
	let gdCode = [113.266887, 23.133306]; // 广东省
	let codes = [];
	points.forEach((item) => {
		codes.push({ coords: [gdCode, item.value], lineStyle: item.lineStyle });
	});
	export default {
		created() {},
		mounted() {
			this.$nextTick(() => {
				this.initMap();
			});
		},
		data() {
			return {
				map: {},
			};
		},
		props: {},
		methods: {
			getMapOpt(place) {
				const option = {
					backgroundColor: '#44474b', //地图背景颜色
					//以下是地图标题，我在此处设空，需要的可以自己加上
					title: {
						text: '慕课外卖销售大盘',
						subtext: '',
						left: 'left',
					},

					//以下是地图右侧“还原”“下载”工具框
					toolbox: {
						show: true,
						orient: 'vertical',
						left: 'right',
						top: 'center',
						feature: {
							restore: {},
							saveAsImage: {},
						},
					},
					geo: {
						map: place || 'china',
						label: {
							emphasis: {
								show: false,
							},
							// 不需要显示地名可直接删除normal此项
							normal: {
								show: false, // 是否显示对应地名
								textStyle: {
									color: 'rgba(0,0,0)',
								},
							},
						},
						roam: true,
						itemStyle: {
							normal: {
								areaColor: '#6FA7CE', //地图颜色
								borderColor: '#fff', //地图边线颜色
							},
							emphasis: {
								areaColor: '#B7DFED', //鼠标移入颜色
							},
							areaColor: {
								type: 'radial',
								x: 0.5,
								y: 0.5,
								r: 0.8,
								colorStops: [
									{
										offset: 0,
										color: '#0C3994', // 0% 处的颜色
									},
									{
										offset: 1,
										color: '#0C3994', // 100% 处的颜色
									},
								],
								globalCoord: true,
							},
						},
					},
					series: [
						{
							type: 'effectScatter',
							coordinateSystem: 'geo',
							showEffectOn: 'render',
							zlevel: 1,
							rippleEffect: {
								number: 3, // 波纹的数量。
								period: 5, // 动画的周期，秒数。
								scale: 17, // 动画中波纹的最大缩放比例。
								brushType: 'fill', // 波纹的绘制方式，可选 'stroke' 和 'fill'。
							},
							symbolSize: 2,
							data: points,
						}, // 地图线的动画效果
						{
							type: 'effectScatter',
							coordinateSystem: 'geo',
							showEffectOn: 'render',
							zlevel: 1,
							rippleEffect: {
								number: 4,
								period: 5,
								scale: 21,
								brushType: 'fill',
							},
							symbolSize: 3,
							data: [
								{
									value: [113.266887, 23.133306],
									itemStyle: { color: '#FFFA00' },
								},
							],
						},
						{
							type: 'lines',
							zlevel: 2,
							effect: {
								show: true,
								period: 4, // 箭头指向速度，值越小速度越快
								trailLength: 0.4, // 特效尾迹长度[0,1]值越大，尾迹越长重
								symbol: 'pin', // 箭头图标
								symbolSize: 6, // 图标大小
							},
							lineStyle: {
								normal: {
									color: '#1DE9B6',
									width: 1, // 线条宽度
									opacity: 0.1, // 尾迹线条透明度
									curveness: 0.3, // 尾迹线条曲直度
								},
							},
							data: codes,
						},
						{
							type: 'custom',
							coordinateSystem: 'geo',
							renderItem: function (params, api) {
								//具体实现自定义图标的方法
								return {
									type: 'image',
									style: {
										// image: uploadedDataURL, // 自定义的图片地址
										x:
											api.coord([
												points[params.dataIndex].value[0],
												points[params.dataIndex].value[1],
											])[0] - 6, // 数据的设置
										y:
											api.coord([
												points[params.dataIndex].value[0],
												points[params.dataIndex].value[1],
											])[1] - 34,
									},
								};
							},
							zlevel: 10,
							data: points,
						},
					],
				};
				return option;
			},
			// 显示中国地图
			showChinaMap() {
				const option = this.getMapOpt();
				this.map.setOption(option, true);
			},
			initMap() {
				var dom = document.getElementById('left_map');
				this.map = echarts.init(dom);
				const option = this.getMapOpt();
				if (option && typeof option === 'object') {
					this.map.setOption(option, true);
				}
				this.map.on('click', (param) => {
					// console.log(param)
					event.stopPropagation(); // 阻止冒泡
					// 找到省份名
					const provinceIndex = provincesText.findIndex((x) => {
						return param.name === x;
					});
					//在这里判断provincesText中是否包含点击的省份名，有则渲染省级地图，无则无处理（需要可从此获得）
					if (provinceIndex === -1) return;
					const provinceAlphabet = provinces[provinceIndex];
					// 重新渲染各省份地图
					this.getProvinceMapOpt(provinceAlphabet);
				});
			},
		},
		computed: {},
	};
</script>

<style>
	.left_map {
		width: 100%;
		height: 100%;
	}
	.content[data-v-edb17e0a] {
		padding: 0 !important ;
		margin-right: 10px;
	}
</style>
