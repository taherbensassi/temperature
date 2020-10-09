import React, {Component} from 'react';
import { TextInput,View, Text, Button, StyleSheet, Alert} from 'react-native';
import Header from "./src/components/Header/Header";


import styles from './styles';

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

    _onPressButtonCToF(cel) {
        let celToF =   (cel * 9/5) + 32 ;
        if((cel === null)){
             alert ('Bitte geben Sie eine Celsius-Nummer ein!!')
        }else
            Alert.alert(
                'Ergebnisse',
                cel + "°C =" + celToF + " °F" ,
                [
                    {text: 'OK', onPress: () => console.log('Ok Pressed')},
                ],
                { cancelable: false }
            )
    }
    _onPressButtonFToC(far) {
        let farToC =   (far - 32) * 5 / 9 ;
        if((far === null)){
            alert ('Bitte geben Sie eine fahrenheit-Nummer ein!!')
        }else
            Alert.alert(
                'Ergebnisse',
                far + "°F =" + farToC + " °C",
                [
                    {text: 'OK', onPress: () => console.log('Ok Pressed')},
                ],
                { cancelable: false }
            )
    }
    render() {

        return (
            <View style={styles.container}>
                <Header />

                {/* Text . */}
                <Text style={styles.title}>
                    Dieser Teil ist für von Celsius in Fahrenheit konvertieren
                </Text>
                {/* Input . */}
                <TextInput
                    returnKeyType="done"
                    onChangeText={ (celsius) => this.setState({ celsius })}
                    keyboardType = 'number-pad'
                    placeholder={'Bitte geben Sie hier die Celsius ein °C'}
                    style={styles.inputStyle}
                />
                {/* First Button . */}
                <Button  style={styles.button}
                         title="Konvertieren Sie Celsius in Fahrenheit "
                         onPress={() => this._onPressButtonCToF(this.state.celsius)}
                       />
                <Space />
                <Separator />

                {/* Text . */}
                <Text style={styles.title}>
                    Dieser Teil ist für von Fahrenheit in Celsius konvertieren
                </Text>

                {/* Input . */}
                <TextInput
                    returnKeyType="done"
                    keyboardType = 'number-pad'
                    value={this.state.fahrenheitToCelsius}
                    onChangeText={ (fahrenheitToCelsius) => this.setState({fahrenheitToCelsius})}
                    placeholder={'Bitte geben Sie hier die Fahrenheit ein °F'}
                    style={styles.inputStyle}
                />
                {/* Second Button . */}
                <Button
                    style={styles.button}
                    onPress={() => this._onPressButtonFToC(this.state.fahrenheitToCelsius)}
                    title="Konvertieren von Fahrenheit in Celsius" />
                <Space />
                <Separator />

            </View>
        )
    }
}

