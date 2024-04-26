import { List, Datagrid, TextField, DateField, EditButton, DeleteButton, BooleanField } from "react-admin";

export const DocsList = (props) => {
    return (
        <List {...props} title="Список документов" exporter={false}>
            <Datagrid>
                <TextField source="id" />
                <BooleanField label="Автивность" source="active" />
                <TextField source="title" label="Название" resettable />
                <DateField source="published_at" label="Дата публикации" />
                <EditButton basepath="/documents" />
                <DeleteButton basepath="/documents" />
            </Datagrid>
        </List>
    );
};
