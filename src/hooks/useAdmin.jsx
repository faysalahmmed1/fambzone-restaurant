import React from 'react';
import UseAuth from './UseAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecoure from './useAxiosSecoure';

const useAdmin = () => {
    const { user, loading} = UseAuth();
    const axiosSecoure = useAxiosSecoure();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isadmin'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecoure.get(`/users/admin/${user.email}`);
            return res.data?.admin;
        }
    });
    return [isAdmin, isAdminLoading];
};

export default useAdmin;