import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import CheckboxOutlineIcon from '@assets/icons/check_box_outline.svg';
import CheckboxIcon from '@assets/icons/check_box.svg';
import {SvgProps} from 'react-native-svg';
import Typography from '@components/Typography';
import {moderateScale} from 'react-native-size-matters';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
import {useTheme} from '@react-navigation/native';

type CheckboxData = {
  text: string;
  value: boolean;
};

interface Props {
  data: CheckboxData[];
  onChange: (data: CheckboxData[]) => void;
}

const Checkbox = ({
  field: {name, value}, // { name, value, onChange, onBlur }
  form: {setFieldValue}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  data,
}: Props) => {
  const [checkedData, setCheckedData] = useState<CheckboxData[]>(value || data);
  const hasRendered = useRef(false);
  const {colors} = useTheme();
  const iconProps: SvgProps = {
    height: 24,
    width: 24,
    fill: colors.primary,
  };

  useEffect(() => {
    if (hasRendered.current === true) {
      setFieldValue(name, checkedData[0].value);
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
