export const registerUser = async (userData) => {
    try {
        const response = await fetch("http://localhost:5003/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        if (response.ok) {
            return true;
        }
        return false;
    }
    catch (error) {
        console.error("Error registering user:", error);
        return false;
    }
};
export const loginUser = async (userData) => {
    try {
        const response = await fetch("http://localhost:5003/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem("token", data.token);
            return true;
        }
        return false;
    }
    catch (error) {
        console.error("Error logging in:", error);
        return false;
    }
};
