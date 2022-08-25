// import shortid from "shortid";
//selectors
export const getAllPosts = state => state.posts;
//getPostById nawiasy???
export const getPostById  =({posts}, postId) => posts.find((post) => post.id === postId);
// actions
const createActionName = actionName => `app/posts/${actionName}`;
const ADD_POST = createActionName('ADD_POST');
const REMOVE_POST = createActionName('REMOVE_POST');
// action creators
export const removePost = (payload) => ({ type: REMOVE_POST, payload });

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...statePart, {...action.payload}];
    case REMOVE_POST:
      return {
        state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
      // [...
    default:
      return statePart;
  };
};

export default postsReducer;