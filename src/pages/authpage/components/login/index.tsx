import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import CText from '../../../../components/ctext';
import CInput from '../../../../components/cinput';
import { styles } from './login.style';
import { LoginPropsType } from './login.type';
import { width } from '../../../../constants/metrics';

const Login = (props: LoginPropsType) => {
  const { scrollRef } = props;

  const onPressCreateAccount = () => {
    scrollRef.current.scrollTo({ x: width });
  };

  return (
    <>
      <CText style={styles.welcomeText}>Hoşgeldiniz</CText>
      <CInput
        label="Nickname"
        infoText={
          'Gizliliğinizi önemsiyoruz. Lütfen ad ve soyad girmeden nickname oluşturunuz'
        }
        containerStyle={styles.inputContainer}
        infoTextStyle={styles.infoTextStyle}
      />
      <CInput
        label="Şifre"
        infoText="Şifremi Unuttum"
        containerStyle={styles.inputContainer}
        infoTextStyle={styles.forgotPasswordTextStyle}
      />
      <TouchableOpacity style={styles.button}>
        <CText style={styles.buttonText}>Giriş yap</CText>
      </TouchableOpacity>
      <View style={styles.signUpTextContainer}>
        <CText>Üye değil misiniz?</CText>
        <TouchableOpacity onPress={onPressCreateAccount}>
          <CText style={styles.signUpText}> Hesap oluştur</CText>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Login;
