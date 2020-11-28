import React from 'react';
import styled from 'styled-components';
import closeButton from 'images/close1.png';

interface ModalProps {
  visible: boolean
  close: () => void;
  children: JSX.Element;
}

const Modal:React.FC<ModalProps> = ({ visible, close, children }: ModalProps) => (
  <>
    <Dimmed visible={visible} />
    <Wrapper visible={visible}>
      <CloseButton onClick={close} />
      {children}
    </Wrapper>
  </>
);

const Dimmed = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(51, 51, 51, 0.8);
  z-index: 99;
`;

const Wrapper = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  width: inherit;
  outline: 0;
`;

const CloseButton = styled.div`
  margin-left: auto;
  width: 24px;
  height: 24px;
  background-image: url(${closeButton});
  background-size: 24px;
`;

export default Modal;
