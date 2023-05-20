import { GeneralLayout } from "../layouts/GeneralLayout/GeneralLayout";
import { AdminHome } from "../pages/Admin/AdminHome";
import { SignIn } from "../pages/Admin/SignIn";
import { Contact } from "../pages/General/Contact";
import { Home } from "../pages/General/Home";
import { NotFound } from "../pages/General/NotFound/NotFound";
import { ServicesNew } from "../pages/Services/ServicesNew";
import { ServicesList } from "../pages/Services/ServicesList";
import { Register } from "../pages/Admin/Register";

const AdminRoutes = [
    {path:"/admin",component:AdminHome,layout:GeneralLayout},
    {path:"/admin/sign-in",component:SignIn,layout:GeneralLayout},
    {path:"/admin/register",component:Register,layout:GeneralLayout}

];
const GeneralRoutes = [
    {path:"/",component:Home,layout:GeneralLayout},
    {path:"/contact",component:Contact,layout:GeneralLayout},
    {path:"/services/new", component:ServicesNew, layout:GeneralLayout},
    {path: "/services/list", component:ServicesList, layout:GeneralLayout},
    
    {path:"*",component:NotFound,layout:GeneralLayout}
    
];

const AllRoutesProject = [...AdminRoutes, ...GeneralRoutes];

export default AllRoutesProject;