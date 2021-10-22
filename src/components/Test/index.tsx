import React from 'react';
import history from '../../customHistory';

interface Props {}

const Test = (props: Props) => {
  console.log('test', props);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          history.push('/about');
        }}
      >
        Go to About Page
      </button>
    </div>
  );
};

export default Test;
