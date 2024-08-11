import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResult from "./components/SearchResult";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />
      },
      {
        path: "/results/:searchQuery",
        element: <SearchResult />
      }
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
    
      <div className="h-full dark:bg-neutral-950">
        <Head />
        <RouterProvider router={appRouter} />
      </div>

    </Provider>
  );
}

export default App;
