import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { createTag } from "../../managers/tagManager";

export default function newTag() {
    const [tagName, setTagName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        createTag({ name: tagName }).then(() => {
            navigate("/tag");
        });
    };

    return (
        <div 
        className="tag" 
        style={{ maxWidth: "500px" }}>
            <h3>Tag Name</h3>
            <FormGroup>
            <Input 
            type="text"
            value={categoryName}
            onChange={(e) => {
                setTagName(e.target.value);
            }}
            />
            </FormGroup>
            <button color="primary" 
            onClick={handleSubmit}>
                Save
            </button>
        </div> 
    );
}
