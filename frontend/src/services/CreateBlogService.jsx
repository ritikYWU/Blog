import endpoints from "./apiConfig"

const CreateBlogService = async (data) => {

    const token = localStorage.getItem('accessToken')

    let url = endpoints.create

    const response = await fetch(url, {
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: data,
      });


    if (response.ok) {
        const data = await response.json()
        return data
    }
    
    
    
    
    

    // else{
    //     console.log('Blog Creation Failed')
        
    //     const refreshToken = localStorage.getItem('refreshToken')
    //     console.log(refreshToken)
    //     url = endpoints.refresh

    //     const response = await fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             refreshToken
    //         })
    //     })

    //     console.log('refresh', response)
    //     return data
    // }

}

export default CreateBlogService