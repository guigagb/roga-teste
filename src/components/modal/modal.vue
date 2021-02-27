<template>
	<v-dialog id="componente-modal" v-model="showModel" width="500">
		<v-card>
			<v-card-title class="modal-title">{{title}}</v-card-title>

			<v-card-text class="modal-text">
				<slot name="content"></slot>
			</v-card-text>

			<v-divider></v-divider>

			<v-card-actions class="pa-4">
				<slot name="actions"></slot>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	props: ["show", "title"],
	data() {
		return {
			value: Boolean,
		};
	},
	computed: {
		showModel: {
			get: function () {
				return this.show;
			},
			set: function (value) {
				if (!value) {
					this.$emit("close", {});
				}
			},
		},
	},
};
</script>

<style lang="sass">
.v-card__title.modal-title
	background: #0D47A1
	color: #fff !important
.v-card__text.modal-text
	padding: 10px 20px 35px 20px !important
</style>