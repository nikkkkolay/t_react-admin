import { Admin, Resource, Login } from "react-admin";
import polyglotI18nProvider from "ra-i18n-polyglot";
import russianMessages from "ra-language-russian";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CallIcon from "@mui/icons-material/Call";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import myDataProvider from "../myDataProvider.js";
import authProvider from "../authProvider.js";

import { PostList, PostCreate, PostEdit, DocsList, DocsCreate, DocsEdit, Contacts } from "../components";

const i18nProvider = polyglotI18nProvider(() => russianMessages, "ru");

const MyLoginPage = () => <Login backgroundImage="https://source.unsplash.com/random/1600x900/daily" />;

const AdminPage = () => (
    <Admin loginPage={MyLoginPage} dataProvider={myDataProvider} basename="/admin" i18nProvider={i18nProvider} authProvider={authProvider}>
        <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} options={{ label: "Новости" }} icon={NewspaperIcon} />
        <Resource name="documents" list={DocsList} create={DocsCreate} edit={DocsEdit} options={{ label: "Документы" }} icon={HistoryEduIcon} />
        <Resource name="contacts" list={Contacts} create={Contacts} options={{ label: "Контакты" }} icon={CallIcon} />
    </Admin>
);

export default AdminPage;
