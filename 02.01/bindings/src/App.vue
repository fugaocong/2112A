<template>
	<div id="app">
		<nav>
			<router-link to="/">home</router-link>
			|
			<router-link to="/about">about</router-link>
			|
			<router-link to="/EventBus">event</router-link>
			|
			<router-link to="/router">router</router-link>
			|
			<router-link to="/ref">ref</router-link>
			|
			<router-link to="/provide">provide</router-link>
			|
			<router-link to="/GrandParent">GrandParent</router-link>
			|
			<router-link to="/vuex">vuex</router-link>
			|
		</nav>
		<router-view />
	</div>
</template>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	nav {
		padding: 30px;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>
