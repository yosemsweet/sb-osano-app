import React from 'react';
import { ComponentProps } from 'unbounce-smart-builder-sdk-types';
import './react-html-comment';

export type DataStructure = { id: string };

const Osano = ({ data, dispatch}: ComponentProps<DataStructure>) => {
  // `<!-- ub:disable_server_cookies --> <!-- id='${data.id}' -->`
  return (
    <>
      <script dangerouslySetInnerHTML={{__html: `<!-- ub:disable_server_cookies -->`}}/>

      <script dangerouslySetInnerHTML={{__html:
        `function osano(){}`
      }} />
    </>
  );
};

export default Osano;
