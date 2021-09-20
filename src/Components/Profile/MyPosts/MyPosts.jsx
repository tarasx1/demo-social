import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  maxLengthCreator,
  required,
} from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo((props) => {
  console.log('RENDER');

  let postsElements = [...props.posts]
    .reverse()
    .map((p) => <Post message={p.message} likesCount={p.likesCount} />);
  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postBlock}>
      <h3>My post</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPostText"
          placeholder={'Post message'}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add posts</button>
      </div>
    </form>
  );
};

let AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(
  AddNewPostForm
);

export default MyPosts;
