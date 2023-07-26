export const isLoggedIn = (): boolean => {
    const userDataString = localStorage.getItem("userData");
    if (userDataString) {
        try {
            const userData = JSON.parse(userDataString);
            return !!userData.user_type;
        } catch (error) {
            console.error("Error parsing user data:", error);
        }
    }
    return false;
};
