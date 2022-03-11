import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ItemListFood from '../ItemListFood';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1,
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        rating={3}
        image={FoodDummy1}
        onPress={() => {
          navigation.navigate('OrderDetail');
        }}
        type={'in-progress'}
        items={5}
        price={'2.000.000'}
        name={'Soup Bumil'}
      />
      <ItemListFood
        rating={3}
        image={FoodDummy2}
        onPress={() => {
          navigation.navigate('OrderDetail');
        }}
        type={'in-progress'}
        items={5}
        price={'2.000.000'}
        name={'Soup Bumil'}
      />
      <ItemListFood
        rating={3}
        image={FoodDummy3}
        onPress={() => {
          navigation.navigate('OrderDetail');
        }}
        type={'in-progress'}
        items={5}
        price={'2.000.000'}
        name={'Soup Bumil'}
      />
      <ItemListFood
        rating={3}
        image={FoodDummy4}
        onPress={() => {
          navigation.navigate('OrderDetail');
        }}
        type={'in-progress'}
        items={5}
        price={'2.000.000'}
        name={'Soup Bumil'}
      />
    </ScrollView>
  );
};

const PastOrder = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        rating={3}
        image={FoodDummy3}
        onPress={() => {
          navigation.navigate('OrderDetail');
        }}
        type={'past-order'}
        items={5}
        price={'2.000.000'}
        name={'Soup Bumil'}
        date={'Jun 12, 14:00'}
      />
      <ItemListFood
        rating={3}
        image={FoodDummy4}
        onPress={() => {
          navigation.navigate('OrderDetail');
        }}
        type={'past-order'}
        items={5}
        price={'2.000.000'}
        name={'Soup Bumil'}
        date={'Jun 12, 14:00'}
        status={'cancel'}
      />
      <ItemListFood
        rating={3}
        image={FoodDummy1}
        onPress={() => {
          navigation.navigate('OrderDetail');
        }}
        type={'past-order'}
        items={5}
        price={'2.000.000'}
        name={'Soup Bumil'}
      />
      <ItemListFood
        rating={3}
        image={FoodDummy2}
        onPress={() => {
          navigation.navigate('OrderDetail');
        }}
        type={'past-order'}
        items={5}
        price={'2.000.000'}
        name={'Soup Bumil'}
      />
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: InProgress,
  2: PastOrder,
});

const OrderTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
  ]);
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default OrderTabSection;

const styles = StyleSheet.create({});
