import { useState, useEffect } from 'react';
import React from 'react'; 

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const clearForm = () => {
    setTitle('');
    setName('');
    setComment('');
  };

  
  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const submitPost = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, name, comment }),
      });
      if (!response.ok) {
        throw new Error('Failed to submit post');
      }
      await fetchPosts(); // Refresh posts after submission
    } catch (error) {
      console.error('Error submitting post:', error);
    }
    clearForm()
  };

}