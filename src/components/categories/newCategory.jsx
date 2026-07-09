import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { createCategory } from "../../managers/categoryManager";

export default function NewCategory() {
  const [categoryName, setCategoryName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createCategory({ name: categoryName }).then(() => {
      navigate("/categories");
    });
  };

  return (
    <div className="container" style={{ maxWidth: "500px" }}>
      <h3>Create Category</h3>
      <FormGroup>
        <Label>Category Name</Label>
        <Input
          type="text"
          value={categoryName}
          onChange={(e) => {
            setCategoryName(e.target.value);
          }}
        />
      </FormGroup>
      <Button color="primary" onClick={handleSubmit}>
        Save
      </Button>
    </div>
  );
}
