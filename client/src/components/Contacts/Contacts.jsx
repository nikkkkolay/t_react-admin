import { required, TextInput, Create, SimpleForm } from "react-admin";

export const Contacts = (props) => {
    return (
        <Create {...props} title="Контакты">
            <SimpleForm>
                <TextInput source="email" validate={required()} label="Почта" type="email" resettable />
                <TextInput source="telephone" validate={required()} label="Телефон" resettable />
                <TextInput source="vk" label="Вконтакте" resettable />
                <TextInput source="tg" label="Telegram" resettable />
                <TextInput source="instagram" label="Instagram" resettable />
                <TextInput source="whatsapp" label="WhatsApp" resettable />
            </SimpleForm>
        </Create>
    );
};
