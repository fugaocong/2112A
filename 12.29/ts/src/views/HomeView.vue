<template>
	<div class="">
		<header>
			<h1>班级点名表</h1>
		</header>
		<div class="currentTime"></div>
		<div class="content">
			<div class="left">
				<ul>
					<li
						v-for="item in studentLists"
						:key="item.id"
						:style="{ backgroundImage: item.textColor }"
					>
						{{ item.name }}
					</li>
				</ul>
			</div>
			<div class="right">
				<div class="top">
					<h1>天选之人：</h1>
					<span :style="{ backgroundImage: checkNameColor }">{{ name }}</span>
				</div>
				<div class="bottom">
					<button @click="oneStudent">单人点名</button>
					<button @click="twoStudent">男女双人点名</button>
					<button @click="boyOrGirlStudent(0)">男生点名</button>
					<button @click="boyOrGirlStudent(1)">女生点名</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { ref, reactive, toRefs, nextTick } from 'vue';
	export default {
		setup(props, ctx) {
			const data = reactive({
				studentList: [
					{
						id: 1,
						name: '张世权',
						sex: 0,
					},
					{
						id: 2,
						name: '吴倩',
						sex: 1,
					},
					{
						id: 3,
						name: '李宏恩',
						sex: 0,
					},
					{
						id: 4,
						name: '宋增杰',
						sex: 0,
					},
					{
						id: 5,
						name: '杨志豪',
						sex: 0,
					},
					{
						id: 6,
						name: '郝嫚嫚',
						sex: 1,
					},
					{
						id: 7,
						name: '侯建荞',
						sex: 1,
					},
					{
						id: 8,
						name: '程怀博',
						sex: 0,
					},
					{
						id: 9,
						name: '周璇',
						sex: 1,
					},
					{
						id: 10,
						name: '张建雨',
						sex: 0,
					},
					{
						id: 11,
						name: '孙銘',
						sex: 0,
					},
					{
						id: 12,
						name: '孙旭瑶',
						sex: 1,
					},
					{
						id: 13,
						name: '章奥博',
						sex: 0,
					},
					{
						id: 14,
						name: '王伟宸',
						sex: 0,
					},
					{
						id: 15,
						name: '巴钦',
						sex: 0,
					},
					{
						id: 16,
						name: '代伊涵',
						sex: 0,
					},
					{
						id: 17,
						name: '邓林柯',
						sex: 0,
					},
					{
						id: 18,
						name: '张立',
						sex: 0,
					},
					{
						id: 19,
						name: '李妍',
						sex: 1,
					},
					{
						id: 20,
						name: '薛翔元',
						sex: 0,
					},
					{
						id: 21,
						name: '郑锋',
						sex: 0,
					},
					{
						id: 22,
						name: '江萌洋',
						sex: 1,
					},
					{
						id: 23,
						name: '张宗耀',
						sex: 0,
					},
					{
						id: 24,
						name: '章涵语',
						sex: 0,
					},
					{
						id: 25,
						name: '高鹏亚',
						sex: 0,
					},
					{
						id: 26,
						name: '刘艺',
						sex: 1,
					},
					{
						id: 27,
						name: '付高聪',
						sex: 0,
					},
					{
						id: 28,
						name: '宋海宇',
						sex: 0,
					},
					{
						id: 29,
						name: '王龙翔',
						sex: 0,
					},
					{
						id: 30,
						name: '徐婉颖',
						sex: 1,
					},
					{
						id: 31,
						name: '韩雨泽',
						sex: 0,
					},
				],
				studentLists: [
					{
						id: 1,
						name: '张世权',
						sex: 0,
					},
					{
						id: 2,
						name: '吴倩',
						sex: 1,
					},
					{
						id: 3,
						name: '李宏恩',
						sex: 0,
					},
					{
						id: 4,
						name: '宋增杰',
						sex: 0,
					},
					{
						id: 5,
						name: '杨志豪',
						sex: 0,
					},
					{
						id: 6,
						name: '郝嫚嫚',
						sex: 1,
					},
					{
						id: 7,
						name: '侯建荞',
						sex: 1,
					},
					{
						id: 8,
						name: '程怀博',
						sex: 0,
					},
					{
						id: 9,
						name: '周璇',
						sex: 1,
					},
					{
						id: 10,
						name: '张建雨',
						sex: 0,
					},
					{
						id: 11,
						name: '孙銘',
						sex: 0,
					},
					{
						id: 12,
						name: '孙旭瑶',
						sex: 1,
					},
					{
						id: 13,
						name: '章奥博',
						sex: 0,
					},
					{
						id: 14,
						name: '王伟宸',
						sex: 0,
					},
					{
						id: 15,
						name: '巴钦',
						sex: 0,
					},
					{
						id: 16,
						name: '代伊涵',
						sex: 0,
					},
					{
						id: 17,
						name: '邓林柯',
						sex: 0,
					},
					{
						id: 18,
						name: '张立',
						sex: 0,
					},
					{
						id: 19,
						name: '李妍',
						sex: 1,
					},
					{
						id: 20,
						name: '薛翔元',
						sex: 0,
					},
					{
						id: 21,
						name: '郑锋',
						sex: 0,
					},
					{
						id: 22,
						name: '江萌洋',
						sex: 1,
					},
					{
						id: 23,
						name: '张宗耀',
						sex: 0,
					},
					{
						id: 24,
						name: '章涵语',
						sex: 0,
					},
					{
						id: 25,
						name: '高鹏亚',
						sex: 0,
					},
					{
						id: 26,
						name: '刘艺',
						sex: 1,
					},
					{
						id: 27,
						name: '付高聪',
						sex: 0,
					},
					{
						id: 28,
						name: '宋海宇',
						sex: 0,
					},
					{
						id: 29,
						name: '王龙翔',
						sex: 0,
					},
					{
						id: 30,
						name: '徐婉颖',
						sex: 1,
					},
					{
						id: 31,
						name: '韩雨泽',
						sex: 0,
					},
				],
				name: '',
				checkNameColor: '',
			});
			/**封装随机数 */
			const random = (array) => {
				// 获取随机数的最大值
				let max = array.length - 1;
				// 获取随机数的最小值
				let min = 0;
				// 生成随机数
				let randoms = Math.floor(Math.random() * (max - min) + min);
				return randoms;
			};
			/**封装随机颜色*/
			const randomColor = () => {
				return Math.floor(Math.random() * 256);
			};
			/**封装随机渐变色 */
			const randomGradient = () => {
				let start = randomColor();
				let end = randomColor();
				let color = `linear-gradient(to right, rgb(${start},${randomColor()},${randomColor()}),rgb(${end},${randomColor()},${randomColor()}))`;
				// console.log(color);
				return color;
			};
			/**给每个li加颜色 */
			nextTick(() => {
				setInterval(function () {
					data.studentLists.forEach((i) => {
						i.textColor = randomGradient();
					});
				}, 100);
			});
			/**背景随机色 */
			const randomBack = () => {
				setInterval(function () {
					data.checkNameColor = randomGradient();
				}, 100);
			};

			/**单人点名 */
			const oneStudent = () => {
				if (data.studentList.length == 0) {
					data.studentList = [...data.studentLists];
				} else {
					let index = random(data.studentList);
					data.name = data.studentList[index].name;
					data.studentList.splice(index, 1);
					randomBack();
				}
			};
			/**获取男女下标 分类存储 */
			const classify = () => {
				// 男孩下标存放的数组
				let boyIndex = [];
				// 女孩存放的数组
				let girlIndex = [];
				data.studentList.forEach((item, index) => {
					if (item.sex === 0) {
						boyIndex.push(index);
					} else {
						girlIndex.push(index);
					}
				});
				return { boyIndex, girlIndex };
			};
			/**男女双人点名 */
			const twoStudent = () => {
				// 获取分类的下标
				let result = classify();
				// 获取不同的数组
				let boyIndex = result.boyIndex;
				let girlIndex = result.girlIndex;
                console.log(boyIndex,girlIndex);
				let aIndex = random(boyIndex);
				let bIndex = random(girlIndex);
                console.log(boyIndex[aIndex],girlIndex[bIndex]);
				let a = data.studentList[boyIndex[aIndex]].name;
				let b = data.studentList[girlIndex[bIndex]].name;
				data.name = a + '-' + b;
				
				randomBack();
				
			};

			/**男生或者点名 */
			const boyOrGirlStudent = (sex) => {
				// 获取分类的下标
				let result = classify();
				// 获取不同的数组
				let boyIndex = result.boyIndex;
				let girlIndex = result.girlIndex;
				// 判断获取的是男生还是女生
				let boyOrGirl = sex === 0 ? boyIndex : girlIndex;
				//  获取数组里的随机下标
				let boyOrGirIndex = random(boyOrGirl);
				data.name = data.studentList[boyOrGirl[boyOrGirIndex]].name;
				randomBack();
			};
			return { ...toRefs(data), oneStudent, twoStudent, boyOrGirlStudent };
		},
	};
</script>

<style lang="scss" scoped>
	header {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		h1 {
			padding: 60px;
			color: #fff;
		}
		.audio {
			float: left;
		}
	}

	.currentTime {
		text-align: right;
		color: #fff;
		padding: 20px;
	}

	.content {
		padding: 50px 0px;
		display: flex;
		height: calc(100vh - 228.5px - 59px);
		width: 100%;
		justify-content: space-evenly;

		.left {
			width: 60%;

			> ul {
				display: flex;
				flex-wrap: wrap;
				justify-content: flex-start;
				padding: 20px;

				> li {
					width: 20%;
					text-align: center;
					padding: 20px;
					color: #fff;
					background: transparent;
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
				}
			}
		}

		.right {
			width: 40%;
			color: #fff;
			.top {
				height: 60%;
				display: flex;
				justify-content: center;
				align-items: center;
				> span {
					font-size: 45px;
					font-weight: 700;
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
				}
			}
			.bottom {
				height: 40%;
				display: flex;
				justify-content: center;
				align-items: center;
				button {
					margin-right: 10px;
					padding: 10px 15px;
					outline: 0;
					background-color: #67c23a;
					border-radius: 30px;
					color: #fff;
				}
			}
		}
	}
</style>
