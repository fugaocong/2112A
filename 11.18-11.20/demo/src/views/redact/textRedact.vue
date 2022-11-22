<template>
	<div>
		<div class="quill">
			<h1>Vue-Quill-Editor</h1>
			<quill-editor v-model="content"></quill-editor>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				content: '<p>example content</p>',
			}
		},
		methods: {},
		created() {},
		mounted() {},
		components: {},
		computed: {},
		watch: {},
	}
</script>

<style lang="scss" scoped></style>
