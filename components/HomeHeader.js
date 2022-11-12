import {View, Text, Image, TextInput} from 'react-native';

import {COLORS, SIZES, SHADOWS, assets} from '../constants';
import profile from '../assets/images/profile.jpg';
const HomeHeader = ({onSearch}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          style={{width: 90, height: 25}}
          source={assets.logo}
          resizeMode="contain"
        />
        <View style={{width: 45, height: 45}}>
          <Image
            resizeMode="contain"
            style={{width: '100%', height: '100%', borderRadius: 20}}
            source={profile}
          />
          <Image
            resizeMode="contain"
            style={{
              width: 15,
              height: 15,
              position: 'absolute',
              bottom: 0,
              right: 0,
            }}
            source={assets.badge}
          />
        </View>
      </View>

      <View style={{marginVertical: SIZES.font}}>
        <Text style={{fontSize: SIZES.small, color: 'white'}}>
          Hello atiqulislamwb 👋
        </Text>
        <Text
          style={{
            fontSize: SIZES.large,
            fontWeight: 'bold',
            color: 'white',
            marginTop: SIZES.base / 2,
          }}>
          Let's find a nft to bid
        </Text>
      </View>
      <View style={{marginTop: SIZES.font}}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            backgroundColor: COLORS.gray,
            alignItems: 'center',
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
            borderRadius: 8,
          }}>
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{width: 20, height: 20, marginRight: SIZES.base}}
          />
          <TextInput
            placeholder="Search Nfts"
            style={{flex: 1}}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
