import React from 'react';
import { View, ImageBackground } from 'react-native';
import TabView from './components/tabview';
import { styles } from './authpage.style';
import { authPageBg } from '../../../assets/images';
import { commonStyles } from '../../common.styles';

const AuthPage = () => {
  return (
    <View style={commonStyles.flex}>
      <ImageBackground
        style={styles.container}
        source={authPageBg}
        resizeMode="cover">
        <TabView />
      </ImageBackground>
    </View>
  );
};

export default AuthPage;
