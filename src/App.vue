<template>
	<div id="app">
		<v-app class="d-flex">
			<Header />
			<div class="content">
				<router-view />
			</div>
		</v-app>
	</div>
</template>

<script>
import Header from "@/template/header.vue";

export default {
	components: { Header },
};
</script>

<style lang="sass">
@import './styles/styles.sass'

html
	overflow: hidden

#app
	font-family: Roboto, Avenir, Helvetica, Arial, sans-serif
	-webkit-font-smoothing: antialiased
	-moz-osx-font-smoothing: grayscale
	text-align: center
	color: #2c3e50
	height: 100vh

#app .content
	overflow-y: scroll
	padding: 40px 120px 0px 120px
</style>
