import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { getCategory, updateCategory } from "../../managers/categoryManager";

export default function EditCategory() {
  const [category, setCategory] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCategory(id).then(setCategory);
  }, [id]);

  if (!category) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCategory(category)
    .then(() => {
    navigate("/categories");
    });
  };

  return (
    <div className="container" style={{ maxWidth: "500px" }}>
    <h3>
    Edit Category
    </h3>
      <FormGroup>
        <Label>
        Category Name
        </Label>
        <Input
          type="text"
          value={category.name}
          onChange={(e) => {
            setCategory({ ...category, name: e.target.value });
          }}
        />
      </FormGroup>
      <Button 
      color="primary" 
      onClick={handleSubmit}
      >
        Save
      </Button>
      <Button
        color="secondary"
        onClick={() => {
        navigate("/categories");
        }}
      >
        Cancel
      </Button>
    </div>
  );
}
