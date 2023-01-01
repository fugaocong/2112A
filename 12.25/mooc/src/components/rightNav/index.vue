<template>
	<div class="wrap">
		<ul >
			<li style="background-color: #8f9daa">ALL</li>
			<li>北京</li>
			<li>上海</li>
			<li>深圳</li>
			<li>杭州</li>
			<li>南京</li>
			<li>武汉</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
	};
</script>

<style lang="scss" scoped>
.wrap{
    width: 100%;
    height: 100%;
}
	ul {
        width: 100%;
		display: flex;
		height: 100%;
		font-size: 12px;
		font-weight: 900;
		background-color: #353941;
		color: gray;
		li {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
            height: 100%;
		}
	}
</style>
