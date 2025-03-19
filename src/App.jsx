import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import Head from "./Components/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";

// eslint-disable-next-line no-unused-vars
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
        path: "/watch",
        element: <WatchPage></WatchPage>,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Provider store={store}>
        <Head></Head>
      <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
