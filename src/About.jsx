import React, { useEffect, useState } from "react";
import {StyleSheet, Text, View, Button, Image, FlatList, SectionList} from 'react-native';
import * as screenOrientation from 'expo-screen-orientation';
import Header from "./Header";
import Footer from "./Footer";


const DATA = [
    {id: '0', name:'Item 1'},
    {id: '1', name:'Item 2'},
    {id: '2', name:'Item 3'},
    {id: '3', name:'Item 4'},
    {id: '4', name:'Item 1'},
    {id: '5', name:'Item 2'},
    {id: '6', name:'Item 3'},
    {id: '7', name:'Item 4'},
    {id: '8', name:'Item 1'},
    {id: '9', name:'Item 2'},
    {id: '10', name:'Item 3'},
    {id: '11', name:'Item 4'},
];

const DATASection = [
    {
      title: 'Main dishes',
      data: [   
        {id: '10', name:'Item 3'},
        {id: '11', name:'Item 4'},
    ],
    },
    {
      title: 'Sides',
      data: [   
        {id: '10', name:'Item 3'},
        {id: '11', name:'Item 4'},
    ],
    },
    {
      title: 'Drinks',
      data: [   
        {id: '10', name:'Item 3'},
        {id: '11', name:'Item 4'},
    ],
    },
    {
      title: 'Desserts',
      data: [   
        {id: '10', name:'Item 3'},
        {id: '11', name:'Item 4'},
    ],
    },
  ];

const Item = ({item}) => {
    return(    
        <View style={styles.item}> 
            <Text> {item.name}</Text>
        </View> 
    )

}

const SecHeader = ({section}) => {
    return (
        <View>
            <Text>{section.title}</Text>
        </View>
    )
}

const About = () => {

    const [orientation, setOrientation] = useState(0);

    useEffect(() => {
        checkOrientation();
        screenOrientation.addOrientationChangeListener(checkOrientation);
    }
    ,[])

    const checkOrientation = async () => {
        const or = await screenOrientation.getOrientationAsync();

        setOrientation(or);
        lockOrr();
    }

    const lockOrr = async () => {
        await screenOrientation.lockAsync(orientation);
    }



    return (
        <View style={{flex: 1}}>
            <Header heading={"Exam"} />

            <View style={{flex: 0.6}}>
                <View>
                    <FlatList
                        data={DATA}
                        renderItem={Item}
                        keyExtractor={ (item, index) => item.id + index}
                        horizontal= {(orientation > 2) ? true : false}
                    />
                </View>
                
                {/* <View>
                    <SectionList
                        sections={DATASection}
                        renderItem={Item}
                        renderSectionHeader={SecHeader}
                        keyExtractor={ (item, index) => item.id + index}
                    />
                </View> */}
            </View>

            

            <Footer copyright={"@2020"} />
        </View>
    )
}


const styles = StyleSheet.create({
    HomeText: {
        backgroundColor: 'red',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
})

export default About;