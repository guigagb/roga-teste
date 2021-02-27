<template>
	<modal ref="modal" :title="title" :show="show">
		<template v-slot:content>
			<v-row>
				<v-col md="12">
					<v-text-field hide-details name="NOME" label="Nome"></v-text-field>
				</v-col>
				<v-col md="12">
					<v-text-field hide-details name="EMAIL" label="Email"></v-text-field>
				</v-col>
				<v-col md="6">
					<v-text-field hide-details name="IDADE" label="Idade"></v-text-field>
				</v-col>
				<v-col md="6">
					<v-text-field hide-details name="Telefone" label="Telefone"></v-text-field>
				</v-col>
			</v-row>
		</template>
		<template v-slot:actions>
			<v-btn small text color="error">Cancelar</v-btn>
			<v-spacer></v-spacer>
			<v-btn dense small color="primary" class="px-6">Salvar</v-btn>
		</template>
	</modal>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			title: "Cadastrar Aluno",
		};
	},
	methods: {
		open() {
			console.log("uii");
			this.show = true;
		},
	},
};
</script>

<style>
</style>