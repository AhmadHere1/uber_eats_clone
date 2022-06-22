import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'
const data = [
    {
        title: 'Pasta Recipe with Meatballs',
        image: 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?quality=90&resize=556,505',
        description: 'Delicious pasta dishes from classic spaghetti Bolognese to lasagne and linguine. Find the perfect pasta recipe for midweek meals as well as easy pasta dishes you can rustle up using your storecupboard.',
        rating: 4.5,
        price: '$78',
        location: 'Lahore',
        id: 1
    },
    {
        title: 'Special karahi',
        image: 'https://www.pinkvilla.com/imageresize/cover-image_1_5.jpg?width=752&format=webp&t=pvorg',
        description: 'Sit back and tuck into a big bowl of pasta alla vodka, a creamy tomato pasta with – as you can guess – vodka, which balances out the intense flavours',
        rating: 4.5,
        price: '$200',
        location: 'Lahore',
        id: 2
    },
    {
        title: 'Special grill and fish',
        image: 'https://media.self.com/photos/57d8952946d0cb351c8c50c9/1:1/w_855,h_855,c_limit/DELICIOUS-1-POT-Lentil-and-Black-Bean-Chili-Smoky-hearty-PROTEIN-and-fiber-packed-vegan-glutenfree-lentils-chili-healthy-recipe2.jpg',
        description: 'Enjoy this gooey cheese and chicken pasta bake for the ultimate weekday family dinner. Serve straight from the dish with a dressed green salad',
        rating: 4.5,
        price: '$100',
        location: 'Lahore',
        id: 3
    },
    {
        title: 'Lasani Pizzaaa',
        image: 'https://recipe52.com/wp-content/uploads/2020/10/Pakistani-recipes-pin-it-1.jpg',
        description: 'Make this creamy mushroom pasta dish on days when you need a big bowl of comfort. Cream, parmesan, white wine, lemon zest and parsley make this a rich and flavourful dinner',
        rating: 4.5,
        price: '$70',
        location: 'Lahore',
        id: 4
    },
    {
        title: 'Pasta Recipe with Meatballs',
        image: 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?quality=90&resize=556,505',
        description: 'Delicious pasta dishes from classic spaghetti Bolognese to lasagne and linguine. Find the perfect pasta recipe for midweek meals as well as easy pasta dishes you can rustle up using your storecupboard.',
        rating: 4.5,
        price: '$78',
        location: 'Lahore',
        id: 5

    },
    {
        title: 'Pakistan Pizza',
        image: 'https://www.pinkvilla.com/imageresize/cover-image_1_5.jpg?width=752&format=webp&t=pvorg',
        description: 'Sit back and tuck into a big bowl of pasta alla vodka, a creamy tomato pasta with – as you can guess – vodka, which balances out the intense flavours',
        rating: 4.5,
        price: '$200',
        location: 'Lahore',
        id: 6

    },
    {
        title: 'Lahore grill and fish',
        image: 'https://media.self.com/photos/57d8952946d0cb351c8c50c9/1:1/w_855,h_855,c_limit/DELICIOUS-1-POT-Lentil-and-Black-Bean-Chili-Smoky-hearty-PROTEIN-and-fiber-packed-vegan-glutenfree-lentils-chili-healthy-recipe2.jpg',
        description: 'Enjoy this gooey cheese and chicken pasta bake for the ultimate weekday family dinner. Serve straight from the dish with a dressed green salad',
        rating: 4.5,
        price: '$100',
        location: 'Lahore',
        id: 7
    },
    {
        title: 'Lasani Bill and Checks',
        image: 'https://recipe52.com/wp-content/uploads/2020/10/Pakistani-recipes-pin-it-1.jpg',
        description: 'Make this creamy mushroom pasta dish on days when you need a big bowl of comfort. Cream, parmesan, white wine, lemon zest and parsley make this a rich and flavourful dinner',
        rating: 4.5,
        price: '$70',
        location: 'Lahore',
        id: 8
    },

];
const Item = ({ title, image, description, rating, price, location }) => {
    return (
        <View style={styles.menuItemStyle}>

            <View>
                <Text style={styles.textStyling}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.rating}>{rating}</Text>
                <Text style={styles.price}>{price}</Text>
                <Text style={styles.price}>{location}</Text>
            </View>
            <View>
                <Image source={{ uri: image }}
                    style={{
                        width: 90,
                        height: 90,
                        borderRadius: 10,
                        resizeMode: 'contain',
                        marginTop: -35,
                    }}
                />
            </View>


        </View>
    )
}


const Menu = () => {
    return (

        <FlatList
            data={data}
            renderItem={({ item }) => <Item
                title={item.title}
                image={item.image}
                description={item.description}
                rating={item.rating}
                price={item.price}
                location={item.location} />}
            keyExtractor={item => item.id}
        // scrollEnabled={false}
        />

    )
}

export { Menu }

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        width: '67%',
        marginLeft: '3%',
        marginTop: '2%',
        alignItems: 'center',
        flex: 1



    },
    textStyling: {
        fontSize: 15,
        fontWeight: 'bold',

        marginVertical: 7
    },
    description: {
        fontSize: 12,

    },
    rating: {
        fontSize: 12,


    },
    price: {
        fontSize: 12,
    }


})