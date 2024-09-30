    import axios from "axios"

const useFetch = async (url, body,  headers , type) => {
    switch(type){
        case 'post': 
            try {
                const response = await axios.post(url, body, {headers: headers })
                    const payload = await response.data
 
                    return {
                        error: false,
                        data: payload
                    }
            } catch (err) {
                return {
                    error: err,
                    data: false
                }
            }
        case 'get':
            try {
                const response = await axios.get(url, { headers: headers })
                    const payload = await response.data
                    return {
                        error: false,
                        data: payload
                    }
                } catch (err) {
                return {
                    error: err,
                    data: false
                }
            }
        case 'delete':
            try {
                const response = await axios.delete(url, { headers: headers })
                    const payload = await response.data
                    return {
                        error: false,
                        data: payload
                    }
                } catch (err) {
                return {
                    error: err,
                    data: false
                }
            }
         case 'put':
            try {
                const response = await axios.put(url, body, {headers: headers })
                    const payload = await response.data
 
                    return {
                        error: false,
                        data: payload
                    }
            } catch (err) {
                return {
                    error: err,
                    data: false
                }
            }
    }
}

export default useFetch