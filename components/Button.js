import {View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SHADOWS, SIZES} from '../constants';

export const CircleButton = ({imgUrl, handlePress, ...props}) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.extraLarge,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}>
      <Image
        source={imgUrl}
        resizeMode="cover"
        style={{width: 24, height: 24}}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({minWidth, fontSize, handlePress, ...props}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        marginRight: 10,
        padding: SIZES.small,
        alignItems: 'center',
        ...props,
      }}
      onPress={handlePress}>
      <Text
        style={{color: COLORS.white, fontSize: fontSize, fontWeight: '500'}}>
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};
