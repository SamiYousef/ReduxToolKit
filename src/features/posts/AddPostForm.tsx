import { useState } from "react";
import { addPost } from "./postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUers, IUser } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setCotent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUers);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setCotent(e.target.value);
  const onAuthorChange = (e) => setUserId(e.target.value);

  const canSave = title && content && userId;
  const onSavePost = () => {
    if (canSave) {
      dispatch(addPost(title, content, userId));

      setTitle("");
      setCotent("");
      setUserId("");
    }
  };

  const userOptions = users.map((user: IUser) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h3>Add a new post</h3>
      <form>
        <label htmlFor="postTitle">Post Title</label>
        <input
          id="postTitle"
          type="text"
          name="postTitle"
          value={title}
          onChange={onTitleChange}
        />

        <label htmlFor="postAuthor">Author</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChange}>
          <option />
          {userOptions}
        </select>

        <label htmlFor="postContent">Post Content</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChange}
        />

        <button
          className="reactionButton"
          type="button"
          onClick={onSavePost}
          disabled={!canSave}
        >
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
