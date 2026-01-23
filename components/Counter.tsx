'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-pink-100 p-6 max-w-sm mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive Counter</h3>
        <p className="text-gray-600 text-sm">Demonstrating React state management</p>
      </div>
      
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full border-4 border-pink-200 mb-4">
          <span className="text-3xl font-bold text-pink-600">{count}</span>
        </div>
        <p className="text-gray-500 text-sm">Current Value</p>
      </div>
      
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setCount(count - 1)}
          className="flex-1 bg-rose-500 hover:bg-rose-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
        >
          - 1
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
        >
          + 1
        </button>
      </div>
      
      <button
        onClick={() => setCount(0)}
        className="w-full border border-pink-300 hover:bg-pink-50 text-pink-600 font-medium py-2 px-4 rounded-lg transition-colors"
      >
        Reset
      </button>
    </div>
  );
}
