import restProvider from "ra-data-json-server";
import { withLifecycleCallbacks } from "react-admin";

const myDataProvider = withLifecycleCallbacks(restProvider(import.meta.env.VITE_JSON_SERVER_URL), [
    {
        resource: "posts",
        beforeSave: async (params) => {
            if (params.pictures || params.image) {
                const newPictures = params.pictures.filter((p) => p.rawFile);
                const formerPictures = params.pictures.filter((p) => !p.rawFile);
                const base64Pictures = await Promise.all(newPictures.map(convertFileToBase64));
                const base64image = await Promise.resolve(convertFileToBase64(params.image));

                const pictures = [
                    ...base64Pictures.map((dataUrl, index) => ({
                        src: dataUrl,
                        title: newPictures[index].title,
                    })),
                    ...formerPictures,
                ];

                const image = {
                    src: base64image,
                    title: params.image.title,
                };

                return {
                    ...params,
                    pictures,
                    image,
                };
            }
        },
    },
    {
        resource: "documents",
        beforeSave: async (params) => {
            if (params.file) {
                const base64file = await Promise.resolve(convertFileToBase64(params.file));

                const file = {
                    src: base64file,
                    title: params.title,
                };

                return {
                    ...params,
                    file,
                };
            }

            return {
                ...params,
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
