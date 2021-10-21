import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StyleProp,
  ImageStyle,
  Animated,
  NativeSyntheticEvent,
  ImageErrorEventData,
  ActivityIndicator,
  ImageSourcePropType,
} from 'react-native';
import useAnimation from 'hooks/useAnimation';
import {ColorsApp} from 'utils/enums';

interface FadeImageProps {
  uri: string | ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
}

const FadeImage: React.FC<FadeImageProps> = ({uri, style = {}}) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };
  const onError = (err: NativeSyntheticEvent<ImageErrorEventData>) => {
    setIsLoading(false);
  };

  return (
    <View
      style={{
        ...styles.viewContainer,
        ...(style as any),
      }}>
      {isLoading && (
        <ActivityIndicator
          color={ColorsApp.PRIMARY_COLOR}
          size={30}
          style={{position: 'absolute'}}
        />
      )}
      <Animated.Image
        source={typeof uri !== 'string' ? uri : {uri}}
        onLoad={() => finishLoading()}
        onError={err => onError(err)}
        style={{
          ...(style as any),
          opacity,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FadeImage;
