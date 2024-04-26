import restProvider from "ra-data-json-server";
import { withLifecycleCallbacks } from "react-admin";

const myDataProvider = withLifecycleCallbacks(restProvider(import.meta.env.VITE_JSON_SERVER_URL), [
    {
        resource: "posts",
        beforeSave: async (params) => {
            if (params.pictures) {
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
            }
            if (params.image) {
                const base64image = await Promise.resolve(convertFileToBase64(params.image));

                const image = {
                    src: base64image,
                    title: params.image.title,
                };

                return {
                    ...params,
                    image,
                };
            }
            return {
                ...params,
            };
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
