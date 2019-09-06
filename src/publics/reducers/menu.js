const initialState = {
    menu:[],
    totalPage:null,
    isLoading: false,
    searchMenu:[],
    sorted:'ASC',
    isSearch:false,
    currentPage:null,
    searchKeyword:'',
    selectedCategory:''
}

const menu = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_SORT':
            return {
                ...state,
                sorted:  action.sort
            }
        case 'GET_MENU_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_MENU_REJECTED':
            return {
                ...state,
                isLoading:false
            }
        case 'GET_MENU_FULFILLED':
            return {
                ...state,
                isLoading:false,
                menu:  action.payload.data.data ,
                totalPage: action.payload.data.totalPage,
                currentPage: action.payload.data.page,
                selectedCategory:action.payload.data.selectedCategory
            }
        case 'MORE_MENU_PENDING':
                return {
                    ...state,
                    isLoading: true
                }
        case 'MORE_MENU_REJECTED':
                return {
                    ...state,
                    isLoading:false
                }
        case 'MORE_MENU_FULFILLED':
                return {
                ...state,
                isLoading:false,
                menu :[...state.menu, ...action.payload.data.data ],
                searchMenu: [...state.searchMenu, ...action.payload.data.data],
                totalPage: action.payload.data.totalPage,
                currentPage: action.payload.data.page,
                selectedCategory:action.payload.data.selectedCategory
                    
                }
        case 'GET_SEARCH_PENDING':
            return {
                ...state,
                isSearch:true,
            }
        case 'GET_SEARCH_REJECTED':
            return {
                ...state,
                isSearch:false
            }
        case 'GET_SEARCH_FULFILLED':
            return {
                ...state,
                isSearch:false,
                searchKeyword: action.payload.data.search,
                searchMenu: action.payload.data.data,
                totalPage: action.payload.data.totalPage,
                currentPage: action.payload.data.page,
                selectedCategory:action.payload.data.selectedCategory
            }
            case 'SORTED_MENU_PENDING':
                return {
                    ...state,
                    isLoading: true
                }
            case 'SORTED_MENU_REJECTED':
                return {
                    ...state,
                    isLoading:false
                }
            case 'SORTED_MENU_FULFILLED':
                return {
                    ...state,
                    isLoading:false,
                    menu: action.payload.data.data,
                    totalPage: action.payload.data.totalPage,
                }
        /// ADD NOTE ------------------
        case 'ADD_MENU_PENDING':
        return {
            ...state,
            isLoading: true
        }
        case 'ADD_MENU_FULFILLED':
        return {
            ...state,
            isLoading: false,
            menu: [ action.payload.data.data[0], ...state.menu]
        }
        case 'ADD_MENU_REJECTED':
        return {
            ...state,
            isLoading: false,
        }
        /// EDIT MENU ------------------
        case 'EDIT_MENU_PENDING':
        return {
            ...state,
            isLoading: true
        }
        case 'EDIT_MENU_FULFILLED':
        return {
            ...state,
            isLoading: false,
            menu: state.menu.map(menuu => 
                (menuu.idMenu == action.payload.data.data[0].idMenu) ? 
                    action.payload.data.data[0] : menuu
            )
        }
        case 'EDIT_MENU_REJECTED':
        return {
            ...state,
            isLoading: false,
        }
        /// REMOVE MENU ------------------
        case 'REMOVE_MENU_PENDING':
        return {
            ...state,
            isLoading: true
        }
        case 'REMOVE_MENU_FULFILLED':
        return {
            ...state,
            isLoading: false,
            menu: state.menu.filter(menuu => menuu.idMenu !== action.payload.data.data.idMenu)
        }
        case 'REMOVE_MENU_REJECTED':
        return {
            ...state,
            isLoading: false,
        }

        default:
            return state;
    }
}
export default menu