import React, { Component } from 'react';
import {
    View,
    SafeAreaView,
    FlatList,
    Text,
    TextInput
} from 'react-native';

import { connect } from 'react-redux';
import {BaseUrl, planet, searchPlanets} from '../Const/URLConst'
import { getPlanetsList } from '../ActionCreator/searchCreator';
import styles from '../Utils/gStyle'

class Search extends Component {
  
    constructor(props) {
        super(props);
        this.state={
            searchText: ''
        }
    }

    UNSAFE_componentWillMount() {
        URL = BaseUrl+planet
       this.props.getPlanetsList(URL);
    }

    searchPlanets(search) {
        this.setState({
            searchText: search
        })
        URL = BaseUrl+searchPlanets+search
        this.props.getPlanetsList(URL);
    }

    render() {
        let pl = this.props.planets;
        return(
            <SafeAreaView
            style={{
                flex:1
            }}>
                <View
                style={{
                    flex: 1,
                }}>
                    <View
                    style={{
                        width: '100%',
                        height: 60,
                        padding: 20,
                    }}>
                        <TextInput
                        style={[{height: 40, width: '100%', marginBottom: 20}, styles.border]}
                        placeholder="Search Planets"
                        onChangeText={(text) => this.searchPlanets(text)}
                        value={this.state.searchText}></TextInput>
                    </View>
                    <FlatList
                    style={{
                        backgroundColor: 'white',
                        flex: 1,
                        margin: 10
                    }}
                            data={this.props.planets}
                            renderItem={({ item, index }) => this.renderPlanets(item, index)}
                            keyExtractor={(item) => item.id}
                    />
                </View>
            </SafeAreaView>
        );
    }

    renderPlanets(item, index){
        return(
            <View
            style={[styles.border, {marginBottom: 20, padding: 5}]}>
                {this.renderRow('Name:', item.name)}
                {this.renderRow('Rotation_period:', item.rotation_period)}
                {this.renderRow('Orbital_period:', item.orbital_period)}
                {this.renderRow('Diameter:', item.diameter)}
                {this.renderRow('Gravity:', item.gravity)}
                {this.renderRow('Surface_water:', item.surface_water)}
                {this.renderRow('Population:', item.population)}
                {this.renderRow('Terrain:', item.terrain)}
            </View>
        );
    }

    renderRow(rowName, Value) {
        return(
            <View
            style={{
                flexDirection: 'row',
                justifyContent:'space-between',
                alignItems: 'center',
                height: 30
            }}>
            <Text
            style={{
                fontSize: 14
            }}>{rowName}</Text>
            <Text
            style={{
                fontSize: 12,
                color: 'gray'
            }}>{Value}</Text>
            </View>
        );
    }
}

// For dispatching an action
const mapDispatchToProps = dispatch => {
    return {
        getPlanetsList: () => dispatch(getPlanetsList(URL))
    }
};

// For accessing states from store
const mapStateToProps = state => {
    return {
        planets: state.SearchReducer.response.results,
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Search);