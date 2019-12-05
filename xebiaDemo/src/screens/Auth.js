import React, { Component } from 'react';
import {
    View,
    SafeAreaView,
    TextInput,
    Text,
    TouchableOpacity,
    Alert
} from 'react-native';

import { connect } from 'react-redux';
import styles from '../Utils/gStyle'

import {BaseUrl, authUrl} from '../Const/URLConst'

import { doAuthenticateMethod } from '../ActionCreator/AuthenticateCreator';

class Auth extends Component {
  
    constructor(props) {
        super(props);

        this.state={
            userName:'',
            userDob:''
        }
    }

    UNSAFE_componentWillReceiveProps(props) {
        if (this.props.authResponse) {
            let user = this.props.authResponse[0]
            if ((this.state.userName === user.name) && (this.state.userDob === user.birth_year)) {
                setTimeout(() => {
                    this.props.navigation.navigate('NSearch');
                }, 200);
            } else {
                Alert.alert("Authentication error!!");
            }
        }
    }

    checkAuthValidation() {
        URL = BaseUrl+authUrl+this.state.userName
        this.props.doAuthenticateMethod(URL)
    }


    render() {
        return(
            <SafeAreaView
            style={{
                flex:1
            }}>
                <View
                style={{
                    flex: 1,
                    paddingHorizontal: 50,
                    justifyContent: 'center',
                }}>
                    <TextInput
                    style={[{height: 40, width: '100%', marginBottom: 20}, styles.border]}
                    placeholder="User name"
                    onChangeText={(text) => this.setState({userName: text})}
                    value={this.state.userName}/>

                    <TextInput
                    style={[{height: 40, width: '100%', marginBottom: 20}, styles.border]}
                    placeholder="DOB"
                    onChangeText={(text) => this.setState({userDob: text})}
                    value={this.state.userDob}/>

                    <TouchableOpacity
                    style={[
                        {
                            height: 40,
                            width: '100%',
                            marginBottom: 20,
                            backgroundColor: '#195F04',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }, 
                        styles.border]}
                    onPress={() => this.checkAuthValidation()}
                    >
                        <Text
                        style={{
                            color: 'white'
                        }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

// For dispatching an action
const mapDispatchToProps = dispatch => {
    return {
        doAuthenticateMethod: () => dispatch(doAuthenticateMethod(URL))
    }
};

// For accessing states from store
const mapStateToProps = state => {
    return {
    authResponse: state.AuthReducer.response.results,
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Auth);