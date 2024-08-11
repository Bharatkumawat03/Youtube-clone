import React from 'react'

const commentsData = [
    {
        name: "guest",
        text: "lorem ipsum dolor sit amet, consectectu adip",
        replies: [],
    },
    {
        name: "guest",
        text: "lorem ipsum dolor sit amet, consectectu adip",
        replies: [
            {
                name: "guest",
                text: "lorem ipsum dolor sit amet, consectectu adip",
                replies: [],
            },
            {
                name: "guest",
                text: "lorem ipsum dolor sit amet, consectectu adip",
                replies: [{
                    name: "guest",
                    text: "lorem ipsum dolor sit amet, consectectu adip",
                    replies: [{
                        name: "guest",
                        text: "lorem ipsum dolor sit amet, consectectu adip",
                        replies: [],
                    },],
                },
                {
                    name: "guest",
                    text: "lorem ipsum dolor sit amet, consectectu adip",
                    replies: [],
                },
                {
                    name: "guest",
                    text: "lorem ipsum dolor sit amet, consectectu adip",
                    replies: [
                        {
                            name: "guest",
                            text: "lorem ipsum dolor sit amet, consectectu adip",
                            replies: [{
                                name: "guest",
                                text: "lorem ipsum dolor sit amet, consectectu adip",
                                replies: [],
                            },],
                        },
                    ],
                },
            ],
            },
        ],
    },{
        name: "guest",
        text: "lorem ipsum dolor sit amet, consectectu adip",
        replies: [],
    },{
        name: "guest",
        text: "lorem ipsum dolor sit amet, consectectu adip",
        replies: [],
    },{
        name: "guest",
        text: "lorem ipsum dolor sit amet, consectectu adip",
        replies: [],
    },{
        name: "guest",
        text: "lorem ipsum dolor sit amet, consectectu adip",
        replies: [],
    },{
        name: "guest",
        text: "lorem ipsum dolor sit amet, consectectu adip",
        replies: [],
    },
];

const Comment = ({data}) => {
    const {name,text,replies} = data;
    return <div className='flex bg-gray-100 dark:bg-gray-900 dark:bg-opacity-90 p-2 my-2'>
            <img className='h-10' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
            <div className='p-2'>{text}</div>
        </div>
}

const CommentsList = ({comments}) => {
    return comments.map((comment, index) => (
        <div className='dark: bg-gray-950'>
            <Comment key={index} data={comment} />
            <div className='ps-16 border-s-2'>
                <CommentsList comments={comment.replies} />
            </div>
        </div>
        ))
    }


const CommentSection = () => {
  return (
    <div>
      <h1>Comments </h1>
      <CommentsList comments={commentsData} />

    </div>
  )
}

export default CommentSection;
