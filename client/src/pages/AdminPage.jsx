import { Admin, List, Datagrid, TextField, DateField, EditButton, DeleteButton, Resource } from "react-admin";

import restProvider from "ra-data-json-server";

const PostList = () => {
    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="title" />
                <DateField source="publishedhAt" />
                <EditButton basePath="/posts" />
                <DeleteButton basePath="/posts" />
            </Datagrid>
        </List>
    );
};

const AdminPage = () => (
    <Admin dataProvider={restProvider("http://localhost:3000")} basename="/admin">
        <Resource name="posts" list={PostList} />
    </Admin>
);

export default AdminPage;
