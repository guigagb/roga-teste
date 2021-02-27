<template>
	<div class="users">
		<v-row>
			<v-col md="3" sm="12" cols="12">
				<v-text-field
					dense
					hide-details
					solo
					append-icon="mdi mdi-magnify"
					placeholder="Busque por nomes ou emails"
				></v-text-field>
			</v-col>
			<v-col md="4"></v-col>
			<v-col md="5" sm="12" cols="12" class="d-flex align-end">
				<v-row>
					<v-col md="8" class="d-flex align-center">
						<label class="font-weight-bold mr-3">Filtro:</label>
						<v-select dense hide-details solo :items="itemsFilter" v-model="itemFilter"></v-select>
					</v-col>
					<v-col md="4">
						<v-btn dense color="primary">
							<v-icon class="mr-2">mdi mdi-account-plus</v-icon>
							<span class="bold">Novo Aluno</span>
						</v-btn>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
		<v-row class="container-cards-user mt-12">
			<v-col md="3" sm="6" cols="12" v-for="i in 8" :key="i" class="container-card-user">
				<v-card class="card-user">
					<v-card-text>
						<div class="d-flex">
							<div>
								<v-list-item-avatar class="mr-4">
									<v-img :src="`http://www.reallatas.com.br/foto_funcionarios/05178918169.jpg`"></v-img>
								</v-list-item-avatar>
							</div>
							<div class="d-flex flex-column align-start align-self-center">
								<label class="bold">Nome do Usuário</label>
								<span class="mt-1 font-small">Última avaliação: 12/10/2019</span>
							</div>
						</div>
					</v-card-text>
					<v-divider></v-divider>
					<v-card-actions>
						<div class="d-flex flex-column align-start mr-2">
							<div>guilherme@gmail.com</div>
							<div class="d-flex">
								<div class="mr-2">26 anos</div>
								<div>(61) 98309-0055</div>
							</div>
						</div>
						<v-spacer></v-spacer>
						<div>
							<v-btn class="mr-1" fab elevation="1" small>
								<v-icon color="primary">mdi mdi-pencil</v-icon>
							</v-btn>
							<v-btn fab elevation="1" small>
								<v-icon color="primary">mdi mdi-dots-horizontal</v-icon>
							</v-btn>
						</div>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
		<mdlForm ref="mdlFormUser" />
	</div>
</template>

<script>
import mdlForm from "./mdlForm.vue";

export default {
	components: { mdlForm },
	data() {
		return {
			itemFilter: undefined,
			itemsFilter: [
				{ text: "Todos", value: "T" },
				{ text: "Ativos", value: "A" },
				{ text: "Inativos", value: "I" },
			],
		};
	},
	async mounted() {
		this.itemFilter = this.itemsFilter[0];
		this.$refs.mdlFormUser.open();
	},
};
</script>

<style lang="sass">
.users

.users .container-cards-user

.users .container-cards-user .container-card-user
	padding: 10px
</style>