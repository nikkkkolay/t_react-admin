import { List, Datagrid, TextField, DateField, EditButton, DeleteButton, BooleanField } from "react-admin";

export const PostList = (props) => {
    return (
        <List {...props} title="Список новостей" exporter={false}>
            <Datagrid>
                <TextField source="id" />
                <BooleanField label="Автивность" source="active" />
                <TextField source="title" label="Заголовок" />
                <DateField source="published_at" label="Дата публикации" />
                <EditButton basepath="/posts" />
                <DeleteButton basepath="/posts" />
            </Datagrid>
        </List>
    );
};
