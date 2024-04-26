import { Edit, SimpleForm, TextInput, DateInput, required, BooleanInput, FileInput, FileField } from "react-admin";
import { Grid, Box } from "@mui/material";

export const DocsEdit = (props) => {
    return (
        <Edit {...props} title="Редактировать документ">
            <SimpleForm>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container columnSpacing={{ xs: 1, sm: 2 }}>
                        <Grid item xs={12}>
                            <BooleanInput label="Автивность" source="active" defaultValue={true} />
                        </Grid>
                        <Grid item md={2}>
                            <DateInput source="published_at" label="Дата публикации" validate={[required()]} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextInput source="title" label="Название" validate={[required()]} fullWidth resettable />
                        </Grid>
                        <Grid item xs={12}>
                            <FileInput source="file" label="Файл">
                                <FileField source="src" title="title" />
                            </FileInput>
                        </Grid>
                    </Grid>
                </Box>
            </SimpleForm>
        </Edit>
    );
};
