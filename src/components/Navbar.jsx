import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();
  const isUser = user && isAuthenticated;

  return (
    <nav className="bg-white mb-8">
      <div className="mx-auto w-[95vw] max-w-7xl py-4 flex justify-center items-center ">
        <div className="flex items-center">
          {isUser && (
            <img
              src={user.picture}
              alt="user picture"
              className="block w-10 h-10 object-cover rounded-full mr-2"
            />
          )}
          {isUser && (
            <p className="text-lg lg:text-xl capitalize mr-6">
              welcome, <span className="font-semibold">{user.name}</span>
            </p>
          )}
          <button
            className="btn btn-xs btn-neutral"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
