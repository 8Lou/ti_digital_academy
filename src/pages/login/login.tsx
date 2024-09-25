import React from 'react';
import usePageTitle from '../../hooks/usePageTitle';
import Auth from '../../components/auth/Auth';

const Login: React.FC = () => {
    usePageTitle('Catalog | Goods4you');
    return (
        <div className="home">
            <Auth />
        </div>
    );
};
export default Login;