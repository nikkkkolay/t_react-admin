import { Admin, Resource } from "react-admin";
import polyglotI18nProvider from "ra-i18n-polyglot";
import russianMessages from "ra-language-russian";
import myDataProvider from "../myDataProvider.js";

import { PostList, PostCreate, PostEdit } from "../components";

const i18nProvider = polyglotI18nProvider(() => russianMessages, "ru");

const AdminPage = () => (
    <Admin dataProvider={myDataProvider} basename="/admin" i18nProvider={i18nProvider}>
        <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} options={{ label: "Новости" }} />
    </Admin>
);

export default AdminPage;
