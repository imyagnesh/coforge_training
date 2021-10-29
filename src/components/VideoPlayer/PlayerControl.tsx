import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import PlayIcon from '../../../assets/icons/play.svg';
import PauseIcon from '../../../assets/icons/pause.svg';
import ReplayIcon from '../../../assets/icons/replay_5.svg';
import ForwardIcon from '../../../assets/icons/forward_5.svg';

interface Props {}

const PlayerControl = ({
  playing,
  onPlay,
  onPuase,
  skipForward,
  skipBack,
}: Props) => {
  const iconProps = {
    height: 32,
    width: 32,
    fill: '#fff',
  };
  return (
    
  );
};

export default PlayerControl;
