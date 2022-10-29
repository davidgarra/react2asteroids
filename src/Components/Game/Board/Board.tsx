import { Slot as EngineSlot } from '@/Engine';
import { useTheme } from '@/Hooks';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Slot } from '../Slot';

export type BoardProps = {
  variant?: 'retro';
  slots?: EngineSlot[][];
  style?: StyleProp<ViewStyle>;
};

const Board: React.FC<BoardProps> = ({ slots, style }) => {
  const { Layout } = useTheme();

  return (
    <View style={[styles.board, style]}>
      {slots?.map((row, rowIndex) => (
        <View key={rowIndex.toString()} style={[Layout.row, Layout.fill]}>
          {row.map((slot, colIndex) => (
            <Slot key={`${rowIndex}_${colIndex}`} style={Layout.fill} content={slot.content} />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: { backgroundColor: 'black' },
});

export default Board;
