import {View, Text, Image} from 'react-native';

import {EthPrice} from './SubInfo';
import {COLORS, SIZES, SHADOWS} from '../constants';

const DetailBid = ({bid}) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2,
      }}>
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{width: 48, height: 48}}
      />
      <View>
        <Text
          style={{
            fontWeight: '500',
            color: COLORS.primary,
            fontSize: SIZES.small,
          }}>
          Bid place by {bid.name}
        </Text>
        <Text
          style={{
            fontWeight: '400',
            color: COLORS.secondary,
            fontSize: SIZES.small - 2,
            marginTop: 3,
          }}>
          {bid.date}
        </Text>
      </View>
      <EthPrice price={bid.price} />
    </View>
  );
};

export default DetailBid;
