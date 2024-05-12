import { ScrollView, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CText from '../../../../components/ctext';
import { SignUpPropsType } from './signup.type';
import GenderSelection from '../buttongroup';
import CInput from '../../../../components/cinput';
import { styles } from './signup.style';
import { commonStyles } from '../../../../common.styles';

const SignUp = (props: SignUpPropsType) => {
  const { scrollRef } = props;

  const onPressLogin = () => {
    scrollRef.current.scrollTo({ x: 0 });
  };

  return (
    <ScrollView>
      <GenderSelection />
      <CInput label="Email" containerStyle={styles.inputContainer} />
      <CInput
        label="Nickname"
        infoText="Gizliliğinizi önemsiyoruz. Lütfen ad ve soyad girmeden nickname oluşturunuz."
        containerStyle={commonStyles.paddingBottom12}
        infoTextStyle={styles.infoTextStyle}
      />
      <CInput label="Şifre" />
      <CInput label="Doğum Tarihi" />
      <View style={commonStyles.alignSelfCenter}>
        <TouchableOpacity style={styles.button}>
          <CText style={styles.buttonText}>İLERLE</CText>
        </TouchableOpacity>
        <View style={styles.signUpTextContainer}>
          <CText>Hesabınız Var Mı?</CText>
          <TouchableOpacity onPress={onPressLogin}>
            <CText style={styles.signUpText}> Giriş Yap</CText>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
