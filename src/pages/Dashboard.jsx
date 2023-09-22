import { useNavigation, Navigate } from "react-router-dom";
import { Info, Navbar, Repos, Search, User, Loading } from "../components";
import { customFetch } from "../utilize";
import {
  getUser,
  getRepos,
  getFollowers,
} from "../features/github/githubSlice";
import { toast } from "react-toastify";
import { useAuth0 } from "@auth0/auth0-react";

export const loader =
  (store) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "";

    if (!searchTerm) return { searchTerm };

    // console.log(searchTerm);

    // 在 try 裡面可以有「多個」異步操作
    // 如果其中一個操作失敗（拋出異常），則該區塊的執行將停止，並且 control flow 將轉到 catch 區塊
    try {
      let response = await customFetch(`/users/${searchTerm}`);
      // console.log(response);

      const { login } = response.data;
      // console.log(login);

      // repo
      let response2 = await customFetch(`/users/${login}/repos?per_page=100`);
      // console.log(response2);

      // followers
      let response3 = await customFetch(
        `/users/${login}/followers?per_page=30`
      );
      // console.log(response3);

      store.dispatch(getUser(response.data));
      store.dispatch(getRepos(response2.data));
      store.dispatch(getFollowers(response3.data));
      return { searchTerm };
    } catch (error) {
      // console.log(error);

      toast.error("There is no user with that name", { icon: "😵" });
      return { searchTerm };
    }
  };

const Dashboard = () => {
  const navigation = useNavigation();
  const githubLoading = navigation.state === "loading";

  const { user, isLoading, isAuthenticated } = useAuth0();
  const isUser = user && isAuthenticated;

  if (isLoading) {
    return <Loading />;
  }

  if (!isUser) {
    // 如果沒有 user 或未驗證，重定向到登錄頁面
    return <Navigate to="/login" />;
  }

  return (
    <>
      {githubLoading ? (
        <Loading />
      ) : (
        isUser && (
          <>
            <Navbar />
            <main className="mx-auto w-[95vw] max-w-7xl px-8 pb-12">
              <Search />
              <Info />
              <User />
              <Repos />
            </main>
          </>
        )
      )}
    </>
  );
};

export default Dashboard;
