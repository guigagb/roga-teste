<template>
	<div class="users">
		<v-row>
			<v-col md="3" sm="12" cols="12">
				<v-text-field
					v-model="searchValue"
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
						<v-select
							dense
							hide-details
							solo
							:return-object="false"
							:items="itemsFilter"
							v-model="itemFilter"
						></v-select>
					</v-col>
					<v-col md="4">
						<v-btn @click="openModalUser()" dense color="primary">
							<v-icon class="mr-2">mdi mdi-account-plus</v-icon>
							<span class="bold">Novo Aluno</span>
						</v-btn>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
		<v-row class="container-cards-user mt-12">
			<v-col
				md="3"
				sm="6"
				cols="12"
				v-for="user in usersFiltered"
				:key="user.id"
				class="container-card-user"
			>
				<v-card class="card-user">
					<v-card-text>
						<div class="d-flex">
							<div>
								<v-list-item-avatar class="mr-4">
									<v-img :src="`${user.foto}`"></v-img>
								</v-list-item-avatar>
							</div>
							<div class="d-flex flex-column align-start align-self-center">
								<label class="bold">{{user.nome}}</label>
								<span class="mt-1 font-small">Última avaliação: 12/10/2019</span>
							</div>
						</div>
					</v-card-text>
					<v-divider></v-divider>
					<v-card-actions>
						<div class="d-flex flex-column align-start mr-2">
							<div>{{user.email}}</div>
							<div class="d-flex">
								<div class="mr-2">{{user.idade}} anos</div>
								<div>{{user.telefone}}</div>
							</div>
						</div>
						<v-spacer></v-spacer>
						<div>
							<v-btn
								:disabled="user.ativo == 0"
								@click="openModalUser(user.id)"
								class="mr-1"
								fab
								elevation="1"
								small
							>
								<v-icon color="primary">mdi mdi-pencil</v-icon>
							</v-btn>
							<v-menu offset-y>
								<template v-slot:activator="{ on, attrs }">
									<v-btn :disabled="user.ativo == 0" fab elevation="1" v-bind="attrs" v-on="on" small>
										<v-icon color="primary">mdi mdi-dots-horizontal</v-icon>
									</v-btn>
								</template>
								<v-list>
									<v-list-item @click="disableUser(user)">
										<v-list-item-title>Desativar</v-list-item-title>
									</v-list-item>
								</v-list>
							</v-menu>
						</div>
					</v-card-actions>
				</v-card>
			</v-col>
			<v-col v-if="users.length == 0" md="12">
				<span>Não há alunos cadastrados :(</span>
			</v-col>
			<v-col v-if="users.length != 0 && usersFiltered.length == 0" md="12">
				<span>Não há alunos com os critérios de busca utilizado :(</span>
			</v-col>
		</v-row>
		<mdlForm ref="mdlFormUser" />
	</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import mdlForm from "./mdlFormUser.vue";

export default {
	components: { mdlForm },
	data() {
		return {
			itemFilter: undefined,
			itemsFilter: [
				{ text: "Todos", value: "T" },
				{ text: "Ativos", value: "1" },
				{ text: "Inativos", value: "0" },
			],
			searchValue: "",
		};
	},
	computed: {
		...mapGetters("users", ["users"]),
		usersFiltered() {
			return this.users.filter((user) => {
				let canReturn = true;

				// filtro pelo status (ativo / inativo / todos)
				if (this.itemFilter != "T" && user.ativo != this.itemFilter) {
					canReturn = false;
				}

				// filtro pelo nome ou email
				let searchValue = this.searchValue.trim().toUpperCase();
				if (searchValue != "") {
					let nome = user.nome.toUpperCase();
					let email = user.email.toUpperCase();

					if (nome.indexOf(searchValue) == -1 && email.indexOf(searchValue) == -1) canReturn = false;
				}

				return canReturn;
			});
		},
	},
	methods: {
		...mapMutations("users", ["updateUser"]),
		openModalUser(id) {
			this.$refs.mdlFormUser.open(id);
		},
		disableUser(user) {
			this.updateUser({ ...user, ativo: 0 });
		},
	},
	async mounted() {
		this.itemFilter = this.itemsFilter[0].value;
	},
};
</script>

<style lang="sass">
.users .container-cards-user .container-card-user
	padding: 10px
</style>