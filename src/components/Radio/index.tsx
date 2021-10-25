import Typography from '@components/Typography';
import useTheme from '@hooks/useTheme';
import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import RadioIcon from '../../../assets/icons/radio.svg';
import RadioUncheckedIcon from '../../../assets/icons/radio_unchecked.svg';

interface RadioData {
  text: string;
  value: string | number;
  checked: boolean;
}

interface Props {
  data: RadioData[];
}

const Radio = ({
  field: {name},
  form: {setFieldValue, touched, errors},
  data,
}: Props) => {
  console.warn(errors);
  const [selectedOption, setselectedOption] = useState(data);
  const theme = useTheme();
  const error = errors[name];
  const toggleRadio = item => {
    const newSelectedOptions = data.map(x => {
      if (x.value === item.value) {
        return {...x, checked: true};
      }
      return {...x, checked: false};
    });
    setFieldValue(name, newSelectedOptions.find(x => x.checked)?.value);
    setselectedOption(newSelectedOptions);
  };
  const renderItem = ({item}) => {
    return (
      <RectButton
        onPress={() => toggleRadio(item)}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {item.checked ? (
          <RadioIcon
            height={24}
            width={24}
            fill={theme.primary}
            style={{marginRight: 10}}
          />
        ) : (
          <RadioUncheckedIcon
            height={24}
            width={24}
            fill={theme.primary}
            style={{marginRight: 10}}
          />
        )}
        <Typography variant="body3">{item.text}</Typography>
      </RectButton>
    );
  };

  return (
    <View>
      <FlatList
        horizontal
        data={selectedOption}
        renderItem={renderItem}
        ItemSeparatorComponent={() => {
          return <View style={{width: 10}} />;
        }}
      />
      {!!error && <Typography variant="inlineError">{error}</Typography>}
    </View>
  );
};

export default Radio;
