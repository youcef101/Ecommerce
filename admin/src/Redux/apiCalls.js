import { adminRequest, axiosInstance } from "../axios"
import { LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS } from "./adminSlice"
import {
    getAllProductsFailure,
    getAllProductsStart,
    getAllProductsSuccess,
    deleteProductStart,
    deleteProductSuccess,
    deleteProductFailure,
    updateProductStart,
    updateProductSuccess,
    updateProductFailure,
    addCategoryFailure,
    addCategoryStart,
    addCategorySuccess,
    addProductFailure,
    addProductStart,
    addProductSuccess,
    deleteCategoriesFailure,
    deleteCategoriesStart,
    deleteCategoriesSuccess,
    updateCategoriesFailure,
    updateCategoriesStart,
    updateCategoriesSuccess,
    getAllCategoriesFailure,
    getAllCategoriesStart,
    getAllCategoriesSuccess,
    /*     getCurrentCategoryFailure,
        getCurrentCategoryStart,
        getCurrentCategorySuccess,
        getCurrentProductFailure,
        getCurrentProductStart,
        getCurrentProductSuccess, */
    deleteProductColorFailure,
    deleteProductColorStart,
    deleteProductColorSuccess,

} from "./productSlice"
import {
    getAllUsersFailure,
    getAllUsersStart,
    getAllUsersSuccess,
    updateUserFailure,
    updateUserStart,
    updateUserSuccess,
    deleteUserFailure,
    deleteUserStart,
    deleteUserSuccess
} from './adminSlice'

export const LoginCalls = async (dispatch, user) => {
    dispatch(LOGIN_START())
    try {
        const res = await axiosInstance.post('/auth/login', user);
        dispatch(LOGIN_SUCCESS(res.data))
    } catch (err) {
        dispatch(LOGIN_FAILURE())
    }

}

//get all products
export const getAllProducts = async (dispatch) => {
    dispatch(getAllProductsStart());
    try {
        const res = await axiosInstance.get(`/product/all/d`);
        const data = await res.data
        dispatch(getAllProductsSuccess(data))
    } catch (err) {
        dispatch(getAllProductsFailure())
    }
}

//delete Product
export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
        await adminRequest.delete(`/product/${id}/delete`);
        dispatch(deleteProductSuccess(id))
    } catch (err) {
        dispatch(deleteProductFailure())
    }
}

//edit Produt
export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
        await adminRequest.put(`/product/${id}/edit`, product);
        dispatch(updateProductSuccess({ id, product }))
    } catch (err) {
        dispatch(updateProductFailure())
    }
}

//add product
export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
        const res = await adminRequest.post(`/product/add`, product);
        dispatch(addProductSuccess(res.data));
    } catch (err) {
        dispatch(addProductFailure());
    }
};

//add category
export const addCategory = async (category, dispatch) => {
    dispatch(addCategoryStart());
    try {
        const res = await adminRequest.post(`/category/add`, category);
        dispatch(addCategorySuccess(res.data));
    } catch (err) {
        dispatch(addCategoryFailure());
    }
};

//get all category
export const getAllCategories = async (dispatch) => {
    dispatch(getAllCategoriesStart());
    try {
        const res = await axiosInstance.get(`/category/all`);
        const data = await res.data
        dispatch(getAllCategoriesSuccess(data))
    } catch (err) {
        dispatch(getAllCategoriesFailure())
    }
}

//delete category
export const deleteCategory = async (id, dispatch) => {
    dispatch(deleteCategoriesStart());
    try {
        await adminRequest.delete(`/category/${id}/delete`)
        dispatch(deleteCategoriesSuccess(id))
    } catch (err) {
        dispatch(deleteCategoriesFailure())
    }
}

//update category info
export const updateCategoryInfo = async (id, category, dispatch) => {
    dispatch(updateCategoriesStart());
    try {
        await adminRequest.put(`/category/${id}/info/edit`, category);
        dispatch(updateCategoriesSuccess({ id, category }))
    } catch (err) {
        dispatch(updateCategoriesFailure())
    }
}

//get current category
/* export const getCurrentCategory = async (id, dispatch) => {
    dispatch(getCurrentCategoryStart());
    try {
        const res = await adminRequest.get(`/category/get/${id}/d`)
        const data = await res.data
        dispatch(getCurrentCategorySuccess(data))
    } catch (err) {
        dispatch(getCurrentCategoryFailure())
    }
} */
//get current product
/* export const getCurrentProduct = async (id, dispatch) => {
    dispatch(getCurrentProductStart());
    try {
        const res = await adminRequest.get(`/product/${id}`)
        const data = await res.data
        dispatch(getCurrentProductSuccess(data))
    } catch (err) {
        dispatch(getCurrentProductFailure())
    }
}
 */
//delete product color
export const deleteProductColor = async (id, color, dispatch) => {
    dispatch(deleteProductColorStart());
    try {
        await axiosInstance.put(`/product/${id}/${color}/delete`)
        dispatch(deleteProductColorSuccess(id, color))
        console.log('color deled !!')
    } catch (err) {
        dispatch(deleteProductColorFailure())
    }
}

//get all users
export const getAllUsers = async (dispatch) => {
    dispatch(getAllUsersStart())
    try {
        const res = await axiosInstance.get('/user/get/all/d')
        const data = await res.data
        dispatch(getAllUsersSuccess(data))
    } catch (err) {
        dispatch(getAllUsersFailure())
    }
}

//update user
export const updateUser = async (id, user, dispatch) => {
    dispatch(updateUserStart());
    try {
        await adminRequest.put(`/user/${id}/info/edit`, user);
        dispatch(updateUserSuccess({ id, user }))
    } catch (err) {
        dispatch(updateUserFailure())
    }
}

//delete user
export const deleteUser = async (id, dispatch) => {
    dispatch(deleteUserStart());
    try {
        await adminRequest.delete(`/user/${id}/delete`);
        dispatch(deleteUserSuccess(id))
    } catch (err) {
        dispatch(deleteUserFailure())
    }
}
