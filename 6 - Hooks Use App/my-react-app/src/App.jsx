import { useState, useEffect } from 'react'
import Navbar from './Navbar.jsx'
import Card from "./Card.jsx";





function App() {
  const [posts, setPosts] = useState([])
  const fetchAPI = async() => {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts');
      let data = await response.json();
      setPosts(data); // Update the state with the fetched data
      console.log(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchAPI()
  }, [])
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8 p-4">
        <h1 className="text-3xl font-bold mb-4 text-white">Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map(post => (
            <Card key={post.id} title={post.title} body={post.body} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
