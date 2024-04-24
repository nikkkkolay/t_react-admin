import {
    Admin,
    List,
    Datagrid,
    TextField,
    DateField,
    EditButton,
    DeleteButton,
    Resource,
    Create,
    SimpleForm,
    TextInput,
    DateInput,
    Edit,
    required,
    BooleanInput,
    ImageInput,
    ImageField,
    BooleanField,
} from "react-admin";
import { RichTextInput, RichTextInputToolbar, LevelSelect, FormatButtons, ListButtons, LinkButtons, QuoteButtons, ClearButtons } from "ra-input-rich-text";
import polyglotI18nProvider from "ra-i18n-polyglot";
import russianMessages from "ra-language-russian";
import restProvider from "ra-data-json-server";

const MyRichTextInput = ({ ...props }) => (
    <RichTextInput
        toolbar={
            <RichTextInputToolbar>
                <LevelSelect />
                <FormatButtons />
                <ListButtons />
                <LinkButtons />
                <QuoteButtons />
                <ClearButtons />
            </RichTextInputToolbar>
        }
        label="Текст новости"
        source="body"
        {...props}
    />
);

const PostList = (props) => {
    return (
        <List {...props} title="Список новостей">
            <Datagrid>
                <BooleanField label="Автивность" source="avtive" />
                <TextField source="title" label="Заголовок" />
                <DateField source="publishedhAt" label="Дата публикации" />
                <DateField source="activeDate" label="Дата начала активности" />
                <EditButton basepath="/posts" />
                <DeleteButton basepath="/posts" />
            </Datagrid>
        </List>
    );
};

const PostCreate = (props) => {
    return (
        <Create {...props}>
            <SimpleForm>
                <BooleanInput label="Автивность" source="avtive" defaultValue={true} />
                <DateInput source="activeDate" label="Дата начала активности" />
                <DateInput source="publishedhAt" label="Дата публикации" validate={[required()]} />
                <TextInput source="title" label="Заголовок" validate={[required()]} fullWidth />
                <MyRichTextInput validate={[required()]} fullWidth />
                <ImageInput source="pictures" label="Главное фото">
                    <ImageField source="src" title="title" />
                </ImageInput>
            </SimpleForm>
        </Create>
    );
};

const PostEdit = (props) => {
    return (
        <Edit {...props} title="Редактировать новость">
            <SimpleForm>
                <TextInput source="id" disabled />
                <BooleanInput label="Автивность" source="avtive" />
                <DateInput source="activeDate" label="Дата начала активности" />
                <DateInput source="publishedhAt" label="Дата публикации" validate={[required()]} />
                <TextInput source="title" label="Заголовок" validate={[required()]} fullWidth />
                <MyRichTextInput validate={[required()]} fullWidth />
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
