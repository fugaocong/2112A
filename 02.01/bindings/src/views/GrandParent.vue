<template>
	<section>
		<parent
			name="grandParent"
			sex="男"
			age="88"
			hobby="code"
			@sayKnow="sayKnow"
		></parent>
	</section>
</template>

<script>
	import Parent from './Parent';
	export default {
		name: 'GrandParent',
		components: {
			Parent,
		},
		data() {
			return {};
		},
		methods: {
			sayKnow(val) {
				console.log(val);
			},
		},
		
	};
</script>
