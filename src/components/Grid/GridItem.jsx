import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { SPACING } from '@/themes/constants';

const GridItem = ({ children, spacing, col }) => {
  const style = useMemo(
    () => ({
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      padding: (SPACING * spacing) / 2,
      flexShrink: '0',
      flexGrow: '0',
      flexBasis: 'auto',
      width: col ? `${(col / 12) * 100}%` : 'auto',
    }),
    [spacing, col]
  );

  return <View style={style}>{children}</View>;
};

GridItem.propTypes = {
  children: PropTypes.node,
  spacing: PropTypes.number,
  col: PropTypes.number,
};

GridItem.defaultProps = {
  children: undefined,
  spacing: 2,
  col: undefined,
};

export default GridItem;
