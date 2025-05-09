import { type RouteConfig, route, layout } from "@react-router/dev/routes";

//export default [index("routes/home.tsx")] satisfies RouteConfig;
export default [
    //wrap our routes in a layout
    layout("routes/admin/admin-layout.tsx", [
        route("dashboard", "routes/admin/dashboard.tsx"),
        route("all-users", "routes/admin/all-users.tsx"),
        ]),
] satisfies RouteConfig;