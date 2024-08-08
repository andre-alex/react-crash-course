import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import Container from '../components/container/Container';
import PostCard from '../components/PostCard';

function AllPosts() {

  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if(posts){
        setPosts(posts.documents);
      } else{

      }
    });
  }, [])

  if (posts.length === 0) {
    return (
      <div className="w-full py-8">
        <Container>
          <div className="flex flex-wrap">
            <h1>No posts available</h1>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts