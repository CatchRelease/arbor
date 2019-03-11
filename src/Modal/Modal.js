/** @jsx jsx */
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import { Fragment } from 'react';
import { Global, css, jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';

import { baseModalCss, baseOverlayCss } from './styles';

const Modal = ({ children, modalCss, overlayCss, ...props }) => {
  const combinedModalCss = theme => css`
    .ArborModalOverlay {
      ${baseOverlayCss(theme)};
      ${typeof overlayCss === 'function' ? overlayCss(theme) : overlayCss};
    }

    .ArborModal {
      ${baseModalCss(theme)};
      ${typeof modalCss === 'function' ? modalCss(theme) : modalCss};
    }
  `;

  return (
    <Fragment>
      <Global styles={combinedModalCss} />
      <ReactModal
        overlayClassName="ArborModalOverlay"
        className="ArborModal"
        {...omit(props, 'theme')}
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
