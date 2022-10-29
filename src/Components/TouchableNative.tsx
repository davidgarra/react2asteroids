import React from 'react';
import {
  Platform,
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

export type TouchableNativeProps = TouchableOpacityProps | TouchableNativeFeedbackProps;

const TouchableNative: React.FC<TouchableNativeProps> = (props) => {
  return Platform.OS === 'ios' ? (
    <TouchableOpacity {...props} />
  ) : (
    <TouchableNativeFeedback {...props} />
  );
};

export default TouchableNative;
