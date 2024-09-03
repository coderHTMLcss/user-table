import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchUsers } from '../../store/slices/usersSlice';
import filterUsersData from '../../helpers/filtereUsers';
import LoaderComponent from '../LoaderComponent';
import classes from './Table.module.scss';
import ErrorComponent from '../ErrorComponent';

const UserTable: React.FC = (): JSX.Element => {
    const { users, status } = useSelector((state: RootState) => state.users);
    const filter = useSelector((state: RootState) => state.filter);
    const dispatch: AppDispatch = useDispatch();
    const filteredUsers = filterUsersData(users, filter);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchUsers());
        }
    }, [dispatch, status]);

    if (status === "loading") return <LoaderComponent />
    if (status === 'error') return <ErrorComponent />

    return (
        <div className={classes.wrapper}>
            <table className={classes.table}>
                <thead className={classes.tableHeader}>
                    <tr className={classes.tableHeaderRow}>
                        <th className={classes.tableHeaderCell} scope='col'>Name</th>
                        <th className={classes.tableHeaderCell} scope='col'>Username</th>
                        <th className={classes.tableHeaderCell} scope='col'>Email</th>
                        <th className={classes.tableHeaderCell} scope='col'>Phone</th>
                    </tr>
                </thead>
                <tbody className={classes.tableBody}>
                    {filteredUsers.length > 0 && filteredUsers.map(user => (
                        <tr className={classes.tableBodyRow} key={user.id}>
                            <td className={classes.tableBodyCell} data-label="Name">{user.name}</td>
                            <td className={classes.tableBodyCell} data-label="Username">{user.username}</td>
                            <td className={classes.tableBodyCell} data-label="Email">{user.email}</td>
                            <td className={classes.tableBodyCell} data-label="Phone">{user.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
