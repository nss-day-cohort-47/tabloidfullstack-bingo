import React, { useEffect, useState } from "react";
import Tag from './Tag';
import { getTagById, deleteTag } from "../../modules/tagManager";
// import { deletePostTag, getAllPostTags } from "../../modules/postTagManager";
import { Link, useParams, useHistory } from "react-router-dom";

const TagDelete = () => {
  const [singleTag, setTag] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  // const [postTags, setPostTags] = useState([]);

  const getTag = (id) => {
    getTagById(id).then(tag => setTag(tag));
    console.log(singleTag)
    setIsLoading(false);
  };

  console.log(id);

  // const getPostTags = () => {
  //   getAllPostTags().then(postTag => setPostTags(postTag));
  // };


  const DeleteSingleTag = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // let postTagsToDelete = postTags.filter(postTag => postTag.TagId == singleTag.id);
    // postTagsToDelete.map(postTag => deletePostTag(postTag.id));

    deleteTag(singleTag.id)
      .then(() => history.push('/tag'))
  }

  useEffect(() => {
    getTag(id);
    // getPostTags();
  }, []);

  console.log(singleTag);
  return (
    <>
      <h3>{singleTag.name}</h3>
      <button
        type="button" disabled={isLoading}
        onClick={DeleteSingleTag}
        className="btn btn-primary"
      >Delete Tag</button>
      <Link to={"/tag"}>
        <button>Back</button>
      </Link>
    </>
  );
};

export default TagDelete;