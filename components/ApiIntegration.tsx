'use client';

import { useState } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function ApiIntegration() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data.slice(0, 3)); // Show only 3 posts
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-pink-100 p-6 max-w-2xl mx-auto">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">API Integration Demo</h3>
        <p className="text-gray-600 text-sm">External data fetching</p>
      </div>

      <div className="flex space-x-2 mb-6">
        <button
          onClick={fetchPosts}
          disabled={loading}
          className="bg-pink-500 hover:bg-pink-600 disabled:bg-gray-300 text-white font-medium px-4 py-2 rounded-lg transition-colors"
        >
          {loading ? 'Loading...' : 'Fetch Posts'}
        </button>
        <button
          onClick={() => setPosts([])}
          className="border border-pink-300 hover:bg-pink-50 text-pink-600 font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Clear
        </button>
      </div>

      {posts.length > 0 ? (
        <div className="space-y-3">
          {posts.map(post => (
            <div key={post.id} className="p-4 bg-pink-50 rounded-lg border border-pink-100">
              <h5 className="font-medium text-gray-800 mb-2">
                {post.title}
              </h5>
              <p className="text-sm text-gray-600">
                {post.body.substring(0, 100)}...
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-pink-400">🌐</span>
          </div>
          <p className="text-sm">Click "Fetch Posts" to load data</p>
        </div>
      )}
    </div>
  );
}
