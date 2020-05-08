import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import { withTheme } from 'emotion-theming';

import buildModalCss from './buildModalCss';

export const Modal = ({
  children,
  modalCss,
  overlayCss,
  theme, // eslint-disable-line react/prop-types
  ...props
}) => {
  const combinedModalCss = buildModalCss({ theme, modalCss, overlayCss });

  return (
    <>
      <Global styles={combinedModalCss} />
      <ReactModal
        overlayClassName="ArborModalOverlay"
        className="ArborModal"
        {...props}
      >
        {children}
      </ReactModal>
    </>
  );
};

Modal.propTypes = {
  /**
   * Content to be displayed with the modal
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,

  /**
   * Optional overrides of the modal css. This will be injected via emotion's
   * Global style component.
   */
  modalCss: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

  /**
   * Optional overrides to the overlay CSS. This will be injected via emotion's
   * Global style component.
   */
  overlayCss: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};

Modal.defaultProps = {
  modalCss: {},
  overlayCss: {}
};

export default withTheme(Modal);
