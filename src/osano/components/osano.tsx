import React from 'react';
import { ComponentProps } from 'unbounce-smart-builder-sdk-types';
import { OsanoProps } from '../types';

const Osano = ( { data } : ComponentProps<OsanoProps>) => {
  return (
    <>
      <script data-testid="osano-script"
        src={`https://cmp.osano.com/${data.id}/osano.js`}
      />
    </>
  );
};

export default Osano;