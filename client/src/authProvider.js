const authProvider = {
    login: ({ username, password }) => {
        const request = new Request(`${import.meta.env.VITE_JSON_SERVER_URL}/login`, {
            method: "POST",
            body: JSON.stringify({ email: username, password: password }),
            headers: new Headers({ "Content-Type": "application/json" }),
        });
        return fetch(request)
            .then((response) => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((auth) => {
                localStorage.setItem("auth", JSON.stringify(auth));
            })
            .catch((error) => {
                throw new Error(error);
            });
    },
    logout: () => {
        localStorage.removeItem("auth");
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem("auth") ? Promise.resolve() : Promise.reject();
    },
    getIdentity: () => {
        try {
            const auth = JSON.parse(localStorage.getItem("auth"));
            return Promise.resolve({ id: auth.user.id, fullName: auth.user.fullName });
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getPermissions: () => Promise.resolve(""),
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem("auth");
            return Promise.reject();
        }
        return Promise.resolve();
    },
};

export default authProvider;
