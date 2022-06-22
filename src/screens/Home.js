import { StatusBar, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { HeaderTabs } from '../components/HomeScreen/HeaderTabs'
import { SearchBar } from '../components/HomeScreen/SearchBar'
import { Catagories } from '../components/HomeScreen/Catagories'
import { localRestuarants, RestuarantItems } from '../components/HomeScreen/RestuarantItems'
import { BottomTabs } from '../components/HomeScreen/BottomTabs'

export default function Home() {
    const [restuarantData, setRestuarantData] = useState(localRestuarants);
    return (
        <View style={{ backgroundColor: '#eeee', flex: 1 }}>
            <StatusBar />
            <View style={{ backgroundColor: 'white', padding: 10 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Catagories />
                <RestuarantItems restuarantData={restuarantData} />


            </ScrollView>
            <BottomTabs />
        </View>
    )
}



const styles = StyleSheet.create({


})