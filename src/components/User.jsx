import Card from "./Card";
import Followers from "./Followers";

const User = () => {
  return (
    <section className="mt-16 grid gap-x-4 gap-y-16 lg:grid-cols-2">
      <Card />
      <Followers />
    </section>
  );
};

export default User;
