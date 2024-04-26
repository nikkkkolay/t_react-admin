import { Admin, Resource } from "react-admin";
import polyglotI18nProvider from "ra-i18n-polyglot";
import russianMessages from "ra-language-russian";
import myDataProvider from "../myDataProvider.js";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CallIcon from "@mui/icons-material/Call";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";

import { PostList, PostCreate, PostEdit } from "../components";

const i18nProvider = polyglotI18nProvider(() => russianMessages, "ru");

const AdminPage = () => (
    <Admin dataProvider={myDataProvider} basename="/admin" i18nProvider={i18nProvider}>
        <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} options={{ label: "Новости" }} icon={NewspaperIcon} />
        <Resource name="documents" options={{ label: "Документы" }} icon={HistoryEduIcon} />
        <Resource name="contacts" options={{ label: "Контакты" }} icon={CallIcon} />
    </Admin>
);

export default AdminPage;
