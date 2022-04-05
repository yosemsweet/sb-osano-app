import React from 'react';
import { ComponentProps } from 'unbounce-smart-builder-sdk-types';
import './react-html-comment';
import HTMLComment from './react-html-comment';

export type DataStructure = { id: string };

const Osano = ({ data, dispatch}: ComponentProps<DataStructure>) => {
  // `<!-- ub:disable_server_cookies --> <!-- id='${data.id}' -->`
  return (
    <>
      <HTMLComment text='ub:disable_server_cookies' />
      <script>
        function osano() {}
      </script>
    </>
  );
};

export default Osano;
