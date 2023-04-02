import { Button, Card, CardContent } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import Modal from "./Modal";
import "./style.scss";

export default function BasicCard({ name, videoUrl, onDeleteCard }) {
  const [showModal, setShowModal] = React.useState(false);
  const [cardName, setCardName] = React.useState(name);
  const [edit, setEdit] = React.useState(false);

  const onCancel = () => {
    setShowModal((prev) => !prev);
  };

  const handleDelete = () => {
    onDeleteCard(name);
  };
  return (
    <div className="card-container">
      <Card
        sx={{ maxWidth: 345, padding: 0, backgroundColor: "cadetblue" }}
        elevation={20}
      >
        <CardContent>
          <div className="name-container">
            {edit ? (
              <input
                type="text"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                onBlur={() => setEdit(false)}
                autoFocus
              />
            ) : (
              <div onClick={() => setEdit(true)}>
                <u>{cardName}</u>
              </div>
            )}
            <div className="icons">
              <EditIcon fontSize="small" onClick={() => setEdit(true)} />
            </div>
          </div>
          <br />
          <span>click the link below to open video</span>
          <Button onClick={onCancel} className="cardbtn">
            {videoUrl}
          </Button>
          <div className="delete-icon">
            <button onClick={handleDelete}>Delete Card</button>
            <DeleteIcon onClick={handleDelete} fontSize="small" />
          </div>
          <Modal showModal={showModal} setShowModal={setShowModal} />
        </CardContent>
      </Card>
    </div>
  );
}
