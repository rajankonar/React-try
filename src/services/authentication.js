var axios = require('axios');

/*var apiBaseUrl = "http://dev-dm8.pantheonsite.io/";*/
var apiBaseUrl = 'http://localhost:88/';

var headers = {
  'Content-Type': 'application/json'
}

var authentication = {

  isAuthenticated() {
      const csrf_token = localStorage.getItem('csrf_token');
      const logout_token = localStorage.getItem('logout_token');
      var user_json_obj = JSON.parse(localStorage.getItem('user'));
      var passdata = {
        'token': csrf_token
      }
      if (csrf_token) {
        console.log(csrf_token);
        //console.log(apiBaseUrl+'user/login_status?_format=json&token='+csrf_token);


        //return axios.get('http://localhost:88/user/login_status?_format=json&token=M3tgBOJR1N0_n9omID5bUp0BuKbumj9ZTD7IzLiE-5M', headers);
        return axios.get(apiBaseUrl + 'user/login_status?_format=json&token=' + csrf_token, headers);
      } else {
        return new Promise(function (resolve, reject) {
          reject();
        });
      }
    },

    login(name, pass, cb) {
      var passdata = {
          'name': 'admin',
          'pass': 'admin@123'
            /*'pass' : 'Pfizer@1234'*/
            /*'name' : name,
            'pass' : pass*/
        }
        //console.log(passdata);  
      const promise = axios.post(apiBaseUrl + 'user/login?_format=json', passdata, headers);
      this.handleAuth(promise, cb);
    },
    logout() {
      const logout_token = localStorage.getItem('logout_token');
      const csrf_token = localStorage.getItem('csrf_token');

      headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-CSRF-Token': csrf_token
      }

      localStorage.clear();
      // console.log(logout_token);http://example.com/user/logout
      //return axios.post(apiBaseUrl + '/user/logout?_format=json&token=' + csrf_token, headers);
      const promise = axios.post(apiBaseUrl + 'user/logout?_format=json', headers);
   //   return axios.post(apiBaseUrl + '/user/logout', headers);


    },
    handleAuth(promise, cb) {
      promise.then((resp) => {
        // console.log(resp);
        if (resp.data) {
          localStorage.setItem('csrf_token', resp.data.csrf_token);
          localStorage.setItem('logout_token', resp.data.logout_token);
          localStorage.setItem('user', JSON.stringify(resp.data.current_user));
          cb(true);
        }
      }).catch((error) => cb(false));
    }

}

module.exports = authentication;

/*  axios.get(apiBaseUrl + 'user/login?_format=json', payload)
    .then(function (response) {
      console.log(response);
      if (response.data.code == 200) {
        console.log("Login successfull");
        var uploadScreen = [];
        uploadScreen.push( < UploadScreen appContext = {
            self.props.appContext
          }
          />)
          self.props.appContext.setState({
            loginPage: [],
            uploadScreen: uploadScreen
          })
        } else if (response.data.code == 204) {
          console.log("Username password do not match");
          alert("username password do not match")
        } else {
          console.log("Username does not exists");
          alert("Username does not exist");
        }
    })
    .catch(function (error) {
      console.log(error);
    });
}*/



/*
var authentication = {

  isAuthenticated () {
    const token = localStorage.getItem('token');
    if(token) {
      return axios.get("http://localhost:3000/api/session", {headers: {"Authorization": token}});
    } else {
      return new Promise(function(resolve, reject){ reject(); });
    }
  },

  login (email, password, cb) {
    const promise = axios.post("http://localhost:3000/api/session", {email: email,
                                                                              password: password});
    this.handleAuth(promise, cb);
  },

  register (email, password, passwordConfirmation, cb) {
    const promise = axios.post("http://localhost:3000/api/users", {email: email,
                                                                   password: password,
                                                                   passwordConfirmation: passwordConfirmation});
    this.handleAuth(promise, cb);
  },

  logout () {
    const token = localStorage.getItem('token');
    localStorage.removeItem('token');
    axios.delete("http://localhost:3000/api/session", {headers: {"Authorization": token}});
    return true;
  },

  handleAuth (promise, cb) {
    promise.then((resp) => {
      if (resp.data.token) {
        localStorage.setItem('token', resp.data.token);
        cb(true);
      }
    }).catch((error) => cb(false));
  }

}*/