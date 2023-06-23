import React, { useState } from "react";
import {StyleSheet, View, Text, TextInput, Button , Pressable, BackHandler} from "react-native";


const emailValidationRegex = "^[0-9A-Za-z._+]+@[A-Za-z0-9]+.[A-Za-z0-9]+$"




export default Login = ({navigation}) => {

    const [name, setName] = useState();
    const [pass, setPass] = useState();

    const validateEmail = () => {               // returns true or false
        return name.match(emailValidationRegex);
    }


    return (
        <View>

            <TextInput 
                style={styles.textbox}
                value={name}
                placeholder="Enter Username"
                onChangeText={(text) => setName(text)}
            />

            <TextInput 
                style={styles.textbox}
                value={pass}
                placeholder="Enter Password"
                onChangeText={text => setPass(text)}
                secureTextEntry
            />
            
            <Pressable style={styles.button} onLongPress={() => navigation.navigate("Home")}>
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    textbox: {
        borderColor: 'black',
        borderWidth: 2,
        padding: 7,
        margin: 20
    },
    button: {
        padding: 15,
        margin: 20,
        borderColor: 'black',
        backgroundColor: 'navy',
    },
    buttonText: {
        color: 'white',
        textAlign: "center",
        fontSize: 20
    }
})