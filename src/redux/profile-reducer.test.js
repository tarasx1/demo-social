import profileReducer, {
  addPostActionCreator,
  deletePost,
} from './profile-reducer';

let state = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: 'Its my first post', likesCount: 15 },
    { id: 3, message: 'blabla', likesCount: 15 },
    { id: 4, message: 'da da', likesCount: 15 },
  ],
};

test('length posts should be incremented', () => {
  //1.test date
  let action = addPostActionCreator('TESTING_SYSTEM');

  //2. action
  let newState = profileReducer(state, action);
  //3. expectation
  expect(newState.posts.length).toBe(5);
});

test('message of new post shpuld be correct', () => {
  //1.test date
  let action = addPostActionCreator('TESTING_SYSTEM');

  //2. action
  let newState = profileReducer(state, action);
  //3. expectation
  expect(newState.posts[4].message).toBe('TESTING_SYSTEM');
});

test('after deleting length of messages should be decrement', () => {
  //1.test date
  let action = deletePost(1);

  //2. action
  let newState = profileReducer(state, action);
  //3. expectation
  expect(newState.posts.length).toBe(3);
});

test('after deleting length shouldnt decrement if id is incorrect', () => {
  //1.test date
  let action = deletePost(1000);

  //2. action
  let newState = profileReducer(state, action);
  //3. expectation
  expect(newState.posts.length).toBe(4);
});
