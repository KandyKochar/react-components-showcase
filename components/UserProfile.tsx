interface UserProfileProps {
  name: string;
  bio?: string;
}

export default function UserProfile({ 
  name, 
  bio 
}: UserProfileProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-pink-100 p-6 max-w-md mx-auto">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-md">
          <span className="text-white font-bold text-xl">
            {name.charAt(0).toUpperCase()}
          </span>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        </div>
      </div>
      
      {bio && (
        <div className="mt-4 pt-4 border-t border-pink-100">
          <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
        </div>
      )}
    </div>
  );
}
