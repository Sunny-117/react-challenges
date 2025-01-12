
import Home from "./pages/Home";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import NewsHome from "./pages/NewsHome";
import NewsSearch from "./pages/NewsSearch";

export default [
  {
    path: "/news",
    component: News,
    name: "news",
    children: [
      { path: "/", name: "newsHome", exact: true, component: NewsHome },
      { path: "/dl", name: "newsDetail", exact: true, component: NewsDetail },
      { path: "/ser", name: "newsSearch", exact: true, component: NewsSearch },
    ],
  },
  { path: "/", name: "home", component: Home },
];
