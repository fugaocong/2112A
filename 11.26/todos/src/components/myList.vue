<template>
	<div>
		<ul class="todos">
			<li
				:class="
					item.status == false ? 'todos-item' : 'todos-item completed'
				"
				v-for="item in list"
				:key="item.id"
			>
				<button
					:class="item.status == false ? 'checkbox-btn' : 'check-btn'"
                    @click="toggle(item)"
				>
					<div class="checkbox" v-if="item.status == false"></div>
					<svg
						v-else
						class="svg-inline--fa fa-check fa-w-16 check"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="check"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						data-v-132cabf7=""
					>
						<path
							class=""
							fill="currentColor"
							d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
						></path>
					</svg>
				</button>
				<p class="content">{{ item.input }}</p>
				<button @click="del(item)" class="close-btn" :style="item.status==false? '':'color:#fff' "><svg
					class="svg-inline--fa fa-times fa-w-11 close"
					aria-hidden="true"
					focusable="false"
					data-prefix="fas"
					data-icon="times"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 352 512"
					data-v-132cabf7=""
				>
					<path
						class=""
						fill="currentColor"
						d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
					></path>
				</svg></button>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			list: Array,
		},
		data() {
			return {}
		},
		methods: {
            toggle(item){
                this.$emit('toggle', item)
            },
            del(item){
                this.$emit("del",item)
            }
        },
		created() {},
		mounted() {},
		components: {},
		computed: {},
		watch: {},
	}
</script>

<style lang="scss" scoped>
	.todos {
		margin-top: 40px;
		perspective: 350px;

		.todos-item {
			display: flex;
			align-items: center;
			padding: 8px 10px 8px 0;
			border-radius: 5px;
			cursor: pointer;
			margin-top: 10px;

			.checkbox-btn {
				outline: none;
				border: none;
				padding: 0 8px;
				background-color: transparent;

				.checkbox {
					padding: 5px;
					border-radius: 2px;
					border: 2px solid #494a4b;
				}
			}

			.content {
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
				padding-right: 7px px;
			}

			.close-btn {
				outline: none;
				border: none;
				margin: 0 -8px 0 auto;
				padding: 0 8px;
				background-color: transparent;
				cursor: pointer;
			}
		}

		.completed {
			background-color: #fe7345;
			animation: flipInX-132cabf7 0.75s ease-in-out both;
			text-decoration: line-through;
			color: #fff;
		}

		.check-btn {
			font-size: 14px;
			color: #fff;
			outline: none;
			border: none;
			background-color: transparent;
			padding: 0 8px;
		}
	}

	svg:not(:root).svg-inline--fa {
		overflow: visible;
	}

	.svg-inline--fa {
		display: inline-block;
		font-size: inherit;
		height: 1em;
		overflow: visible;
		vertical-align: -0.125em;
	}

	.svg-inline--fa.fa-lg {
		vertical-align: -0.225em;
	}

	.svg-inline--fa.fa-w-1 {
		width: 0.0625em;
	}

	.svg-inline--fa.fa-w-2 {
		width: 0.125em;
	}

	.svg-inline--fa.fa-w-3 {
		width: 0.1875em;
	}

	.svg-inline--fa.fa-w-4 {
		width: 0.25em;
	}

	.svg-inline--fa.fa-w-5 {
		width: 0.3125em;
	}

	.svg-inline--fa.fa-w-6 {
		width: 0.375em;
	}

	.svg-inline--fa.fa-w-7 {
		width: 0.4375em;
	}

	.svg-inline--fa.fa-w-8 {
		width: 0.5em;
	}

	.svg-inline--fa.fa-w-9 {
		width: 0.5625em;
	}

	.svg-inline--fa.fa-w-10 {
		width: 0.625em;
	}

	.svg-inline--fa.fa-w-11 {
		width: 0.6875em;
	}

	.svg-inline--fa.fa-w-12 {
		width: 0.75em;
	}

	.svg-inline--fa.fa-w-13 {
		width: 0.8125em;
	}

	.svg-inline--fa.fa-w-14 {
		width: 0.875em;
	}

	.svg-inline--fa.fa-w-15 {
		width: 0.9375em;
	}

	.svg-inline--fa.fa-w-16 {
		width: 1em;
	}

	.svg-inline--fa.fa-w-17 {
		width: 1.0625em;
	}

	.svg-inline--fa.fa-w-18 {
		width: 1.125em;
	}

	.svg-inline--fa.fa-w-19 {
		width: 1.1875em;
	}

	.svg-inline--fa.fa-w-20 {
		width: 1.25em;
	}

	.svg-inline--fa.fa-pull-left {
		margin-right: 0.3em;
		width: auto;
	}

	.svg-inline--fa.fa-pull-right {
		margin-left: 0.3em;
		width: auto;
	}

	.svg-inline--fa.fa-border {
		height: 1.5em;
	}

	.svg-inline--fa.fa-li {
		width: 2em;
	}

	.svg-inline--fa.fa-fw {
		width: 1.25em;
	}

	.fa-layers svg.svg-inline--fa {
		bottom: 0;
		left: 0;
		margin: auto;
		position: absolute;
		right: 0;
		top: 0;
	}

	.fa-layers {
		display: inline-block;
		height: 1em;
		position: relative;
		text-align: center;
		vertical-align: -0.125em;
		width: 1em;
	}

	.fa-layers svg.svg-inline--fa {
		-webkit-transform-origin: center center;
		transform-origin: center center;
	}

	.fa-layers-counter,
	.fa-layers-text {
		display: inline-block;
		position: absolute;
		text-align: center;
	}

	.fa-layers-text {
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		-webkit-transform-origin: center center;
		transform-origin: center center;
	}

	.fa-layers-counter {
		background-color: #ff253a;
		border-radius: 1em;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		color: #fff;
		height: 1.5em;
		line-height: 1;
		max-width: 5em;
		min-width: 1.5em;
		overflow: hidden;
		padding: 0.25em;
		right: 0;
		text-overflow: ellipsis;
		top: 0;
		-webkit-transform: scale(0.25);
		transform: scale(0.25);
		-webkit-transform-origin: top right;
		transform-origin: top right;
	}

	.fa-layers-bottom-right {
		bottom: 0;
		right: 0;
		top: auto;
		-webkit-transform: scale(0.25);
		transform: scale(0.25);
		-webkit-transform-origin: bottom right;
		transform-origin: bottom right;
	}

	.fa-layers-bottom-left {
		bottom: 0;
		left: 0;
		right: auto;
		top: auto;
		-webkit-transform: scale(0.25);
		transform: scale(0.25);
		-webkit-transform-origin: bottom left;
		transform-origin: bottom left;
	}

	.fa-layers-top-right {
		right: 0;
		top: 0;
		-webkit-transform: scale(0.25);
		transform: scale(0.25);
		-webkit-transform-origin: top right;
		transform-origin: top right;
	}

	.fa-layers-top-left {
		left: 0;
		right: auto;
		top: 0;
		-webkit-transform: scale(0.25);
		transform: scale(0.25);
		-webkit-transform-origin: top left;
		transform-origin: top left;
	}

	.fa-lg {
		font-size: 1.3333333333em;
		line-height: 0.75em;
		vertical-align: -0.0667em;
	}

	.fa-xs {
		font-size: 0.75em;
	}

	.fa-sm {
		font-size: 0.875em;
	}

	.fa-1x {
		font-size: 1em;
	}

	.fa-2x {
		font-size: 2em;
	}

	.fa-3x {
		font-size: 3em;
	}

	.fa-4x {
		font-size: 4em;
	}

	.fa-5x {
		font-size: 5em;
	}

	.fa-6x {
		font-size: 6em;
	}

	.fa-7x {
		font-size: 7em;
	}

	.fa-8x {
		font-size: 8em;
	}

	.fa-9x {
		font-size: 9em;
	}

	.fa-10x {
		font-size: 10em;
	}

	.fa-fw {
		text-align: center;
		width: 1.25em;
	}

	.fa-ul {
		list-style-type: none;
		margin-left: 2.5em;
		padding-left: 0;
	}

	.fa-ul > li {
		position: relative;
	}

	.fa-li {
		left: -2em;
		position: absolute;
		text-align: center;
		width: 2em;
		line-height: inherit;
	}

	.fa-border {
		border: solid 0.08em #eee;
		border-radius: 0.1em;
		padding: 0.2em 0.25em 0.15em;
	}

	.fa-pull-left {
		float: left;
	}

	.fa-pull-right {
		float: right;
	}

	.fa.fa-pull-left,
	.fas.fa-pull-left,
	.far.fa-pull-left,
	.fal.fa-pull-left,
	.fab.fa-pull-left {
		margin-right: 0.3em;
	}

	.fa.fa-pull-right,
	.fas.fa-pull-right,
	.far.fa-pull-right,
	.fal.fa-pull-right,
	.fab.fa-pull-right {
		margin-left: 0.3em;
	}

	.fa-spin {
		-webkit-animation: fa-spin 2s infinite linear;
		animation: fa-spin 2s infinite linear;
	}

	.fa-pulse {
		-webkit-animation: fa-spin 1s infinite steps(8);
		animation: fa-spin 1s infinite steps(8);
	}

	@-webkit-keyframes fa-spin {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}

		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}

	@keyframes fa-spin {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}

		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}

	.fa-rotate-90 {
		-ms-filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=1)';
		-webkit-transform: rotate(90deg);
		transform: rotate(90deg);
	}

	.fa-rotate-180 {
		-ms-filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=2)';
		-webkit-transform: rotate(180deg);
		transform: rotate(180deg);
	}

	.fa-rotate-270 {
		-ms-filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)';
		-webkit-transform: rotate(270deg);
		transform: rotate(270deg);
	}

	.fa-flip-horizontal {
		-ms-filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)';
		-webkit-transform: scale(-1, 1);
		transform: scale(-1, 1);
	}

	.fa-flip-vertical {
		-ms-filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)';
		-webkit-transform: scale(1, -1);
		transform: scale(1, -1);
	}

	.fa-flip-both,
	.fa-flip-horizontal.fa-flip-vertical {
		-ms-filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)';
		-webkit-transform: scale(-1, -1);
		transform: scale(-1, -1);
	}

	:root .fa-rotate-90,
	:root .fa-rotate-180,
	:root .fa-rotate-270,
	:root .fa-flip-horizontal,
	:root .fa-flip-vertical,
	:root .fa-flip-both {
		-webkit-filter: none;
		filter: none;
	}

	.fa-stack {
		display: inline-block;
		height: 2em;
		position: relative;
		width: 2.5em;
	}

	.fa-stack-1x,
	.fa-stack-2x {
		bottom: 0;
		left: 0;
		margin: auto;
		position: absolute;
		right: 0;
		top: 0;
	}

	.svg-inline--fa.fa-stack-1x {
		height: 1em;
		width: 1.25em;
	}

	.svg-inline--fa.fa-stack-2x {
		height: 2em;
		width: 2.5em;
	}

	.fa-inverse {
		color: #fff;
	}

	.sr-only {
		border: 0;
		clip: rect(0, 0, 0, 0);
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
		width: 1px;
	}

	.sr-only-focusable:active,
	.sr-only-focusable:focus {
		clip: auto;
		height: auto;
		margin: 0;
		overflow: visible;
		position: static;
		width: auto;
	}

	.svg-inline--fa .fa-primary {
		fill: var(--fa-primary-color, currentColor);
		opacity: 1;
		opacity: var(--fa-primary-opacity, 1);
	}

	.svg-inline--fa .fa-secondary {
		fill: var(--fa-secondary-color, currentColor);
		opacity: 0.4;
		opacity: var(--fa-secondary-opacity, 0.4);
	}

	.svg-inline--fa.fa-swap-opacity .fa-primary {
		opacity: 0.4;
		opacity: var(--fa-secondary-opacity, 0.4);
	}

	.svg-inline--fa.fa-swap-opacity .fa-secondary {
		opacity: 1;
		opacity: var(--fa-primary-opacity, 1);
	}

	.svg-inline--fa mask .fa-primary,
	.svg-inline--fa mask .fa-secondary {
		fill: black;
	}

	.fad.fa-inverse {
		color: #fff;
	}
</style>
