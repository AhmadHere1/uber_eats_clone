import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ViewCart = () => {
    return (
        <View style={{

            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            zIndex: 99,
            position: 'absolute',
            bottom: 10,


        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%',

            }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: 'black',

                        borderRadius: 30,
                        marginTop: 20,
                        padding: 8,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 260,
                        position: "relative",


                    }}
                >
                    <Text style={{ color: 'white', fontSize: 20 }}>View Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export { ViewCart }

const styles = StyleSheet.create({})