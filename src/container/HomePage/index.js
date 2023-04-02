import { Button, Card } from "@mui/material";
import React, { useState } from "react";
import data from "./data";
import "./style.scss";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function HomePage() {
  const [first, setfirst] = useState(" name");

  const handleClick = (e) => {
    setfirst(e.target.value);
  };
  return (
    <div>
      <h1>home</h1>
      <div className="card-container">
        {data.map((item) => (
          <div>
            <Card elevation={20}>
              <p>{item.name}</p>
              <video controls>
                <source src={item.video} type="video/mp4" />
              </video>
              <Button onClick={handleClick}>
                Edit <EditIcon />{" "}
              </Button>
              <Button>
                Delete <DeleteIcon />{" "}
              </Button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
