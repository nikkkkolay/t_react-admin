import { Admin, Resource } from "react-admin";
import polyglotI18nProvider from "ra-i18n-polyglot";
import russianMessages from "ra-language-russian";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CallIcon from "@mui/icons-material/Call";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import myDataProvider from "../myDataProvider.js";

import { PostList, PostCreate, PostEdit, DocsList, DocsCreate, DocsEdit, Contacts } from "../components";

const i18nProvider = polyglotI18nProvider(() => russianMessages, "ru");

const AdminPage = () => (
    <Admin dataProvider={myDataProvider} basename="/admin" i18nProvider={i18nProvider}>
        <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} options={{ label: "Новости" }} icon={NewspaperIcon} />
        <Resource name="documents" list={DocsList} create={DocsCreate} edit={DocsEdit} options={{ label: "Документы" }} icon={HistoryEduIcon} />
        <Resource name="contacts" list={Contacts} edit={Contacts} options={{ label: "Контакты" }} icon={CallIcon} />
    </Admin>
);

export default AdminPage;
