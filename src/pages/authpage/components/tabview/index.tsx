import React, { useRef } from 'react';
import { View, ScrollView } from 'react-native';
import Login from '../login';
import { styles } from './tabview.style';
import SignUp from '../signup';

const TabView = () => {
  const scrollRef = useRef(null);

  return (
    <View style={styles.transparentBackground}>
      <View style={styles.modalIndicator} />
      <ScrollView
        horizontal
        ref={scrollRef}
        scrollEnabled={false}
        contentInsetAdjustmentBehavior="automatic">
        <View style={styles.page}>
          <Login scrollRef={scrollRef} />
        </View>
        <View style={styles.page}>
          <SignUp scrollRef={scrollRef} />
        </View>
      </ScrollView>
    </View>
  );
};

export default TabView;
