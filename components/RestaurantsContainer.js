import React, { useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import  { useDispatch, useSelector } from 'react-redux';
import RestaurantCard from './RestaurantCard';

const apiKey = 'FTVhbh0sxoCCGqrcpDWNPLBOkjPcPdhST-lqZyKsmbfJbioqYuBcFIi3AvPH4LjMdfwe5CQAvfj-0L-MPymiYF_bbG284gxiI0YXxD0I3F_Fw5IlXfJnPiOPsUPRX3Yx'

const apiUrl = 'https://api.yelp.com/v3/businesses/search?term=restaurants&location=Denver'

export default function RestaurantsContainer() {
    const dispatch = useDispatch()
    const restaurants = useSelector(state => state.restaurants)
    
    //fetching in a functional component
    
    useEffect(() => {
        fetch(apiUrl, {
            headers: {
            'Authorization': `Bearer ${apiKey}`
            }
        }) 
        .then(response => response.json())
        .then(({businesses}) => dispatch({type: 'SET_RESTAURANTS', restaurants: businesses}))
    }, [])
    
    const showRestaurants = () => restaurants.map((restaurant, i) => {
        return <RestaurantCard 
            key={restaurant.id} 
            index={i + 1} 
            restaurant={restaurant} />
    })

    return (
            <ScrollView style={styles.container}>
                {showRestaurants()}
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
    }
})