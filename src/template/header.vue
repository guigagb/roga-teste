<template>
	<div id="nav">
		<v-app-bar dark dense color="#f15e4c" class="full-width">
			<v-card elevation="0" class="d-flex nav-card full-height rounded-0 primary">
				<v-spacer></v-spacer>
				<v-card elevation="0" color="#fe6f5e" class="card-nav-user d-flex rounded-0 full-height">
					<div class="flex-grow-1 d-flex justify-center px-6">
						<v-list-item-avatar class="mr-4">
							<v-img :src="`http://www.reallatas.com.br/foto_funcionarios/05178918169.jpg`"></v-img>
						</v-list-item-avatar>
						<div class="flex-grow-1 d-flex flex-column align-start justify-center full-height">
							<label class="font-weight-medium">Guilherme</label>
							<span class="font-small">Último login: 01/01/2021</span>
						</div>
					</div>
					<v-btn elevation="0" color="#fe6f5e" height="100%" class="btn-options-user rounded-0">
						<v-icon>mdi mdi-menu-down</v-icon>
					</v-btn>
				</v-card>
			</v-card>
		</v-app-bar>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#nav {
	margin-top: 10px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav .nav-card {
	margin: 0px 90px 0px 60px;
	width: 100%;
}

#nav .nav-card .card-nav-user {
	width: 25%;
}

#nav .nav-card .card-nav-user .btn-options-user {
	border-left: 1px solid #6b6b6b3f !important;
}
</style>