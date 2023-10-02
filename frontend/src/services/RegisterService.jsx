import endpoints from "./apiConfig"

const RegisterService = async (username, email, password) => {
    const url = endpoints.register
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });


    if (response.ok) {
        const data = await response.json()
        return {success:true}

    }

    else{
        console.log('Signup Failed')
        return {success:false}
    }

}

export default RegisterService