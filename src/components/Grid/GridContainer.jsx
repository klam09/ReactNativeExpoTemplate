import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { SPACING } from '@/themes/constants';

const GridContainer = ({ children, spacing }) => {
  const style = useMemo(
    () => ({
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      margin: (-1 * SPACING * spacing) / 2,
      width: '100%',
    }),
    [spacing]
  );

  return <View style={style}>{children}</View>;
};

GridContainer.propTypes = {
  children: PropTypes.node,
  spacing: PropTypes.number,
};

GridContainer.defaultProps = {
  children: undefined,
  spacing: 2,
};

export default GridContainer;
