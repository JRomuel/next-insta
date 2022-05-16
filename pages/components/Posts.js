import React from 'react';
import Post from "./Post";

const posts = [
    {
        id: '123',
        username: 'romuel',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'Let\'s build Instagram 2.0 with REACT.JS! (Next.js, Tailwind CSS, Firebase v9, NextAuth, Recoil)',
    },
    {
        id: '123',
        username: 'romuel',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'Let\'s build Instagram 2.0 with REACT.JS! (Next.js, Tailwind CSS, Firebase v9, NextAuth, Recoil)',
    },
    {
        id: '123',
        username: 'romuel',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'Let\'s build Instagram 2.0 with REACT.JS! (Next.js, Tailwind CSS, Firebase v9, NextAuth, Recoil)',
    },
]


function Posts() {
  return (
    <div>
        {posts.map((post) => (
            <Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption}
            />
        ))}
     
    </div>
  )
}

export default Posts