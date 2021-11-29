import router from '@/router';
import store from '@/store';

const hasUser = () => {
    return !!store.state.user.user.id;
}

const middlewareUsers = async (to, next) => {
    // a partir do valor da chave, podemos saber se o usuário está logado
    if (to.matched.some((record) => record.meta.requireAuth)) {
        if (hasUser()) {
            next();
        } else {
            router.push({ name: 'Login' });
            alert('Fornceça as credenciais nescessárias');
        }
    } else {
        if (hasUser()) {
            router.push({ name: 'Dashboard' });
        } else {
            next();
        }
    }
};

export const mainMiddleware = async (to, from, next) => {
    middlewareUsers(to, next);
};
