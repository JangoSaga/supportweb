import UserProfile from "./UserProfile";
import { useLogout } from "../hooks/auth/useLogout";
import { useUser } from "../hooks/auth/useUser";
import Loading from "../ui/Loading";
function Header() {
  const { logout, isLoading } = useLogout();
  const { user, isLoading: userLoading } = useUser();
  if (userLoading) return <Loading />;
  return (
    <div className="flex justify-between items-center bg-blue-600 p-4 md:flex-row flex-col">
      <header className=" text-white p-4 ">
        <h2 className="text-2xl font-bold">IT support system</h2>
      </header>
      {user && (
        <div className="flex items-center gap-2">
          <UserProfile />
          <button
            disabled={isLoading}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
