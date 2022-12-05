import { useEffect, useCallback, useState } from 'react';
import axios from 'axios';

function App() {

  const [posts, setPosts] = useState([]);
  console.log("APP STARTED.......");
  const fetchPosts = useCallback(async () => {
    // const { data } = await axios.get('http://mood-night.com/api/posts');
    const { data } = await axios.get('http://www.mood-night.xyz/api/posts');
    console.log("data", data);
    setPosts(data);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <h1>MoodNight</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
