import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import React from 'react';
import { ComponentProps } from 'unbounce-smart-builder-sdk-types';

import Osano from './osano';
import { OsanoProps } from '../types';

const setMock = jest.fn();
const props = {
  data: { id: 'Osano ID' },
  dispatch: (callback: any) => {
    callback({ get: () => ({ set: setMock }) });
  },
} as ComponentProps<OsanoProps>;

const renderComponent = () => {
  return render(<Osano {...props} />);
};



describe('Osano Component', () => {
  test('renders osano script', async () => {
    const expectedOsanoScriptSrc = `https://cmp.osano.com/${props.data.id}/osano.js`;

    renderComponent();

    await waitFor(() => {
      expect(screen.getByTestId('osano-script').getAttribute('src')).toEqual(
        expect.stringContaining(expectedOsanoScriptSrc));
    });
  });
});
