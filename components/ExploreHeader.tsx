import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { Link } from 'expo-router';
import Colors from '@/constants/Colors';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const categories = [
    {
        name: 'Tiny homes',
        icon: 'home',
    },
    {
        name: 'Cabins',
        icon: 'house-siding',
    },
    {
        name: 'Trending',
        icon: 'local-fire-department',
    },
    {
        name: 'Play',
        icon: 'videogame-asset',
    },
    {
        name: 'City',
        icon: 'apartment',
    },
    {
        name: 'Beachfront',
        icon: 'beach-access',
    },
    {
        name: 'Countryside',
        icon: 'nature-people',
    },
];

const ExploreHeader = () => {

    const itemsRef = useRef<Array<TouchableOpacity | null>>([]);
    const [activeIndex, setActiveIndex] = useState(0)

    const selectCtegory = (index: number) => {
        setActiveIndex(index);
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <View style={styles.container}>
                    <View style={styles.actionRow}>
                        <Link href={'/(modals)/login'} asChild>
                            <TouchableOpacity
                                style={styles.searchBtn}
                            >
                                <Ionicons name='search' size={24} />
                                <View>
                                    <Text style={{ fontFamily: 'mon-sb' }}>Where to?</Text>
                                    <Text style={{ fontFamily: 'mon', color: Colors.grey }}>Anywhere . Any week</Text>
                                </View>
                            </TouchableOpacity>
                        </Link>

                        <TouchableOpacity style={styles.filterBtn}>
                            <Ionicons name='options-outline' size={24} />
                        </TouchableOpacity>
                    </View>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            alignItems: 'center',
                            gap: 20,
                            paddingHorizontal: 16,
                        }}
                    >
                        {categories.map((item, i) => (
                            <TouchableOpacity
                                onPress={() => selectCtegory(i)}
                                key={i}
                                ref={(el) => itemsRef.current[i] = el}
                                style={activeIndex === i ? styles.categoriesBtnActive : styles.categoriesBtn}
                            >
                                <MaterialIcons
                                    name={item.icon as any} size={24}
                                    color={activeIndex === i ? '#000' : Colors.grey}
                                />
                                <Text style={activeIndex === i ? styles.categoryTextActive : styles.categoryText }>{item.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ExploreHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 130,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: {
            width: 1,
            height: 10,
        },
    },
    actionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingBottom: 16,
    },

    searchBtn: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        gap: 10,
        padding: 14,
        alignItems: 'center',
        width: 280,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#c2c2c2',
        borderRadius: 30,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.12,
        shadowRadius: 8,
        shadowOffset: {
            width: 1,
            height: 1,
        },
    },
    filterBtn: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#A2A0A2',
        borderRadius: 24,
    },
    categoryText: {
        fontSize: 14,
        fontFamily: 'mon-sb',
        color: Colors.grey,
    },
    categoryTextActive: {
        fontSize: 14,
        fontFamily: 'mon-sb',
        color: '#000',
    },
    categoriesBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 8,
    },
    categoriesBtnActive: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        paddingBottom: 8,
    },
})