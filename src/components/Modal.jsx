import React from 'react'

const Modal = ({onClose, modalData}) => {
console.log(modalData)
  return (

    <div key={modalData.id} className="Modal">
        <div className="modalDialog">
           <div className="modalContent">
               <div  className='modalTop'>
                  <h2>Article</h2>
                  <img width={20}  heigh={20} onClick={onClose} src="../../public/img/remove-btn.svg" alt="Close" />
               </div>
               <div className="articleInner">
                  <h2 className="title">{modalData.title}</h2>
                  <p className="description">{modalData.body}</p>
               </div>
               
           </div>
        </div>
     </div>
     
  )
}

export default Modal
