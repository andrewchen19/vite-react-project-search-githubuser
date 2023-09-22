import { useSelector } from "react-redux";
import { GoRepo, GoCodeSquare } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";

const Info = () => {
  const { public_repos, followers, following, public_gists } = useSelector(
    (store) => store.github.user
  );

  const items = [
    {
      id: 1,
      icon: <GoRepo className="w-6 h-6" />,
      label: "repos",
      value: public_repos,
      color: "bg-information",
    },
    {
      id: 2,
      icon: <FiUsers className="w-6 h-6" />,
      label: "followers",
      value: followers,
      color: "bg-success",
    },
    {
      id: 3,
      icon: <FiUserPlus className="w-6 h-6" />,
      label: "following",
      value: following,
      color: "bg-warning",
    },
    {
      id: 4,
      icon: <GoCodeSquare className="w-6 h-6" />,
      label: "gists",
      value: public_gists,
      color: "bg-danger",
    },
  ];

  return (
    <section className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => {
        const { id, icon, label, value, color } = item;

        return (
          <article
            key={id}
            className="bg-white flex gap-x-6 items-center px-6 py-2"
          >
            {/* icons */}
            <div
              className={`${color} w-12 h-12 rounded-full grid place-items-center`}
            >
              {icon}
            </div>
            {/* number & title */}
            <div>
              <h3 className="text-2xl font-semibold tracking-wide">{value}</h3>
              <h4 className="text-gray-500 capitalize">{label}</h4>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Info;
