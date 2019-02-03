<template>
    <div class="container">
        <div class="col-md-4 offset-4">
            <h3>User Registration</h3><hr/>
            <form @submit.prevent="login">
                <div class="form-group">
                    <label for="">Name</label>
                    <input type="email" class="form-control" v-model="user.name" placeholder="Full Name" required/>
                </div>
                <div class="form-group">
                    <label for="">Email Address</label>
                    <input type="email" class="form-control" v-model="user.email" placeholder="Email Address" required/>
                </div>
                <div class="form-group">
                    <label for="">Password</label>
                    <input type="password" class="form-control" v-model="user.password" placeholder="Password" required/>
                </div>
                <div class="form-group">
                    <label for="">Confirm Password</label>
                    <input type="password" class="form-control" v-model="user.password_confirmation" placeholder="Password Confirmation" required/>
                </div><hr/>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-lg">Register</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      user: {
        email: "",
        password: "",
        name: "",
        password_confirmation: ""
      },
      is_admin: false
    };
  },
  methods: {
    register: function() {
      let data = {
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
        is_admin: this.is_admin
      };
      this.$store
        .dispatch("register", data)
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

