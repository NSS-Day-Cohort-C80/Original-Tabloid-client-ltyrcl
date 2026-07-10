import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { getTag, updateTag } from "../../managers/tagManager";

export default function EditTag() {
  const [tag, setTag] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getTag(id).then(setTag);
  }, [id]);

  if (!tag) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTag(tag).then(() => {
      navigate("/tag");
    });
  };

  return (
    <div className="container" style={{ maxWidth: "500px" }}>
      <h3>Edit Tag</h3>
      <FormGroup>
        <Label>Tag Name</Label>
        <Input
          type="text"
          value={category.name}
          onChange={(e) => {
            setTag({ ...tag, name: e.target.value });
          }}
        />
      </FormGroup>
      <Button color="primary" onClick={handleSubmit}>
        Save
      </Button>
      <Button
        color="secondary"
        onClick={() => {
          navigate("/tag");
        }}
      >
        Cancel
      </Button>
    </div>
  );
}
