import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface Props {
  history: RouteComponentProps['history'];
  // location: RouteComponentProps['history'];
  // match: RouteComponentProps['history'];
}

const About = ({ history }: Props) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          history.replace('/contact');
        }}
      >
        Go To Contact
      </button>
    </div>
  );
};

export default About;
