import { Dashboard, Error, Login } from "./pages";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * (1000 * 60),
      cacheTime: 5 * (1000 * 60),
    },
  },
});
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// loader
import { loader as dashboardLoader } from "./pages/Dashboard";
// store
import { store } from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    // global error
    errorElement: <Error />,
    loader: dashboardLoader(store),
  },
  {
    path: "/login",
    element: <Login />,
    // global error
    errorElement: <Error />,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default App;
