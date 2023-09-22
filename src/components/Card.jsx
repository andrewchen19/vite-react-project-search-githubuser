import { useSelector } from "react-redux";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";

const Card = () => {
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = useSelector((store) => store.github.user);

  return (
    <div className="relative">
      <span className="absolute top-0 left-0 -translate-y-3/4 bg-white px-4 py-2 capitalize text-gray-500">
        User
      </span>
      <article className="bg-white px-6 py-4">
        <div className="flex justify-between items-center">
          {/* photo & person info */}
          <div className="flex gap-x-4 items-center">
            <img
              src={avatar_url}
              alt="person photo"
              className="w-14 h-14 object-cover rounded-full"
            />
            <div>
              <h4 className="text-xl tracking-wide">{name}</h4>
              <p className="text-gray-500">@{twitter_username || "John doe"}</p>
            </div>
          </div>
          {/* follow button */}
          <a href={html_url} className="btn btn-sm btn-outline btn-info">
            follow
          </a>
        </div>
        {/* bio */}
        <p className="mt-4">{bio}</p>
        {/* other info */}
        <div className="mt-4 flex flex-col space-y-2">
          <p className="flex gap-x-4 items-center">
            <MdBusiness className="text-gray-500" />
            {company}
          </p>
          <p className="flex gap-x-4 items-center">
            <MdLocationOn className="text-gray-500" />
            {location}
          </p>
          <div className="flex gap-x-4 items-center">
            <span>
              <MdLink className="text-gray-500" />
            </span>
            <a href={blog} className="btn-link text-neutral">
              {blog}
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Card;
