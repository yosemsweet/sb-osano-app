import React from 'react';
import { ControlPanelProps } from 'unbounce-smart-builder-sdk-types';

import { DataStructure } from './osano';

export const Panel = ({ dispatch }: ControlPanelProps<DataStructure>) => (
  <div data-testid="custom-osano-id">
    Osano ID
  </div>
);
