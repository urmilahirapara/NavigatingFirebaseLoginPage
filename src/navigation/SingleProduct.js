import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
export default function SingleProduct({route}) {
  const [count, setCount] = useState(0);
  const data = route.params.selecteditem.item;

  const navigation = useNavigation();

  return (
    <ScrollView style={{display: 'flex', backgroundColor: 'lightgray'}}>
    <TouchableOpacity onPress={() => navigation.goBack('Products')}>
          <Text style={{fontSize:20}}>
           🔙
          </Text>
        </TouchableOpacity>
      <View style={{alignItems: 'center', justifyContent: 'space-around'}}>
        <Text style={{fontSize: 30}}>SingleProduct</Text>
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          backgroundColor: '#32FF67',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            textTransform: 'uppercase',
            textDecorationLine: 'underline',
            textDecorationStyle: 'double',
            textShadowColor: '#000',
            marginVertical: 10,
          }}>
          {data.title}
        </Text>
        <Image
          source={{
            uri: data.image,
          }}
          height={200}
          width={400}
          resizeMode="contain"
        />
        <Text style={{fontWeight: '800', fontSize: 20, textAlign: 'center'}}>
          {'$'}
          {data.price}
        </Text>
        <Text style={{lineHeight: 25}}>
          {'✔ '}
          {data.category}
        </Text>
        <Text style={{lineHeight: 25}}>
          {'✔ '}
          {data.description}
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            padding: 2,
            marginHorizontal: 140,
            borderRadius: 15,
            marginVertical: 2,
          }}>
          <TouchableOpacity
            style={{opacity: 1, padding: 2, margin: 10}}
            onPress={() => count && setCount(count - 1)}>
            <Text>{'➖'}</Text>
          </TouchableOpacity>
          <Text
            style={{
              padding: 2,
              margin: 10,
            }}>
            {count}
          </Text>
          <TouchableOpacity
            style={{opacity: 1, padding: 2, margin: 10}}
            onPress={() => setCount(count + 1)}>
            <Text>{'➕'}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack('Products')}>
          <Text style={{fontSize:20,
          backgroundColor:'#32AF67',
          marginHorizontal:120,
          borderRadius:10,
          marginVertical:5,
          padding:5,
          textAlign:'center',
          }}>
           Add To Cart
          </Text>
        </TouchableOpacity>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
