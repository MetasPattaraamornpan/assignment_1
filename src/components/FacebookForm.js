
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './Header'


const FBSDK = require('react-native-fbsdk');
const {
  LoginButton, AccessToken
} = FBSDK;

function initUser(token) {
  console.log('token>>>>>', token);
  try{

      fetch('https://graph.facebook.com/v2.5/me?fields=email,name,picture,birthday&access_token=' + token)
      .then((response) => response.json())
      .then((json) => {
        // Some user object has been set up somewhere, build that user here
        //let user = {};
        //user['name'] = json.name
        //user['id'] = json.id
        //user['user_friends'] = json.friends
        //user['email'] = json.email
        //user['username'] = json.name
        //user['loading'] = false
        //user['loggedIn'] = true
        //user['avatar'] = setAvatar(json.id)json
        console.log('user================', json);
      })
      .catch((error) => {
        console.log('ERROR GETTING DATA FROM FACEBOOK>>', error)
      })
  }catch(e){
    console.log('errrrrr', e);
  }
}

class FacebookForm extends Component {
  render() {
    return (
      <View>
        <Header title="Facebook" />
        <LoginButton
          publishPermissions={["publish_actions,user_birthday"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    const { accessToken } = data
                    initUser(accessToken)
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
      </View>
    );
  }
}

export default FacebookForm;