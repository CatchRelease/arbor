import React from 'react';

import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithTheme from '../../../utils/renderWithTheme';

import Popover from '../Popover';

describe('<Popover />', () => {
  const baseProps = {
    content: (
      <>
        Hello World
        <button type="submit">inside</button>
      </>
    )
  };

  const renderPopover = (props) =>
    renderWithTheme(
      <div>
        <Popover {...{ ...baseProps, ...props }}>
          <button type="button">Trigger</button>
        </Popover>
        <div data-testid="outside">Outside of the popover</div>
      </div>
    );

  const renderAndOpen = (props) => {
    const utils = renderPopover(props);
    userEvent.click(screen.getByRole('button', { name: 'Trigger' }));
    return utils;
  };

  it('is closed by default', () => {
    renderPopover();

    expect(screen.queryByText('Hello World')).not.toBeInTheDocument();
  });

  describe('opening the popover', () => {
    it('opens the popover on trigger click', () => {
      renderPopover();
      userEvent.click(screen.getByRole('button', { name: 'Trigger' }));

      expect(screen.queryByText('Hello World')).toBeInTheDocument();
    });

    it('calls the onOpen prop', () => {
      const onOpenSpy = jest.fn();
      renderPopover({ onOpen: onOpenSpy });
      userEvent.click(screen.getByRole('button', { name: 'Trigger' }));

      expect(onOpenSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('closing the popover', () => {
    let onClose;

    beforeEach(() => {
      onClose = jest.fn();
      renderAndOpen({ onClose });
    });

    const itClosesThePopover = () => {
      it('closes the popover', async () => {
        await waitFor(() => {
          expect(screen.queryByText('Hello World')).not.toBeInTheDocument();
        });
      });

      it('calls the onClose prop', async () => {
        await waitFor(() => {
          expect(onClose).toHaveBeenCalledTimes(1);
        });
      });
    };

    describe('clicking on the trigger', () => {
      beforeEach(() => {
        userEvent.click(screen.getByRole('button', { name: 'Trigger' }));
      });

      itClosesThePopover();
    });

    describe('clicking outside the popover', () => {
      beforeEach(() => {
        userEvent.click(screen.getByTestId('outside'));
      });

      itClosesThePopover();
    });

    describe('clicking inside the popover', () => {
      it('does not close the popover', () => {
        userEvent.click(screen.getByRole('button', { name: 'inside' }));

        expect(screen.queryByText('Hello World')).toBeInTheDocument();
      });
    });

    describe('pressing escape', () => {
      beforeEach(() => {
        userEvent.type(screen.getByText('Hello World'), '{esc}');
      });

      itClosesThePopover();
    });
  });

  describe('content', () => {
    it('defaults to overflow: hidden', () => {
      renderAndOpen();

      expect(screen.getByText('Hello World').closest('div')).toHaveStyle({
        overflow: 'hidden'
      });
    });

    it('supports passing explicit overflow', () => {
      renderAndOpen({
        contentProps: { overflow: 'visible' }
      });

      expect(screen.getByText('Hello World').closest('div')).toHaveStyle({
        overflow: 'visible'
      });
    });
  });
});
