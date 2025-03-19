/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
const commentsData = [
  {
    name: "Siddh ",
    text: "Comment",
    replies: [],
  },
  {
    name: "Siddh ",
    text: "Comment",
    replies: [
      {
        name: "Siddh ",
        text: "Comment",
        replies: [],
      },
      {
        name: "Siddh ",
        text: "Comment",
        replies: [
          {
            name: "Siddh ",
            text: "Comment",
            replies: [
              {
                name: "Siddh ",
                text: "Comment",
                replies: [
                  {
                    name: "Siddh ",
                    text: "Comment",
                    replies: [
                      {
                        name: "Siddh ",
                        text: "Comment",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Siddh ",
                    text: "Comment",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Siddh ",
    text: "Comment",
    replies: [],
  },
  {
    name: "Siddh ",
    text: "Comment",
    replies: [],
  },
  {
    name: "Siddh ",
    text: "Comment",
    replies: [],
  },
  {
    name: "Siddh ",
    text: "Comment",
    replies: [],
  },
];

const Comment = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2 w-[600px]">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5  ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-xl">Comments</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
