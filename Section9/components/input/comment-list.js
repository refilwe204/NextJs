import React from 'react'; 
import classes from './comment-list.module.css';

function CommentList(props) {
  
  const { items } = props;

  if (!items || items.length === 0) {
    // Handle the case when items is undefined or an empty array
    return <p>No comments available.</p>;
  }

  return (
    <ul className={classes.comments}>
      {items.map((item) => (
        <li key={item._id}>
          <p>{item.text}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default CommentList;