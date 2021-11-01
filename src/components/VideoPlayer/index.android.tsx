import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  StatusBar,
  Pressable,
  StyleSheet,
  Alert,
} from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import FullscreenIcon from '../../../assets/icons/fullscreen.svg';
import FullscreenExitIcon from '../../../assets/icons/fullscreen_exit.svg';
import PlayIcon from '../../../assets/icons/play.svg';
import PauseIcon from '../../../assets/icons/pause.svg';
import ReplayIcon from '../../../assets/icons/replay_5.svg';
import ForwardIcon from '../../../assets/icons/forward_5.svg';
import PlayerControl from './PlayerControl';

import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Progressbar from './Progressbar';

interface Props {}

const VideoPlayer = ({setOptions}: Props) => {
  const videoRef = useRef(null);
  const timerRef = useRef(null);
  const {width: screenWidth, height: screenHeight} = useWindowDimensions();
  const [fullScreen, setFullScreen] = useState(false);
  const [play, setPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);

  const iconProps = {
    height: 32,
    width: 32,
    fill: '#fff',
  };

  const handleOrientation = useCallback(orientation => {
    if (orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT') {
      setFullScreen(true);
      StatusBar.setHidden(true);
      setOptions({
        headerShown: false,
      });
    } else {
      setFullScreen(false);
      StatusBar.setHidden(false);
      setOptions({
        headerShown: true,
      });
    }
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    Orientation.addOrientationListener(handleOrientation);
    return () => {
      Orientation.removeOrientationListener(handleOrientation);
    };
  }, [handleOrientation]);

  const onLoad = data => {
    setCurrentTime(data.currentTime);
    setDuration(data.duration);
  };

  const onProgress = data => {
    setCurrentTime(data.currentTime);
  };

  const onEnd = () => {
    setPlay(false);
  };

  const onPlay = () => {};

  const onPuase = () => {};

  const onSkipForward = () => {
    setCurrentTime(val => {
      videoRef.current.seek(val + 5);
      return val + 5;
    });
  };

  const onSkipBack = () => {
    setCurrentTime(val => {
      videoRef.current.seek(val - 5);
      return val - 5;
    });
  };

  const onShowControls = () => {
    setShowControls(val => !val);
  };

  const onSlideCapture = data => {
    videoRef.current.seek(data.seekTime);
    setCurrentTime(time.seekTime);
  };

  const handlePlayPause = () => {
    if (play) {
      setPlay(false);
      setShowControls(true);
      return;
    }
    setPlay(true);
    timerRef.current = setTimeout(() => {
      setShowControls(false);
    }, 2000);
  };

  const handleFullScreen = () => {
    fullScreen
      ? Orientation.unlockAllOrientations()
      : Orientation.lockToLandscapeLeft();
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={onShowControls}>
        <View>
          <Video
            ref={videoRef}
            source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}}
            resizeMode="contain"
            controls={false}
            onLoad={onLoad}
            onProgress={onProgress}
            onEnd={onEnd}
            paused={!play}
            style={
              fullScreen
                ? {
                    width: screenWidth,
                    height: screenHeight,
                    backgroundColor: '#000',
                  }
                : {
                    width: screenWidth,
                    height: screenWidth * (9 / 16),
                    backgroundColor: '#000',
                  }
            }
          />
          {showControls && (
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0,0, 0.4)',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <TouchableOpacity
                onPress={handleFullScreen}
                style={{
                  alignSelf: 'flex-end',
                  zIndex: 100,
                }}>
                {fullScreen ? (
                  <FullscreenExitIcon fill="#fff" />
                ) : (
                  <FullscreenIcon fill="#fff" />
                )}
              </TouchableOpacity>
              <View
                style={{flex: 1, flexDirection: 'row', alignSelf: 'center'}}>
                <TouchableOpacity onPress={handleFullScreen}>
                  <ReplayIcon {...iconProps} />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{marginHorizontal: 30}}
                  onPress={handlePlayPause}>
                  {play ? (
                    <PauseIcon {...iconProps} />
                  ) : (
                    <PlayIcon {...iconProps} />
                  )}
                </TouchableOpacity>

                <TouchableOpacity onPress={onSkipForward}>
                  <ForwardIcon {...iconProps} />
                </TouchableOpacity>
              </View>
              <Progressbar
                currentTime={currentTime}
                duration={duration}
                onSlideCapture={onSlideCapture}
                onSlideStart={handlePlayPause}
                onSlideComplete={handlePlayPause}
              />
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default VideoPlayer;
