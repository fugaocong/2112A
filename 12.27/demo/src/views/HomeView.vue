<template>
	<div class="">
		<p>{{ point }}</p>
		<h3>横坐标{{ point.x }}</h3>
		<h3>纵坐标{{ point.y }}</h3>
	</div>
</template>

<script>
	import usePoint from '../hooks/usePoint';
	export default {
		setup(props, ctx) {
			const point = usePoint();
			return { point };
		},
	};
</script>

<style lang="scss" scoped></style>
