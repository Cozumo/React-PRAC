import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";

export default Header = (props) => {
    return (
        <View style={styles.header}>
            <Text>{props.heading}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 0.2,
        backgroundColor: 'orange',
    },
});