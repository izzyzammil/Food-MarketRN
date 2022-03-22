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
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getInProgress, getPastOrders} from '../../../redux/action';

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
  const dispatch = useDispatch();
  const {inProgress} = useSelector(state => state.orderReducer);

  useEffect(() => {
    dispatch(getInProgress());
  }, []);

  return (
    <ScrollView style={{paddingTop: 8, paddingHorizontal: 24}}>
      {inProgress.map(order => {
        return (
          <ItemListFood
            key={order.id}
            image={{uri: order.food.picturePath}}
            onPress={() => {
              navigation.navigate('OrderDetail', order);
            }}
            type={'in-progress'}
            items={order.quantity}
            price={order.total}
            name={order.food.name}
          />
        );
      })}
    </ScrollView>
  );
};

const PastOrder = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {pastOrders} = useSelector(state => state.orderReducer);

  useEffect(() => {
    dispatch(getPastOrders());
  }, []);

  return (
    <ScrollView style={{paddingTop: 8, paddingHorizontal: 24}}>
      {pastOrders.map(order => {
        return (
          <ItemListFood
            key={order.id}
            image={{uri: order.food.picturePath}}
            onPress={() => {
              navigation.navigate('OrderDetail', order);
            }}
            type={'past-order'}
            items={order.quantity}
            price={order.total}
            name={order.food.name}
            date={order.created_at}
            status={order.status}
          />
        );
      })}
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
