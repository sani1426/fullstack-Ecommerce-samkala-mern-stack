
const useFetchData =  async (url , method="get" , body) => {

    const response = await  fetch(url ,{
        method : method ,
        credentials: 'include',
        headers: {
          'content-type': 'application/json',
        },
        body : JSON.stringify(body)
    })
    const responseData = await response.json();
    const result = await responseData.data

    return {responseData , result}
}

export default useFetchData