import React, { useEffect, useState } from "react";
import { getTagById, editTag } from "../../modules/tagManager";
import { Link, useParams, useHistory } from "react-router-dom";

export const TagEdit = () => {
  const [singleTag, setTag] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const getTag = (id) => {
    getTagById(id).then(tag => setTag(tag));
    console.log(singleTag)
    setIsLoading(false);
  };

  const handleInputChange = (evt) => {
    const newTag = { ...singleTag }
    let selectedVal = evt.target.value
    newTag.name = selectedVal
    setTag(newTag)
  }

  const EditSingleTag = (e) => {
    e.preventDefault();
    setIsLoading(true);
    editTag(singleTag)
      .then(() => history.push('/tag'))
  }

  useEffect(() => {
    getTag(id);
  }, []);

  console.log(singleTag);
  return (
    <>
      <h3>{singleTag.name}</h3>
      <h3>Please change the Tag</h3>
      <form>
        <input type="text"
          id="tagName"
          name="tagName"
          // placeholder='name'
          onChange={handleInputChange}
          defaultValue={singleTag.name}
        ></input>
      </form>
      <button
        type="button" disabled={isLoading}
        onClick={EditSingleTag}
        className="btn btn-primary"
      >Edit Tag</button>
      <Link to={"/tag"}>
        <button>Back</button>
      </Link>
    </>
  );
}

export default TagEdit;