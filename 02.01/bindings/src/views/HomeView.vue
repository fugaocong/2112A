<template>
	<div class="parent">
		父传子：
		<Children :msg="message"></Children>
	</div>
</template>

<script>
	import Children from '../components/homeChild';

	export default {
		name: 'Parent',
		components: {
			Children,
		},
		data() {
			return {
				message: 'hello world',
			};
		},
	};
</script>
