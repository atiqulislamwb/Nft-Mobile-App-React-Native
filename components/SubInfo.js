import {View, Text, Image} from 'react-native';
import React from 'react';
import {COLORS, SIZES, SHADOWS, assets} from '../constants';
export const NFTTitle = ({title, subTitle, titleSize, subTitleSize}) => {
  return (
    <View style={{}}>
      <Text style={{fontWeight: '600', fontSize: titleSize, color: 'black'}}>
        {title}
      </Text>
      <Text style={{fontWeight: '400', fontSize: subTitleSize, color: 'black'}}>
        {subTitle}
      </Text>
    </View>
  );
};
export const EthPrice = ({price}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 20}}>
      <Image
        style={{width: 20, height: 20, marginRight: 2}}
        source={assets.eth}
        resizeMode="contain"
      />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}>
        {price}
      </Text>
    </View>
  );
};
export const ImageCmp = ({item, index}) => {
  return (
    <Image
      source={item}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};
export const People = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      {[assets.person02, assets.person03, assets.person04].map(
        (item, index) => (
          <ImageCmp item={item} index={index} key={`People-${index}`} />
        ),
      )}
    </View>
  );
};
export const EndDate = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: '50%',
      }}>
      <Text
        style={{
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}>
        Ending In
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}>
        12h 30m
      </Text>
    </View>
  );
};

export const SubInfo = () => {
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <People />
      <EndDate />
    </View>
  );
};
