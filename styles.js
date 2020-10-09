import {StyleSheet} from "react-native";

export default {
    container: {
        flex: 1,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    result: {
        textAlign: 'center',
        marginVertical: 8,
        fontWeight: 'bold'
    },
    space: {
        marginBottom: 15,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    circle:{
        height : 100 ,
        width :100,
        borderRadius: 1000,
        backgroundColor: '#737373',
    },
    inputStyle:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    }
};