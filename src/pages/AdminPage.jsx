import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const AdminPage = () => (
    <Admin dataProvider={dataProvider} basename="/admin">
        <Resource name="posts" list={ListGuesser} />
        <Resource name="comments" list={ListGuesser} />
    </Admin>
);

export default AdminPage;
