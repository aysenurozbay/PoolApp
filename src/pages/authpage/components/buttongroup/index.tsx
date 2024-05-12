import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import CText from '../../../../components/ctext';
import { Colors } from '../../../../constants/colors';
import { style } from './buttongroup.style';
import { commonStyles } from '../../../../common.styles';

const MAN = 'Erkek';
const WOMAN = 'Kadın';
const GenderSelection = () => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const handleSelectGender = (gender: string) => {
    setSelectedGender(gender);
  };

  return (
    <>
      <CText style={commonStyles.paddingBottom12}> Cinsiyetinizi Seçin:</CText>
      <View style={style.rowContainer}>
        <TouchableOpacity onPress={() => handleSelectGender(WOMAN)}>
          <View
            style={{
              ...style.buttonContainer,
              backgroundColor:
                selectedGender === WOMAN ? Colors.primary : Colors.white,
            }}>
            <CText
              style={{
                color:
                  selectedGender === WOMAN
                    ? Colors.white
                    : Colors.primaryTextColor,
              }}>
              {WOMAN}
            </CText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleSelectGender(MAN)}>
          <View
            style={{
              ...style.buttonContainer,
              backgroundColor:
                selectedGender === MAN ? Colors.primary : Colors.white,
            }}>
            <CText
              style={{
                color:
                  selectedGender === MAN
                    ? Colors.white
                    : Colors.primaryTextColor,
              }}>
              {MAN}
            </CText>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default GenderSelection;
