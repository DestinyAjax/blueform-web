<template>
    <div class="container">
        <div class="col-md-4 offset-4">
            <h3>User Login</h3><hr/>
            <form @submit.prevent="login">
                <div class="form-group">
                    <label for="">Email Address</label>
                    <input type="email" class="form-control" v-model="user.email" placeholder="Email Address" />
                </div>
                <div class="form-group">
                    <label for="">Password</label>
                    <input type="password" class="form-control" v-model="user.password" placeholder="Password" />
                </div><hr/>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-lg">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login: function() {
      let email = this.user.email;
      let password = this.user.password;
      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 80px;
}
</style>
