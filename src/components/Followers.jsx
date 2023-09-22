import { useSelector } from "react-redux";

const Followers = () => {
  const { followers } = useSelector((store) => store.github);
  // console.log(followers);

  return (
    <div className="relative">
      <span className="absolute top-0 left-0 -translate-y-3/4 bg-white px-4 py-2 capitalize text-gray-500">
        Followers
      </span>
      <article className="bg-white px-6 py-4 overflow-auto h-[232px] grid gap-y-4">
        {followers.map((follower) => {
          // rename
          const { id, html_url: link, login, avatar_url: img } = follower;

          return (
            <div key={id} className="flex items-center gap-x-4">
              <img
                src={img}
                alt="person img"
                className="w-14 h-14 object-cover rounded-full"
              />
              <div>
                <h4 className="text-xl tracking-wide">{login}</h4>
                <a href={link} className="btn-link text-neutral">
                  {link}
                </a>
              </div>
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default Followers;
