const initState = {
  posts: [
    {
      id: '1',
      title: 'How to get a job',
      body:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, tempora, deleniti, consectetur sed totam illum cupiditate dignissimos ab quas quasi accusantium. Sint error ipsa enim impedit officiis nam suscipit earum?',
    },
    {
      id: '2',
      title: 'How to get a wife',
      body:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, tempora, deleniti, consectetur sed totam illum cupiditate dignissimos ab quas quasi accusantium. Sint error ipsa enim impedit officiis nam suscipit earum?',
    },
    {
      id: '3',
      title: 'Learn React Redux',
      body:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, tempora, deleniti, consectetur sed totam illum cupiditate dignissimos ab quas quasi accusantium. Sint error ipsa enim impedit officiis nam suscipit earum?',
    },
  ],
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
