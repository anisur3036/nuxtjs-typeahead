<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h3>User Information</h3>
        <div class="card">
          <div class="card-body">
            <form @submit.prevent="addUser">
              <table class="table table-striped table-dark">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Selected</th>
                    <th scope="col">Bio</th>
                    <th scope="col">Add</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(user, index) in users" :key="index">
                    <td>
                      <div class="form-group">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          class="form-control form-control-sm"
                          placeholder="Your name"
                          v-model="user.name"
                        />
                      </div>
                    </td>
                    <td>
                      <div class="form-group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          class="form-control form-control-sm"
                          placeholder="Your email"
                          v-model="user.email"
                        />
                      </div>
                    </td>
                    <td>
                      <div class="form-group">
                        <select class="form-control form-control-sm" v-model="user.selected">
                          <option disabled value="#">Please select one</option>
                          <option>A</option>
                          <option>B</option>
                          <option>C</option>
                        </select>
                      </div>
                    </td>
                    <td>
                      <div class="form-group">
                        <input
                          type="text"
                          name="body"
                          id="body"
                          class="form-control form-control-sm"
                          placeholder="Your bio"
                          v-model="user.body"
                        />
                      </div>
                    </td>
                    <td>
                      <span class="btn btn-sm btn-primary" @click="addNewForm">+</span>
                    </td>
                    <td>
                      <span class="btn btn-sm btn-danger" @click="removeOne(index)">-</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button class="btn btn-primary pull-right">Save</button>
            </form>
          </div>
        </div>
        <pre class="lead">{{ users }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          name: "",
          email: "",
          body: "",
          selected: ""
        }
      ]
    };
  },
  methods: {
    addNewForm() {
      this.users.push({
        name: this.users.slice(-1).pop().name,
        email: this.users.slice(-1).pop().email,
        body: this.users.slice(-1).pop().body,
        selected: this.users.slice(-1).pop().selected
      });
    },
    removeOne(index) {
      if (this.users.length > 1) {
        this.users.splice(index, 1);
      } else {
        alert("Your from was cancel.");
        this.$router.push("/");
      }
    },
    async addUser() {
      // await this.$axios.$post("/user", this.users);
      // this.$router.push("/");
      console.log(this.users);
    }
  }
};
</script>

<style>
</style>