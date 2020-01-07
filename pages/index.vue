<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-title">User Collection</div>
          <form role="form" @submit.prevent="addUser">
            <div class="panel-body" v-for="(user, index) in users" :key="index">
              <div class="form-container">
                <h3>
                  User Info {{index}}
                  <span class="pull-right" @click="addNewUser">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 490 498"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M245 0C109.701 0 0 111.492 0 249C0 386.508 109.701 498 245 498C380.299 498 490 386.508 490 249C490 111.492 380.299 0 245 0ZM367.5 280.125H275.625V373.5H214.375V280.125H122.5V217.875H214.375V124.5H275.625V217.875H367.5V280.125Z"
                        fill="green"
                      />
                    </svg>
                  </span>
                  <span class="pull-right" @click="removeUser(index)">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 496 496"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M248 0C111 0 0 111 0 248C0 385 111 496 248 496C385 496 496 385 496 248C496 111 385 0 248 0ZM116 288C109.4 288 104 282.6 104 276V220C104 213.4 109.4 208 116 208H380C386.6 208 392 213.4 392 220V276C392 282.6 386.6 288 380 288H116Z"
                        fill="red"
                      />
                    </svg>
                  </span>
                </h3>
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    class="form-control"
                    placeholder="Your name"
                    v-model="user.name"
                  />
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    class="form-control"
                    placeholder="Your email"
                    v-model="user.email"
                  />
                </div>
                <div class="form-group">
                  <label for="body">Body</label>
                  <textarea
                    id="body"
                    class="form-control"
                    rows="3"
                    required="required"
                    v-model="user.body"
                  ></textarea>
                </div>
              </div>
            </div>
            <button type="submit" class="btn btn-primary pull-right">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Typeahead from '@/components/Typeahead.vue'

export default {
  data() {
    return {
      users: [
        {
          name: '',
          email: '',
          body: ''
        }
      ],
      postUsers: []
    }
  },
  methods: {
    addNewUser() {
      this.users.push({
        name: '',
        email: '',
        body: ''
      })
    },
    removeUser(index) {
      if (this.users.length > 1) {
        this.users.splice(index, 1)
      } else {
        alert('Your registration was cancel')
      }
    },

  	async addUser() {
      await this.$axios.$post(`/user`, this.users)
      this.$router.push("/users/1");
  	},
    async addUser() {
      await this.$axios.$post(`/user`, this.users)
      this.$router.push('/users/1');
    }
  }
}
</script>	

<style lang="scss">
// @import url('http://cdn.test/bootstrap.min.css');
</style>
