import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import React from 'react';
import { ComponentProps } from 'unbounce-smart-builder-sdk-types';

import Osano, { DataStructure } from './osano';

const setMock = jest.fn();
const props = {
  data: { id: 'Osano ID' },
  dispatch: (callback: any) => {
    callback({ get: () => ({ set: setMock }) });
  },
} as ComponentProps<DataStructure>;

const renderComponent = () => {
  return render(<Osano {...props} />);
};

describe('Osano Component', () => {
  test('renders content', async () => {
    renderComponent();

    await waitFor(() => {
      expect(screen.getByTestId('osano-content').textContent).toEqual('Osano');
    });
  });
});
