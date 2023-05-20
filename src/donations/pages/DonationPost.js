import React from 'react';

const DonationPost = ({ post }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
    </div>
  );
};

export default DonationPost;
