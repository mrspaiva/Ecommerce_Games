import React from 'react';
import Svg, { Path } from "react-native-svg"

const ArrowIcon = () => {
  return (
    <Svg
      width={28}
      height={25}
      viewBox="0 0 8 5"
    >
      <Path
        fill="#333"
        fillRule="nonzero"
        d="M5.53 6.47l.94-.94-3.053-3.06L6.47-.59l-.94-.94-4 4z"
      />
    </Svg>
  )
}

export default ArrowIcon;