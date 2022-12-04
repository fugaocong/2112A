<template>
	<div class="wrap">
		<my-child>
			<template>
				<h2>美食分类</h2>
			</template>
			<template #list>
				<ul>
					<li v-for="i in cate" :key="i.id">{{ i.name }}</li>
				</ul>
			</template>
		</my-child>

		<my-child title="游戏分类">
			<template #list>
				<ol>
					<li v-for="i in game" :key="i.id">{{ i.name }}</li>
				</ol>
			</template>
		</my-child>

		<my-child title="电影分类">
			<template #list>
					<h4 v-for="i in film" :key="i.id">{{ i.name }}</h4>
			</template>
		</my-child>
	</div>
</template>

<script>
	// import axios from 'axios'
	import cate from '../mock/cate.json'
	import film from '../mock/film.json'
	import game from '../mock/game.json'
	import myChild from '../components/myChild.vue'

	export default {
		data() {
			return {
				cate: [],
				film: [],
				game: [],
			}
		},
		methods: {
			getList() {
				if (cate.code == 200) {
					this.cate = cate.data
					// console.log(this.cate);
				}
				if (film.code == 200) {
					this.film = film.data
				}
				if (game.code == 200) {
					this.game = game.data
				}
			},
		},
		created() {
			this.getList()
		},
		mounted() {},
		components: { myChild },
		computed: {},
		watch: {},
	}
</script>

<style lang="scss" scoped>
	.wrap {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
</style>
