import React, { Fragment } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import { withTheme } from 'emotion-theming';

import buildModalCss from './buildModalCss';

export const Modal = ({ children, modalCss, overlayCss, theme, ...props }) => {
  const combinedModalCss = buildModalCss({ theme, modalCss, overlayCss });

  return (
    <Fragment>
      <Global styles={combinedModalCss} />
      <ReactModal
        overlayClassName="ArborModalOverlay"
        className="ArborModal"
        {...props}
      >
        {children}
      </ReactModal>
    </Fragment>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  modalCss: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  overlayCss: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};

Modal.defaultProps = {
  modalCss: {},
  overlayCss: {}
};

export default withTheme(Modal);
