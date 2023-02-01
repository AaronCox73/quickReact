import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [showModal, setshowModal] = useState(false);

  function deleteHandler() {
    setshowModal(true);
  }
  function closeModalHandler() {
    setshowModal(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {showModal ? <Modal onCancel={closeModalHandler} /> : null}
      {showModal ? <Backdrop onClick={closeModalHandler} /> : null}
    </div>
  );
}
export default Todo;
