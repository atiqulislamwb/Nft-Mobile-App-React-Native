import {View, Text} from 'react-native';
import React, {useState} from 'react';

import {EthPrice, NFTTitle} from './SubInfo';
import {COLORS, SIZES, SHADOWS} from '../constants';

const DetailDesc = ({data}) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.small}
        />
        <EthPrice price={data.price} />
      </View>
      <View style={{marginVertical: SIZES.extraLarge * 1.5}}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '600',
            color: COLORS.primary,
          }}>
          Description
        </Text>
        <View style={{marginTop: SIZES.base}}>
          <Text
            style={{
              fontSize: SIZES.small,
              fontWeight: '400',
              color: COLORS.primary,
            }}>
            {text}
            {!readMore && '...'}
            <Text
              style={{
                fontSize: 13,
                fontWeight: '800',

                color: COLORS.primary,
              }}
              onPress={() => {
                if (!readMore) {
                  setText(data.description);
                  setReadMore(true);
                } else {
                  setText(data.description.slice(0, 100));
                  setReadMore(false);
                }
              }}>
              {readMore ? '.Show Less' : 'Show More'}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailDesc;
