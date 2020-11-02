import { toast } from 'react-toastify';

const TOKEN_KEY = 'isLogin';

export const login = () => {
    localStorage.setItem(TOKEN_KEY, 'TestLogin');
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    toast.warn("Berhasil keluar sistem", {position: "top-center"});
    setTimeout(()=>{
        window.location.reload();
    },2000);
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }
    return false;
}