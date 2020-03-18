<template>
  <div class="about">
    <h1>Sign In</h1>
    <form @submit="onSubmit">
      <input type="text" name="email" v-model="email" id />
      <input type="text" name="password" v-model="password" id />
      <button type="submit">Sign In</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Signin",
  data() {
    return {
      email: "datn@gmail.com",
      password: "12345678"
    };
  },
  methods: {
    ...mapActions(["signin"]),
    onSubmit: e => {
      e.preventDefault();
      this.signin({ email: this.email, password: this.password });
    }
  },
  created() {
    this.signin({ email: this.email, password: this.password });
  }
};
</script>
