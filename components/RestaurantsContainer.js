import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import  { useDispatch, useSelector } from 'react-redux';

const apiKey = 'FTVhbh0sxoCCGqrcpDWNPLBOkjPcPdhST-lqZyKsmbfJbioqYuBcFIi3AvPH4LjMdfwe5CQAvfj-0L-MPymiYF_bbG284gxiI0YXxD0I3F_Fw5IlXfJnPiOPsUPRX3Yx'

const apiUrl = 'https://api.yelp.com/v3/businesses/search?term=restaurants&location=Denver'

export default function RestaurantsContainer() {
    const dispatch = useDispatch()
    const restaurants = useSelector(state => state.restaurants)
    
    //fetching in a functional component
    
    useEffect(() => {
        fetch('https://cors-anywhere.herokuapp.com/' + apiUrl, {
            headers: {
            'Authorization': `Bearer ${apiKey}`
            }
        }) 
        .then(response => response.json())
        .then(({businesses}) => dispatch({type: 'SET_RESTAURANTS', restaurants: businesses}))
    }, [])
    
    const showRestaurants = () => restaurants.map(restaurant => {
        return <Text>{restaurant.name}</Text>
    })

    return (
            <View style={styles.container}>
                {showRestaurants()}
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})