import React, { useContext, useState } from 'react'
import { Platform, Switch } from 'react-native'

interface Props {
  isOn: boolean;
  onChange?: (value: boolean) => void
}
const CustomSwitch = ({ isOn, onChange }: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn)
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled)
    onChange!(!isEnabled)
  };

  return (
    <Switch
      trackColor={{ false: '#D9D9DB', true: '084F6A' }}
      thumbColor={Platform.OS == 'android' ? '084F6A' : ''}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  )
}

export default CustomSwitch