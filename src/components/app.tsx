import React from 'react';
import Data from './Data';
import Header from './Header';
import GetButton from './GetButton';
import CreateButton from './CreateButton';
import ShowButton from './ShowButton';
import 'typeface-roboto';

export default () => (
  <React.Fragment>
    <Header />
    <GetButton />
    <ShowButton />
    <CreateButton />
    <Data />
  </React.Fragment>
);
