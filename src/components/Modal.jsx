import React from 'react';

const Modal = ({ onClose }) => {
  return (
    <div className="Modal">
      <div className="modalDialog">
        <div className="modalContent">
          <div className="modalTop">
            <h2>Article</h2>
            <img
              width={20}
              heigh={20}
              onClick={onClose}
              src="../../public/img/remove-btn.svg"
              alt="Close"
            />
          </div>
          <div className="articleInner">
            <h2 className="title">wwwwwww</h2>
            <p className="description">gfgdfgdfgdfg</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
