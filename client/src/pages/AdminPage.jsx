import { Admin, List, Datagrid, TextField, DateField, EditButton, DeleteButton, Resource, Create, SimpleForm, TextInput, DateInput, Edit } from "react-admin";

import restProvider from "ra-data-json-server";

const PostList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="title" />
                <DateField source="publishedhAt" label="Дата" />
                <EditButton basePath="/posts" label="Редактировать" />
                <DeleteButton basePath="/posts" label="Удалить" />
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

const AdminPage = () => (
    <Admin dataProvider={restProvider("http://localhost:3000")} basename="/admin">
        <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} />
    </Admin>
);

export default AdminPage;
