<template>
<div style = "background-image: url(../assets/background_of_1.jpg)">
	<el-container class = "questionBox">
    <div v-show = "!ready">
      <el-main>
        <div class="wrap" id="wrap">
            <div class="logGet" style="text-align: center;">
              <img alt="JCD logo" src="../assets/JCD logo.png" style = "margin-top: 50px;">
              <div class="logD logDtip"
                  v-show = "!showLog"
                  style="text-align: center;padding-left:30px;padding-right:30px" >
                  <div class="box" style="margin-top:20px">
                      <p>DOOH Glossary Quiz</p>
                      <p>Please select the correct answers
                     from given choices and the number of correct</br>
                     choices may be more than one. </br>Chances can be
                     given until the correct choices are made.</br>
                      </p>
                  </div>
              </div>

              <div v-show = "showLog" style = "background-color: white; margin-top:60px;width: 320px;">
                  <div class="lgD" >
                    <p class="p2">Email</p>
                    <el-input
                      placeholder="Email..."
                      v-model="username"
                      clearable>
                    </el-input>
                  </div>
                  <div class="lgD">
                    <p class="p2">Password</p>
                    <el-input
                    placeholder="Enter password..."
                    v-model="password"
                    show-password>
                    </el-input>
                  </div>
                  <a><div
                    @click="showReady()"
                    style = "color:white;
                      background: #01D7BD;
                      width: 100%;
                      height:30px;
                      font-size:15px;
                      text-align: center;
                      vertical-align:middle;
                      padding-top: 5px;
                      ">
                  Login
                  </div></a>

              </div>

            </div>
            <footer class="questionFooter">

              <div v-show = "!showLog">
                  <p style = "color:white;font-size: 25px; font-family:Lato;margin-top: 80px;">
                    <strong>DATA</strong>Dev
                  </p>
                  <div class="logC" >
                      <a><button
                          @click="showLogin"
                          style = "color:white;
                            background: linear-gradient(to right,#B62878, #EC9759);
                            border-radius:15px;
                            width:150px;
                            height:30px;
                            font-size:15px;
                            ">
                        Login
                        </button>
                      </a>
                  </div>
              </div>

        <div v-show = "showLog"
        style = "color:whitesmoke;vertical-align: bottom;bottom=0;height:110px">
        </div>

            </footer>
        </div>

      </el-main>
      <el-footer>
        <div style = "color:whitesmoke;vertical-align: bottom;bottom=0;margin=-10px">

        </div>
      </el-footer>

    </div>

    <div v-show = "ready"
      style = "background: linear-gradient(#2CADFE, #9A1AAD);height:620px;width:100%" >
        <p style = "color:#66FFFF; font-size:28px; 
        text-shadow: 5px 5px 5px #FF0000;
        margin-top:200px;margin-bottom:200px;">Get Ready</p>
        <a><button
            @click="login"
            style = "color:white;
              background: linear-gradient(to right,#B62878, #EC9759);
              border-radius:15px;
              width:150px;
              height:30px;
              font-size:15px;
              ">
          Start
          </button>
        </a>
    </div>
	</el-container>
</div>
</template>

<script>
import Vue from '../../static/utils/vue.js';
// style = "background-image: url(../assets/background_of_1.jpg)"
export default {
  name:'login',
  data () {
    return {
      msg: 'login',
      username:'',
      password:'',
      newUser: {'id':1, 'user_name': 'weijie', 'user_email': 'asdasd@asdsa.com', },
      showLog:false,
      ready:false,
    }
  },

  methods: {
    showLogin(){
      this.showLog = true;
    },
    showReady(){
      this.ready = true;

    },
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
        font-size: 20px;
        margin-top: 70px;
        width: 100%;
        color:white;
    }
    #wrap .p2 {
      text-align:left;
    	width: 50%;
    	position: relative;
      color:#495060;
    	font-size: 12px;
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
        margin-top: 0 px;
    }
.lgD{
  padding:10px;
}

    @keyframes  ani{
        0%{  opacity:0; }
        100%{ opacity:1; }
    }
    .box p{
      color:white
    }
    .box p:nth-child(1){
      display: inline-block;
        font-size: 20px;
        margin-top: 70px;
        width: 100%;
        color:white;
       animation: ani 0.5s both;
    }
    .box p:nth-child(2){
       animation: ani 0.5s 0.5s both;
    }
    .box p:nth-child(3){
       animation: ani 0.5s 0.5s both;
    }
    p{
      font-family: "Lato";
    }
</style>
