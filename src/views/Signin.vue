<template>
	<div class="about">
		<h1>Sign In</h1>
		<form @submit="onSubmit">
			<input type="text" name="email" v-model="email" id="email" />
			<input type="password" name="password" v-model="password" id="password" />
			<button type="submit">Sign In</button>
		</form>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from "vuex";
	export default {
		name: "Signin",
		data() {
			return {
				email: "",
				password: ""
			};
		},
		methods: {
			...mapActions(["signin"]),
			async onSubmit(e) {
				e.preventDefault();
				await this.signin({ email: this.email, password: this.password });
				if (this.message == "success") this.$router.push({ name: "Home" });
			}
		},
		computed: {
			...mapGetters(["message"])
		}
	};
</script>
