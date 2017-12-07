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