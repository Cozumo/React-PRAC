import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";

export default Footer = (props) => {
    return (
        <View style={styles.footer}>
            <Text>{props.copyright}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flex: 0.2,
        backgroundColor: 'teal',
    },
});