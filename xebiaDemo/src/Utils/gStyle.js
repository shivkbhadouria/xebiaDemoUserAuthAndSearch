import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({

    border: {
    },

    productNameTextStyle: {
        fontSize:12,
        color: 'black',
        width: '100%',
        paddingVertical: 3
    },

    productAmountTextStyle: {
        fontSize:12,
        color: 'black',
        paddingVertical: 3
    },

    productDiscountTextStyle: {
        textDecorationLine: 'line-through',
        fontSize:12,
        color: 'rgb(111,111,111)',
        paddingVertical: 3,
        marginLeft: 5
    },

    remainProductTextStyle: {
        fontSize: 10,
        color: 'orange',
        width: '100%',
        paddingVertical: 3,
        fontStyle: 'italic'
    },

    sepratorLine: {
        width: '100%',
        height: 0.7,
        backgroundColor: 'gray'
    },

    cartTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: 30,
    },
});

module.exports = styles;

