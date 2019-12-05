import React, { Component } from 'react';
import {
    View,
    SafeAreaView,
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
                }}>
                    
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