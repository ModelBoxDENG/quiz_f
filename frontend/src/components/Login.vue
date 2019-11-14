<template>

	<el-container class = "questionBox">
	  <el-main>
		  <div class="wrap" id="wrap">
		      <div class="logGet">
		  		<img alt="JCD logo" src="../assets/logo.png">
		          <div class="logD logDtip">
		              <p class="p1">Bus Audience Measurement</p>
		          </div>
		          <div class="lgD">
		              <p class="p2">Email</p>
					  <el-input
					    placeholder="Email..."
					    v-model="username"
					    clearable>
					  </el-input>
		          </div>
		          <div class="lgD">
		  			<p class="p2">Password</p>
		              <el-input placeholder="Enter password..." v-model="password" show-password></el-input>
		          </div>
		      </div>
          <footer class="questionFooter">

                <div class="logC">
                    <a><button @click="login">OK</button></a>
                </div>

	  			</footer>
		  </div>

	  </el-main>
	  <el-footer></el-footer>
	</el-container>
</template>

<script>
import Vue from '../../static/utils/vue.js';
export default {
  name:'login',
  data () {
    return {
      msg: 'login',
      username:'',
      password:'',
      newUser: {'id':1, 'user_name': 'weijie', 'user_email': 'asdasd@asdsa.com', },
    }
  },

  methods: {
    login() {
      // 假设登陆成功，则跳转到 index 组件
      this.$router.push({path:'/quiz'})
      //axios的get
      //var axios = this.$axios;

      this.getUsers();
      this.addUser();
      //this.getUsersById(1);
      //this.axios_get(axios);
      //this.axios_post(axios);

      /* axios.all([this.getUserAccount(axios), this.getUserPermissions(axios)])
        .then(axios.spread(function (acct, perms) {
          // 两个请求现在都执行完成
        })); */
    },
    getUsers: function() {
      let api_url = '/api/user/';
      if(this.search_term!==''||this.search_term!==null) {
        api_url = `/api/user/?search=${this.search_term}`
      }
      this.loading = true;
      this.$http.get(api_url)
          .then((response) => {
            console.log(response);
            this.loading = false;
          })
          .catch((err) => {
            this.loading = false;
            console.log(err);
          })
    },
    getUsersById: function(id) {
      this.loading = true;
      this.$http.get(`/api/user/${id}/`)
          .then((response) => {
            this.currentArticle = response.data;
            console.log(response);
            this.loading = false;
          })
          .catch((err) => {
            this.loading = false;
            console.log(err);
          })
    },

    addUser: function() {
      this.$http.post('/api/user/',this.newUser)
          .then((response) => {
            this.getUsers();
          })
          .catch((err) => {
            this.loading = true;
            console.log(err);
          })
    },

    axios_get(axios,url,data) {
      //let url=''
      axios.get('/user', {
          params: {
            username: 12345
          }
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    axios_post(axios,url,data) {
      //let url=''
      axios.post('/user', {
          firstName: 'Fred',
          lastName: 'Flintstone'
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    axios_double_get(axios) {
       axios.all([this.getUserAccount(axios), this.getUserPermissions(axios)])
         .then(axios.spread(function (acct, perms) {
           // 两个请求现在都执行完成
         }));
    },

    getUserAccount(axios) {
      return axios.get('/user/12345');
    },

    getUserPermissions(axios) {
      return axios.get('/user/12345/permissions');
    }



  },


}
</script>

<style scoped>
  @import '../assets/css.css';
.logGet .logD.logDtip .p1 {
        display: inline-block;
        font-size: 28px;
        margin-top: 30px;
        width: 100%;
    }
    #wrap .p2 {
      text-align:left;
    	width: 60%;
    	position: relative;

    	font-size: 16px;
    	margin-bottom: 5px;
    	margin-top: 30px;
    }

    .logC a button {
        width: 60%;
        height: 45px;
        background-color: #9C9A99;
        border: none;
        color: white;
        font-size: 18px;
        margin-top: 30px;
    }
</style>
