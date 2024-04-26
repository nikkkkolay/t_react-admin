import { SimpleForm, TextInput, DateInput, Edit, required, BooleanInput, ImageInput, ImageField, DateTimeInput } from "react-admin";
import { Grid, Box } from "@mui/material";
import { MyRichTextInput } from "./MyRichTextInput";

export const PostEdit = (props) => {
    return (
        <Edit {...props} title="Редактировать новость">
            <SimpleForm>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container columnSpacing={{ xs: 1, sm: 2 }}>
                        <Grid item xs={12}>
                            <BooleanInput label="Автивность" source="active" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextInput source="id" disabled />
                        </Grid>
                        <Grid item md={2}>
                            <DateInput source="published_at" label="Дата публикации" validate={[required()]} />
                        </Grid>
                        <Grid item md={2}>
                            <DateTimeInput source="active_date" label="Дата начала активности" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextInput source="title" label="Заголовок" validate={[required()]} fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <ImageInput source="image" label="Главное фото" placeholder="Перетащите изображения сюда или нажмите для выбора. (Можно загрузить один файл)">
                                <ImageField source="src" title="title" />
                            </ImageInput>
                        </Grid>
                        <Grid item xs={12}>
                            <MyRichTextInput validate={[required()]} fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <ImageInput
                                source="pictures"
                                label="Дополнительные фото"
                                placeholder="Перетащите изображения сюда или нажмите для выбора. (Можно загрузить несколько файлов)"
                                multiple
                            >
                                <ImageField source="src" title="title" />
                            </ImageInput>
                        </Grid>
                    </Grid>
                </Box>
            </SimpleForm>
        </Edit>
    );
};
