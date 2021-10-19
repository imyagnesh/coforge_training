import React, { memo } from 'react';

const Child2 = () => {
  console.log('Child 2');
  return <div>Child 2</div>;
};

export default memo(Child2);
