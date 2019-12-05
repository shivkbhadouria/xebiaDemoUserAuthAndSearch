import React, { Component } from 'react';
import {
    View,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';

import { doAuthenticateMethod } from '../ActionCreator/AuthenticateCreator';

class Search extends Component {
  
    constructor(props) {
        super(props);

        this.state={
            userName:'',
            userDob:''
        }
    }

    checkAuthValidation() {
        this.props.doAuthenticateMethod('URL')
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
                    style={{height: 40, width: '100%', marginBottom: 20}}
                    placeholder="User name"
                    onChangeText={(text) => this.setState({userName})}
                    value={this.state.userName}/>

                    <TextInput
                    style={{height: 40, width: '100%', marginBottom: 20}}
                    placeholder="DOB"
                    onChangeText={(text) => this.setState({userDob})}
                    value={this.state.userDob}/>

                    <TouchableOpacity
                    style={{height: 40, width: '100%', marginBottom: 20}}
                    onPress={() => this.checkAuthValidation()}
                    ></TouchableOpacity>
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


export default connect(mapStateToProps, mapDispatchToProps)(Search);