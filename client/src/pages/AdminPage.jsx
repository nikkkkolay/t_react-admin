import { Admin, List, Datagrid, TextField, DateField, EditButton, DeleteButton, Resource, Create, SimpleForm, TextInput, DateInput, Edit } from "react-admin";
import polyglotI18nProvider from "ra-i18n-polyglot";
import russianMessages from "ra-language-russian";
import restProvider from "ra-data-json-server";

const PostList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="title" label="Заголовок" />
                <DateField source="publishedhAt" label="Дата" />
                <EditButton basePath="/posts" />
                <DeleteButton basePath="/posts" />
            </Datagrid>
        </List>
    );
};

const PostCreate = (props) => {
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="title" />
                <DateInput source="publishedhAt" label="Published" />
            </SimpleForm>
        </Create>
    );
};

const PostEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput source="id" disabled />
                <TextInput source="title" />
                <DateInput source="publishedhAt" label="Published" />
            </SimpleForm>
        </Edit>
    );
};
const i18nProvider = polyglotI18nProvider(() => russianMessages, "ru");

const AdminPage = () => (
    <Admin dataProvider={restProvider("http://localhost:3000")} basename="/admin" i18nProvider={i18nProvider}>
        <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} options={{ label: "Новости" }} />
    </Admin>
);

export default AdminPage;
