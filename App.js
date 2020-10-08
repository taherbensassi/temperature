import React, {Component} from 'react';
import { TextInput,View, Text, Button, StyleSheet } from 'react-native';
import Header from "./components/Header/Header";

const Separator = () => (
    <View style={styles.separator} />
);

const Space = () => (
    <View style={styles.space} />
);

export default class App extends React.Component {
    state = {
        celsius: null, fahrenheit: null, celsiusToFahrenheit: null, fahrenheitToCelsius: null,
    };
    cToF = () => this.setState ( {
        fahrenheit:
            (this.state.celsius * 9/5) + 32,
    });
    fToC = () => this.setState ( {
        celsiusToFahrenheit:
            (this.state.fahrenheitToCelsius - 32) * 5 / 9
    });
    render() {
        const  {
            celsius,
            fahrenheit,
            celsiusToFahrenheit,
            fahrenheitToCelsius
        } = this.state;
        return (
            <View style={styles.container}>
                <Header />

                {/* Text . */}
                <Text style={styles.title}>
                    Dieser Teil ist für von Celsius in Fahrenheit konvertieren
                </Text>
                {/* Input . */}
                <TextInput
                    onChangeText={ (celsius) => this.setState({ celsius })}
                    keyboardType = 'numeric'
                    value={this.state.celsius}
                    placeholder={'Bitte geben Sie hier die Celsius ein °C'}
                    style={styles.inputStyle}
                />
                {/* First Button . */}
                <Button  style={styles.button}
                        title="Konvertieren Sie Celsius in Fahrenheit "
                        onPress = { () => { this.cToF()}}
                       />
                <Space />
                <Separator />

                {/* Text . */}
                <Text style={styles.title}>
                    Dieser Teil ist für von Fahrenheit in Celsius konvertieren
                </Text>

                {/* Input . */}
                <TextInput
                    keyboardType = 'numeric'
                    value={this.state.fahrenheitToCelsius}
                    onChangeText={ (fahrenheitToCelsius) => this.setState({fahrenheitToCelsius})}
                    placeholder={'Bitte geben Sie hier die Fahrenheit ein °F'}
                    style={styles.inputStyle}
                />
                {/* Second Button . */}
                <Button onPress = { () => {this.fToC()}} title="Konvertieren von Fahrenheit in Celsius" />
                <Space />
                <Separator />



                <Text style={styles.result}>
                    Ergebnisse:
                </Text>

                {/* The result. */}
                <Text style={styles.title}> {!!(fahrenheit)? celsius + "°C " + " = " + fahrenheit + " °F" :""}   </Text>
                <Text style={styles.title}>{!!(celsiusToFahrenheit)? fahrenheitToCelsius + "°F " + " = " +  celsiusToFahrenheit+ " °C":""}   </Text>

            </View>
        )
    }
}

{/* Styles . */}
const styles = StyleSheet.create({
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

});
