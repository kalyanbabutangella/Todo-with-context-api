import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Presentation(props) {
  const { handleDelete } = props;
  return (
    <span>
      <DeleteIcon onClick={handleDelete} className="deleteicon" />
    </span>
  );
}

export default Presentation;
