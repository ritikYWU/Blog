import endpoints from "./apiConfig";

const LogInService = async (username, password) => {
    const url = endpoints.login;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
        }),
    });

    if (response.ok) {
        const data = await response.json();
        const accessToken = data.access;
        const refreshToken = data.refresh;

        localStorage.setItem("username", username);
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        console.log("login successful");

        getUserInfo(username);

        return { success: true };
    } else {
        console.log("Login Failed");
        return { success: false };
    }
};

const getUserInfo = async (username) => {
    // const username = localStorage.getItem("username");
    const url = endpoints.user + username;

    const response = await fetch(url);
    const data = await response.json();
    console.log("-------", data);
    localStorage.setItem("id", data.id);
    localStorage.setItem("username", data.username);
    console.log("user info", data);
};

export default LogInService;
