import { useEffect, useState } from "react";
import { Form, useLoaderData, useNavigation } from "react-router-dom";
import { customFetch } from "../utilize";
import { toast } from "react-toastify";

const Search = () => {
  const [request, setRequest] = useState(0);

  const navigation = useNavigation();
  const isSubmit = navigation.state === "submitting";

  const { searchTerm } = useLoaderData();

  // check request
  const checkRequest = async () => {
    try {
      const response = await customFetch("/rate_limit");
      // console.log(response);

      const remain = response.data.rate.remaining;
      setRequest(remain);

      if (remain === 0) {
        toast.error("Exceed Hourly Limit !!", { icon: "😵" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkRequest();
  }, []);

  // console.log(request);

  return (
    <section className="mb-8 grid sm:grid-cols-[1fr,auto] gap-x-8 gap-y-4 items-center">
      <Form className="join">
        <input
          type="text"
          name="search"
          placeholder="Enter Github User"
          className="input input-bordered w-full join-item"
          defaultValue={searchTerm}
        />
        {request > 0 && (
          <button
            type="submit"
            className="btn btn-secondary join-item"
            disabled={isSubmit}
          >
            {isSubmit ? "searching" : "search"}
          </button>
        )}
      </Form>
      <h3 className="text-xl capitalize text-neutral-focus">
        requests : {request} / 60
      </h3>
    </section>
  );
};

export default Search;
