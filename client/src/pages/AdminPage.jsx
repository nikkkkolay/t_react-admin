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
import myDataProvider from "../myDataProvider.js";

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
                <BooleanField label="Автивность" source="active" />
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
                <BooleanInput label="Автивность" source="active" defaultValue={true} />
                <DateInput source="activeDate" label="Дата начала активности" />
                <DateInput source="publishedhAt" label="Дата публикации" validate={[required()]} />
                <TextInput source="title" label="Заголовок" validate={[required()]} fullWidth />
                <MyRichTextInput validate={[required()]} fullWidth />
                <ImageInput
                    source="pictures"
                    label="Дополнительные фото"
                    placeholder="Перетащите изображения сюда или нажмите для выбора. (Можно загрузить несколько файлов)"
                    multiple
                >
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
                <BooleanInput label="Автивность" source="active" />
                <DateInput source="activeDate" label="Дата начала активности" />
                <DateInput source="publishedhAt" label="Дата публикации" validate={[required()]} />
                <TextInput source="title" label="Заголовок" validate={[required()]} fullWidth />
                <ImageInput source="image" label="Главное фото" placeholder="Перетащите изображения сюда или нажмите для выбора. (Можно загрузить один файл)">
                    <ImageField source="src" title="title" />
                </ImageInput>
                <MyRichTextInput validate={[required()]} fullWidth />
                <ImageInput
                    source="pictures"
                    label="Дополнительные фото"
                    placeholder="Перетащите изображения сюда или нажмите для выбора. (Можно загрузить несколько файлов)"
                    multiple
                >
                    <ImageField source="src" title="title" />
                </ImageInput>
            </SimpleForm>
        </Edit>
    );
};
const i18nProvider = polyglotI18nProvider(() => russianMessages, "ru");

const AdminPage = () => (
    <Admin dataProvider={myDataProvider} basename="/admin" i18nProvider={i18nProvider}>
        <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} options={{ label: "Новости" }} />
    </Admin>
);

export default AdminPage;
