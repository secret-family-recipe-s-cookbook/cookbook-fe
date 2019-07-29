import React, {useState} from "react";

function LoginModal (props) {
    {!modalOpen ? null : 
    (
    <ModalContainer>
        <img src='https://i.imgur.com/FV18wy8.jpg' alt='Dinner Table' />
    </ModalContainer>
    )}
}

export default LoginModal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    width: 20rem;
    background: black;
  }
`;