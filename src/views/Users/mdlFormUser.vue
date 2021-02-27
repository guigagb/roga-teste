<template>
	<modal ref="modal" :title="title" :show="show" @close="close()">
		<template v-slot:content>
			<form ref="formUser" @submit.prevent="save">
				<v-row>
					<v-col class="form-group" md="12">
						<v-text-field v-model="user.id" v-show="false" name="ID"></v-text-field>
						<v-text-field v-model="user.nome" hide-details maxlength="60" name="NOME" label="Nome"></v-text-field>
					</v-col>
					<v-col md="12">
						<v-text-field v-model="user.email" maxlength="100" hide-details name="EMAIL" label="Email"></v-text-field>
					</v-col>
					<v-col md="6">
						<v-text-field v-model="user.idade" type="number" hide-details name="IDADE" label="Idade"></v-text-field>
					</v-col>
					<v-col md="6">
						<v-text-field
							type="tel"
							v-model="user.telefone"
							v-mask="'(##) #####-####'"
							hide-details
							name="Telefone"
							label="Telefone"
						></v-text-field>
					</v-col>
				</v-row>
			</form>
		</template>
		<template v-slot:actions>
			<v-btn @click="close()" small text color="error">Cancelar</v-btn>
			<v-spacer></v-spacer>
			<v-btn @click="save()" dense small color="primary" class="px-6">Salvar</v-btn>
		</template>
	</modal>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import { required, email } from "vuelidate/lib/validators";

export default {
	data() {
		return {
			show: false,
			title: "Cadastrar Aluno",
			user: {
				id: "",
				nome: "",
				email: "",
				idade: "",
				telefone: "",
			},
		};
	},
	computed: {
		...mapGetters("users", ["emptyUser"]),
	},
	methods: {
		...mapMutations("users", ["pushUser", "updateUser"]),
		...mapActions("users", ["getRandomPhotoUser", "getUserByID"]),
		async open(id) {
			this.show = true;

			if (id) {
				let user = await this.getUserByID(id);
				this.user = { ...user };
			} else {
				this.user = { ...this.emptyUser };
			}
		},
		save() {
			this.$v.$touch();
			if (this.$v.$error) return this.showError();

			if (this.user.id) this.update();
			else {
				this.insert();
			}
		},
		async insert() {
			this.user.id = new Date().toISOString();

			let foto = await this.getRandomPhotoUser();
			this.user.foto = foto.data.results[0].picture.thumbnail;

			this.pushUser(this.user);

			this.close();
		},
		update() {
			this.updateUser(this.user);

			this.close();
		},
		showError() {
			for (let param in this.$v.user.$params) {
				if (this.$v.user[param].required === false) {
					this.$notify({
						text: `O campo ${param} deve ser preenchido!`,
						type: "error",
					});
					return false;
				}

				if (this.$v.user[param].email === false) {
					this.$notify({
						text: `Informe um email válido!`,
						type: "error",
					});
					return false;
				}
			}
		},
		close() {
			this.show = false;
		},
	},
	validations: {
		user: {
			nome: {
				required,
			},
			email: {
				required,
				email,
			},
			idade: {
				required,
			},
			telefone: {
				required,
			},
		},
	},
};
</script>

<style>
.form-group {
	min-height: 60px;
}
</style>