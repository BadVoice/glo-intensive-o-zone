    const getData = () => {
        return fetch('https://cartozone-b17dc-default-rtdb.firebaseio.com/goods.json')
            .then((response) => {
                return response.json()
            })
    }

    export default getData