import { FC } from 'react';
import ReactModal from 'react-modal';
import { Global, Theme, withTheme } from '@emotion/react';

import buildModalCss, { Css } from './buildModalCss';

export type Props = ReactModal.Props & {
  modalCss?: Css;
  overlayCss?: Css;
};

type InternalProps = Props & {
  theme: Theme;
};

export const Modal: FC<InternalProps> = ({
  children,
  modalCss,
  overlayCss,
  theme,
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

export default withTheme(Modal);
