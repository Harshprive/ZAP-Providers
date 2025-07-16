import React from 'react';
import {
  Ionicons,
  FontAwesome5,
  MaterialIcons,
  FontAwesome,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  Feather,
} from '@expo/vector-icons';
import PropTypes from 'prop-types';

const CustomIcon = ({ name, size, color, type, style }) => {
  let IconComponent;

  switch (type) {
    case 'FontAwesome5':
      IconComponent = FontAwesome5;
      break;
    case 'MaterialIcons':
      IconComponent = MaterialIcons;
      break;
    case 'FontAwesome':
      IconComponent = FontAwesome;
      break;
    case 'AntDesign':
      IconComponent = AntDesign;
      break;
    case 'Entypo':
      IconComponent = Entypo;
      break;
    case 'MaterialCommunityIcons':
      IconComponent = MaterialCommunityIcons;
      break;
    case 'Feather':
      IconComponent = Feather;
      break;
    case 'Ionicons':
    default:
      IconComponent = Ionicons;
  }

  return <IconComponent name={name} size={size} color={color} style={style} />;
};

CustomIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  type: PropTypes.oneOf([
    'Ionicons',
    'FontAwesome5',
    'MaterialIcons',
    'FontAwesome',
    'AntDesign',
    'Entypo',
    'MaterialCommunityIcons',
    'Feather',
  ]),
  style: PropTypes.object,
};

CustomIcon.defaultProps = {
  size: 24,
  color: 'black',
  type: 'Ionicons',
  style: {},
};

export default CustomIcon;
