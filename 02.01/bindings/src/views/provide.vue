<template>
	<div class="parent">
		<Children></Children>
	</div>
</template>

<script>
	import Children from '../components/provideChild';

	export default {
		name: 'Parent',
		components: {
			Children,
		},
		data() {
			return {
				name: 'dan_seek',
			};
		},
		provide: function () {
			return {
				getName: this.name,
			};
		},
	};
</script>
