import { useEffect, useState }  from "react";
import { getTags, deleteTag } from "../../managers/tagManager";
import { Link } from "react-router-dom";


export default function TagManagement() {
  const [tags, setTags] = useState([]);

  const getAllTags = () => {
    getTags().then(setTags);
  };

  useEffect(() => {
    getAllTags();
  }, []);

  return (
    <div>
      <p>Tags</p>
      <Link to="/tags/create">
      Create New Tag
      </Link>
      <div>
        {tags.map((t) => (
          <div key={t.id}>
            {t.name}
            <Link to={`/tags/edit/${t.id}`}>
            Edit Tag
            </Link>
            <button
            onClick={() => {
              if (window
                .confirm(`Delete the tag: "${t.name}"?`)) {
                  deleteTag(t.id)
                  .then(getAllTags);
                }
              }} 
            >
              Delete Tag
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
