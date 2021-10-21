import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export enum ColorsApp {
  PRIMARY_COLOR = '#E70D32',
  PRIMARY_OPACITY_COLOR = 'rgba(231,13,50,0.09)',
  WHITE_COLOR = '#FFFFFF',
  BLACK_COLOR = '#000000',
  GRAY_COLOR = '#C7C7C7',
  BACKGROUND_MODAL_COLOR = 'rgba(0,0,0,0.4)',
}

export enum DimensionsDevice {
  WIDTH_DEVICE = width,
  HEIGHT_DEVICE = height,
}
