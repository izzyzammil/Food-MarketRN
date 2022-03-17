import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Select, TextInput} from '../../components';
import {useForm} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import Axios from 'axios';
import {showMessage, hideMessage} from 'react-native-flash-message';

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Bangkalan',
  });

  const dispatch = useDispatch();

  const registerReducer = useSelector(state => state.registerReducer);

  const onSubmit = () => {
    const data = {
      ...form,
      ...registerReducer,
    };
    dispatch({type: 'SET_LOADING', value: true});
    Axios.post('http://foodmarket-backend.buildwithangga.id/api/register', data)
      .then(res => {
        dispatch({type: 'SET_LOADING', value: false});
        showMessage('Register success', 'success');
        navigation.replace('SuccessSignUp');
      })
      .catch(error => {
        dispatch({type: 'SET_LOADING', value: false});
        showToast(error?.response?.data?.message);
      });
  };

  const showToast = (message, type) => {
    showMessage({
      message,
      type: type === 'success' ? 'success' : 'danger',
      backgroundColor: type === 'success' ? '#1ABC9C' : '#D9435E',
    });
  };
  return (
    <View style={styles.page}>
      <Header
        title={'Address'}
        subTitle={'Make sure it’s valid'}
        onBack={() => {}}
      />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <TextInput
            label={'Phone No.'}
            placeholder={'Type your phone number'}
            value={form.phoneNumber}
            onChangeText={value => setForm('phoneNumber', value)}
          />
          <Gap height={16} />
          <TextInput
            label={'Address'}
            placeholder={'Type your address'}
            value={form.address}
            onChangeText={value => setForm('address', value)}
          />
          <Gap height={16} />
          <TextInput
            label={'House No.'}
            placeholder={'Type your house number'}
            value={form.houseNumber}
            onChangeText={value => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <Select
            label={'City'}
            value={form.city}
            onSelectChange={value => setForm('city', value)}
          />
          <Gap height={24} />
          <Button text={'Sign Up Now'} onPress={onSubmit} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
