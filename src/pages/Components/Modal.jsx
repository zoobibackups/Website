// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// function Example() {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//         <>
//             <Button variant="primary" onClick={handleShow}>
//                 Launch demo modal
//             </Button>

//             <div class="modal" tabIndex="-1" show={show} onHide={handleClose}>
//                 <div class="modal-dialog">
//                     <div class="modal-content">
//                         <div class="modal-header">
//                             <h5 class="modal-title">Modal title</h5>
//                             <button type="button" class="btn-close" onClick={handleClose}></button>
//                         </div>
//                         <div class="modal-body">
//                             <p>Modal body text goes here.</p>
//                         </div>
//                         <div class="modal-footer">
//                             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                             <button type="button" class="btn btn-primary" onClick={handleClose}>Save changes</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Example;