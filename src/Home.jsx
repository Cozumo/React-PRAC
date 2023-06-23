import React from "react";
import { StyleSheet, Text, View, Button, Pressable, ScrollView} from 'react-native';
import Header from "./Header";
import Footer from "./Footer";
import { createTable, insertUser, getUsers, deleteUser, updateUsers , apigetData, smallstorage} from "./database";


const fetchusers = async () => {
    try{
        const data = await getUsers();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

const Home = ({navigation}) => {
    return (
        <View style={styles.mainContainer}>

            <Header heading={"Exam"} />

            <ScrollView style={styles.content}>
                <Text style={styles.HomeText}>HOME PAGE</Text>
                <Pressable onPress={() => navigation.navigate("About")} style={{backgroundColor: 'yellow', maxWidth: 90, padding: 20, margin: 30, borderRadius: 20,}}>
                    <Text>ABOUT</Text>
                </Pressable>

                <Pressable onPress={() => createTable()} style={{backgroundColor: 'yellow', maxWidth: 90, padding: 20, margin: 30, borderRadius: 20,}}>
                    <Text>CREATE TABLE</Text>
                </Pressable>

                <Pressable onPress={() => insertUser({'name': "new", 'pass': "123"})} style={{backgroundColor: 'yellow', maxWidth: 90, padding: 20, margin: 30, borderRadius: 20,}}>
                    <Text>ADD ITEM</Text>
                </Pressable>

                <Pressable onPress={() =>  fetchusers()} style={{backgroundColor: 'yellow', maxWidth: 90, padding: 20, margin: 30, borderRadius: 20,}}>
                    <Text>GET TABLE</Text>
                </Pressable>

                <Pressable onPress={() => updateUsers({'name': "Updated", 'pass': "heavy", 'id': 1})} style={{backgroundColor: 'yellow', maxWidth: 90, padding: 20, margin: 30, borderRadius: 20,}}>
                    <Text>Update ITEM</Text>
                </Pressable>

                <Pressable onPress={() => deleteUser({"id": 2})} style={{backgroundColor: 'yellow', maxWidth: 90, padding: 20, margin: 30, borderRadius: 20,}}>
                    <Text>DELETE ITEM</Text>
                </Pressable>

                <Pressable onPress={() => apigetData()} style={{backgroundColor: 'orange', maxWidth: 90, padding: 20, margin: 30, borderRadius: 20,}}>
                    <Text>FETCH API</Text>
                </Pressable>


                <Pressable onPress={() => smallstorage()} style={{backgroundColor: 'orange', maxWidth: 90, padding: 20, margin: 30, borderRadius: 20,}}>
                    <Text>ASYNC STORAGE FUNCTION</Text>
                </Pressable>
            </ScrollView>

            <Footer copyright={"@2020"} />

        </View>
    )
}


const styles = StyleSheet.create({
    content: {
        flex: 0.6
    },
    HomeText: {
        backgroundColor: 'red',
    },
    mainContainer: {
        flex: 1,
    }
});

export default Home;