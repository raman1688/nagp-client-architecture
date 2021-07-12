import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Directory from './components/directory/directory.component.jsx';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Directory history={history} />
      </StylesProvider>
    </div>
  );
};
