import { useUser } from "../hooks/auth/useUser";
import Loading from "../ui/Loading";

function UserProfile() {
  const { user, isLoading } = useUser();
  if (isLoading) return <Loading />;
  return (
    <div className="flex items-center space-x-4 py-2 px-4 bg-gray-100 rounded-full shadow-md">
      <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full">
        {user?.role.charAt(0).toUpperCase()}
      </div>
      <h1 className="text-lg font-semibold">{user?.role}</h1>
    </div>
  );
}

export default UserProfile;
