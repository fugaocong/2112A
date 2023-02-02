<template>
	<div>
		<button @click="add">vuex传参</button>
		<vuexChild />
	</div>
</template>

<script>
	import vuexChild from '../components/vuexChild';
	export default {
		data() {
			return {};
		},
		methods: {
			add() {
				this.$store.commit('add', 'vuex传参');
			},
		},
		components: {
			vuexChild,
		},
	};
</script>

<style lang="scss" scoped></style>
