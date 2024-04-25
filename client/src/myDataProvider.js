import restProvider from "ra-data-json-server";
import { withLifecycleCallbacks } from "react-admin";

const myDataProvider = withLifecycleCallbacks(restProvider("http://localhost:3000"), [
    {
        resource: "posts",
        beforeSave: async (params) => {
            const newPictures = params.pictures.filter((p) => p.rawFile);
            const formerPictures = params.pictures.filter((p) => !p.rawFile);
            const base64Pictures = await Promise.all(newPictures.map(convertFileToBase64));

            const pictures = [
                ...base64Pictures.map((dataUrl, index) => ({
                    src: dataUrl,
                    title: newPictures[index].title,
                })),
                ...formerPictures,
            ];

            return {
                ...params,
                pictures,
            };
        },
    },
]);

const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file.rawFile);
    });
};

export default myDataProvider;
