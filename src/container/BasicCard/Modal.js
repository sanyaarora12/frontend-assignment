import { Button, Dialog } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

export default function Modal({ showModal, setShowModal, videoUrl }) {
  const [cardVideoUrl, setCardVideoUrl] = React.useState(videoUrl);
  const handleClose = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div className="modal">
      <Dialog open={showModal} onClose={handleClose}>
        <Button onClick={handleClose} />
        <div className="modal-content">
          {/* <video src={cardVideoUrl} controls /> */}
          <video controls>
            <source src={cardVideoUrl} type="video/mp4" />
          </video>
          <button className="x-btn" onClick={handleClose}>
            X
          </button>
        </div>
      </Dialog>
    </div>
  );
}
// eslint-disable-next-line react/no-typos
Modal.PropTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};
