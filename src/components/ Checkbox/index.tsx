import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import CheckboxOutlineIcon from '@assets/icons/check_box_outline.svg';
import CheckboxIcon from '@assets/icons/check_box.svg';
import {SvgProps} from 'react-native-svg';
import useTheme from '@hooks/useTheme';
import Typography from '@components/Typography';
import {moderateScale} from 'react-native-size-matters';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';

type CheckboxData = {
  text: string;
  value: boolean;
};

interface Props {
  data: CheckboxData[];
  onChange: (data: CheckboxData[]) => void;
}

const Checkbox = ({data, onChange}: Props) => {
  const [checkedData, setCheckedData] = useState<CheckboxData[]>(data);
  const hasRendered = useRef(false);
  const theme = useTheme();
  const iconProps: SvgProps = {
    height: 24,
    width: 24,
    fill: theme.primary,
  };

  useEffect(() => {
    if (hasRendered.current === true) {
      onChange(checkedData);
    } else {
      hasRendered.current = true;
    }
  }, [checkedData]);

  const toggleCheckBox = (item: CheckboxData): void => {
    setCheckedData(val =>
      val.map(x => {
        if (x.text === item.text) {
          return {...x, value: !x.value};
        }
        return x;
      }),
    );
  };

  return (
    <View>
      {checkedData.map(item => (
        <BorderlessButton
          onPress={() => toggleCheckBox(item)}
          key={item.text}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {item.value ? (
            <CheckboxIcon
              {...iconProps}
              style={{marginRight: moderateScale(10)}}
            />
          ) : (
            <CheckboxOutlineIcon
              {...iconProps}
              style={{marginRight: moderateScale(10)}}
            />
          )}

          <Typography variant="body2">{item.text}</Typography>
        </BorderlessButton>
      ))}
    </View>
  );
};

export default Checkbox;
