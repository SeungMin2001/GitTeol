import React from 'react'
import { Svg, Path } from 'react-native-svg'

const HomeIcon = ({ focused, size = 20 }) => {
  const color = focused ? '#000' : '#999'

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 11.5358V22H16V17C16 14.7909 14.2091 13 12 13C9.79086 13 8 14.7909 8 17V22H2V11.5358L12 2L22 11.5358Z"
        fill={color}
      />
    </Svg>
  )
}

export default HomeIcon