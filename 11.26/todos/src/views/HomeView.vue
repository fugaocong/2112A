<template>
	<div>
		<div class="wrap">
			<div class="box">
				<div class="header">
					<div>
						<img
							src="https://www.todolist.cn/img/note.75134fb0.svg"
						/>
					</div>
					<div class="title">To-Do List</div>
				</div>
				<div class="form-field">
					<h1 class="title">~ Today I need to ~</h1>
					<div class="form-wrap">
						<div class="form-input">
							<input
								class="_input"
								type="text"
								autofocus
								placeholder="Add new todo..."
								v-model="input"
								@keydown.enter="add"
							/>
						</div>
						<button type="submit" class="submit-but" @click="add">
							<span>Submit</span>
						</button>
					</div>
				</div>
				<my-list
					:list="list"
					@toggle="toggle"
					v-if="list.length != 0"
					@del="del"
				></my-list>
				<footer class="options" v-if="list.length != 0">
					<span>{{ $store.getters.num }} item left</span>
					<div class="filters">
						<span

							class="option "
							@click="All"
							:class="i == 1 ? 'active' : ''"
							>All</span
						>
						<span
							class="option"
							@click="Active"
							:class="i == 2 ? 'active' : ''"
							v-if="
								$store.getters.flag == false &&
								$store.getters.status != false
							"
							>Active</span
						>
						<span
							class="option"
							@click="Completed"
							:class="i == 3 ? 'active' : ''"
							v-if="
								$store.getters.flag == false &&
								$store.getters.status != false
							"
							>Completed</span
						>
					</div>
					<span
						class="option"
						@click="Clear"
						:class="i == 4 ? 'active' : ''"
						v-if="$store.getters.status != false"
						>Clear completed</span
					>
				</footer>
				<my-footer v-if="list.length == 0"></my-footer>
			</div>
		</div>
	</div>
</template>

<script>
	import myList from '../components/myList.vue'
	import myFooter from '../components/myFooter.vue'
	export default {
		data() {
			return {
				input: '',
				i: 1,
			}
		},
		methods: {
			add() {
				if (this.input == '') {
					return false
				} else {
					this.$store.commit('add', this.input)
					this.input = ''
				}
			},
			toggle(val) {
				this.$store.commit('toggle', val)
			},
			del(val) {
				this.$store.commit('del', val)
			},
			All() {
				this.i = 1
			},
			Active() {
				this.i = 2

			},
			Completed() {
				this.i = 3
			},
			Clear() {
				this.i = 4
			},
		},
		created() {},
		mounted() {},
		components: { myList, myFooter },
		computed: {
			list() {
				return this.$store.state.list
			},
		},
		watch: {},
	}
</script>

<style lang="scss" scoped>
	@import url(https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,700,300);
	.wrap {
		color: #494a4b;
		line-height: 1.5;
		padding: 50px 0;
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background-image: linear-gradient(90deg, #ffafbd, #ffc3a0);
		background-repeat: no-repeat;
		.box {
			padding: 30px 40px 20px;
			text-align: center;
			width: 440px;
			max-width: 100%;
			margin: auto;
			border-radius: 15px;
			display: flex;
			flex-direction: column;
			background: #f2f2f2;
			.header {
				display: flex;
				justify-content: center;
				align-items: center;

				> div:nth-child(1) {
					width: 80px;
					margin-right: 10px;

					img {
						width: 100%;
						height: 100%;
					}
				}

				> :nth-child(2) {
					transform: rotate(3deg);
					font-size: 21px;
					padding: 5.25px 16.8px 3.15px;
					border-radius: 20% 5% 20% 5%/5% 20% 25% 20%;
					color: #fff;
					background: #fe7345;
					user-select: none;
				}
			}
			.form-field {
				margin-top: 25px;

				.title {
					font-size: 22px;
					margin-bottom: 18px;
				}

				.form-wrap {
					display: flex;
					justify-content: center;

					.form-input {
						display: inline-block;
						flex-grow: 0.65;
						margin-right: 15px;

						> input {
							outline: none;
							border: none;
							width: 100%;
							border-bottom: 3px dashed #fe7345;
							padding: 5px 0 3px;
							font-size: 18px;
							background: transparent;
						}
					}

					.submit-but {
						outline: none;
						border: none;
						position: relative;
						transform: rotate(4deg);
						border-radius: 6px;
						transition: transform 0.25s
							cubic-bezier(0.175, 0.885, 0.32, 1.275);
						background-color: transparent;
						cursor: pointer;

						> span {
							color: #000;
							position: relative;
							display: block;
							font-size: 16.5px;
							padding: 5.61px 13.86px;
							border: 2px solid #494a4b;
							border-radius: inherit;
							background-color: #fff;
						}
					}

					.submit-but::before {
						box-sizing: border-box;
						position: absolute;
						left: 0;
						top: 0;
						content: '';
						width: 100%;
						height: 100%;
						transform: scaleY(1.1);
						border: 1px solid #494a4b;
						border-radius: inherit;
						transform-origin: top;
						background-image: url(data:image/png;base64,R0lGODlhBAAEAIABAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjEgNjQuMTQwOTQ5LCAyMDEwLzEyLzA3LTEwOjU3OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NUY1OENCRDdDMDYxMUUyOTEzMEE1MEM5QzM0NDVBMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NUY1OENCRTdDMDYxMUUyOTEzMEE1MEM5QzM0NDVBMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk1RjU4Q0JCN0MwNjExRTI5MTMwQTUwQzlDMzQ0NUEzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk1RjU4Q0JDN0MwNjExRTI5MTMwQTUwQzlDMzQ0NUEzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAAQAsAAAAAAQABAAAAgYEEpdoeQUAOw==);
						background-color: #fe7345;
						transition: transform 0.25s
							cubic-bezier(0.175, 0.885, 0.32, 1.275);
					}
				}
			}
			.options {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: 100px;
				gap: 20px;

				.filters {
					display: flex;
					align-items: center;
					gap: 6px;
					.option {
						padding: 0 0.6em;
						border-radius: 4px;
						transition: all 60ms ease-out;
						cursor: pointer;
						-webkit-user-select: none;
						-moz-user-select: none;
						-ms-user-select: none;
						user-select: none;
					}
					
				}
                .active {
                    padding: 0 0.6em;
						border-radius: 4px;
						color: #fff;
						background-color: #fe7345;
					}
			}
		}
	}
</style>
