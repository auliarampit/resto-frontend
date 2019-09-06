import axios from 'axios';
// import category from '../reducers/category';


export const getMenu = (search='',page=1,sort='',category='') => {
    return {
        type: 'GET_MENU',
        payload: axios.get(`http://192.168.6.103:2020/menu?search=${search}&page=${page}&sort=${sort}&category=${category}`)
    }
}

// export const getMoreNotes = (search='',page=1,sort='',category='') => {
//     return {
//         type: 'MORE_NOTES',
//         payload: axios.get(`http://192.168.6.101:2020/notes?search=${search}&page=${page}&sort=${sort}&category=${category}`)
//     }
// }

export const getSearchMenu = (search='',page=1,sort='') => {
    return {
        type: 'GET_SEARCH',
        payload: axios.get(`http://192.168.6.101:2020/menu?search=${search}&page=${page}&sort=${sort}`)
        
    }
}