import React from 'react';
import Data from './Data';
import Header from './Header';
import GetButton from './GetButton';
import CreateButton from './CreateButton';
import ShowButton from './ShowButton';
import ClearButton from './ClearButton';
import 'typeface-roboto';

export default () => (
  <React.Fragment>
    <Header />
    <GetButton />
    <ShowButton />
    <CreateButton />
    <ClearButton />
    <Data />
  </React.Fragment>
);
