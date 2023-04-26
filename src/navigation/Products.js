import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Products() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [filterd, setFilterd] = useState([]);
  const [search, setsearch] = useState();
  const [Value, setValue] = useState('');

  const getProduct = async () => {
    const data1 = await fetch('https://fakestoreapi.com/products/');
    const res = await data1.json();
    setData(res);
  };
  useEffect(() => {
    getProduct();
  }, []);

  const searchdata = searchtext => {
    if (searchtext) {
      const filterdata = data.filter(item => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();

        const textData = searchtext.toUpperCase();

        return itemData.indexOf(textData) > -1;
      });
      setFilterd(filterdata);
      setsearch(searchtext);
    } else {
      setFilterd(data);
      setsearch(searchtext);
    }
  };

  return (
    <ScrollView style={{display: 'flex'}}>
      <View style={{flex: 1, borderWidth: 2, backgroundColor: 'lightblue'}}>
        <View
          style={{
            flexDirection: 'row',
            margin: 5,
            padding: 15,
            justifyContent: 'space-around',
            backgroundColor: 'cyan',
          }}>
          <TextInput
            style={{
              backgroundColor: 'white',
              borderColor: 'black',
              borderWidth: 2,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              width: '80%',
              height: 40,
            }}
            onChangeText={e => {
              setValue(e);
              searchdata(Value);
            }}
            placeholder="Search Item"></TextInput>

          <TouchableOpacity
            style={{
              backgroundColor: 'blak',
              height: 40,
              width: 45,
              borderBottomRightRadius: 15,
              borderTopRightRadius: 15,
              borderWidth: 2,
              backgroundColor: 'white',
              paddingLeft: 3,
              paddingTop: 3,
            }}>
            <Octicons name="search" size={25} />
          </TouchableOpacity>

          <AntDesign name="shoppingcart" size={35} />
        </View>

        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '700',
              textTransform: 'uppercase',
              textDecorationLine: 'underline',
            }}>
            Product List
          </Text>

          <FlatList
            data={filterd}
            // inverted
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    width: 300,
                    backgroundColor: '#fff',
                    borderRadius: 5,
                    marginVertical: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: 300,
                  }}>
                  <View
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={{
                        uri: item.image,
                      }}
                      height={200}
                      width={200}
                      resizeMode="contain"
                    />
                  </View>
                  <View
                    style={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: '#353535',
                      paddingVertical: 10,
                    }}>
                    <Text style={{color: 'white', fontSize: 15}}>
                      {item.title}
                    </Text>

                    <Text style={{color: 'white', fontSize: 20}}>
                      {'$'}
                      {item.price}
                    </Text>
                    <TouchableOpacity
                      style={{
                        color: 'white',
                        backgroundColor: 'skyblue',
                        fontSize: 20,
                        margin: 10,
                        paddingHorizontal: 25,
                        paddingVertical: 5,
                        borderRadius: 15,
                      }}
                      onPress={() => {
                        const data = {item};

                        navigation.navigate('SingleProduct', {
                          selecteditem: data,
                        });
                      }}>
                      <Text>Buy</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}
