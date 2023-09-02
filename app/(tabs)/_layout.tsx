import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const Layout = () => {
    return (
        <Tabs screenOptions={{
            tabBarInactiveTintColor: Colors.primary,
            // tabBarLabelStyle: {
            //     fontFamily: 'mon'
            // },
        }}>
            <Tabs.Screen name="index" options={{
                tabBarLabel: 'Explore',
                tabBarIcon: ({ color, size}) => <Ionicons name="search" color={color} size={size}/>,
                }}
            />
        </Tabs>    )
}

export default Layout