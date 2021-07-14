const baseUrl = '/api/UserProfile'

export const getAllUserProfiles = () => {
    return fetch(`${baseUrl}`)
        .then((res) => res.json())
};

export const getUserProfile = (id) => {
    return fetch(`${baseUrl}/${id}`).then((res) => res.json());
};
