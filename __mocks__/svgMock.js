import React, { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
export const ReactComponent = forwardRef((props, ref) => <span ref={ref} {...props} />);
