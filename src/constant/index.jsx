import Home from "../Pages/Home";
import Skill from "../Pages/Skill";
import Myproject from "../Pages/Myproject";
import About from "../Pages/About";

export const pages = [
    {
        path: '/',
        component: Home,
        name: "Home"
    },
    {
        path: '/skill',
        component: Skill,
        name: "Skill"
    },
    {
        path: '/myproject',
        component: Myproject,
        name: "My Projects"
    },
    {
        path: '/about',
        component: About,
        name: "About"
    },
];