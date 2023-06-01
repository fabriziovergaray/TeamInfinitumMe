import React, {useContext, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FadeinImage from '../Components/FadeInImage';
import {HeaderComponent} from '../Components/HeaderComponent';

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);
  const LoadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  const renderItem = ( item: number ) => {
    return (
        <FadeinImage 
            uri={ `https://picsum.photos/id/${ item }/1024/1024` }
            style={{
                width: '100%',
                height: 400
            }}
        />
    );
}
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={numbers}
        renderItem={ ({ item }) => renderItem(item) }

        keyExtractor={item => item.toString()}
        ListHeaderComponent={() => (
          <View style={{marginHorizontal:20}}>
            <HeaderComponent title="Infinite Scroll" />
          </View>
        )}
        onEndReached={() => LoadMore()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}>
            <ActivityIndicator size={20} color={'red'} />
          </View>
        )}
      />
    </View>
  );
};

const stylesHere = StyleSheet.create({
  textItem: {
    backgroundColor: 'green',
    height: 150,
  },
});
export default InfiniteScrollScreen;
