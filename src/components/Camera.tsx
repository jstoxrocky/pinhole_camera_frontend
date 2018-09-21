import React from 'react';

interface Props {
  value: number;
}

const Camera = (props: Props) => (
  <div>{props.value}</div>
);

export default Camera;
