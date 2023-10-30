import endpoints from "./apiConfig"

const CreateBlogService = async (data) => {
    let token = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    
    let url = endpoints.create;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: data,
    });

    if (response.ok) {
        const responseData = await response.json();
        return responseData;
    }

    if (response.status === 401) {
        url = endpoints.refresh;

        const refreshResponse = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                refreshToken
            })
        });

        if (refreshResponse.ok) {
            const refreshData = await refreshResponse.json();
            
            token = refreshData.accessToken;
            localStorage.setItem('accessToken', token);

            const retryResponse = await fetch(endpoints.create, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: data,
            });

            if (retryResponse.ok) {
                const responseData = await retryResponse.json();
                return responseData;
            }
        }
    }

    console.log('Blog Creation Failed');
    return null;
}

export default CreateBlogService;
