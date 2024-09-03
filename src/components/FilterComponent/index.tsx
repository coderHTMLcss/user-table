import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputComponent from '../InputComponent';
import { setValue, FilterState } from '../../store/slices/filterSlice';
import { RootState } from '../../store/store';
import classes from './Filter.module.scss'

interface Filter {
    id: string;
    type: keyof FilterState;
    placeholder: string;
}

const inputElements: Filter[] = [
    { id: 'nameFilter', type: 'name', placeholder: 'Filter by name' },
    { id: 'usernameFilter', type: 'username', placeholder: 'Filter by username' },
    { id: 'emailFilter', type: 'email', placeholder: 'Filter by email' },
    { id: 'phoneFilter', type: 'phone', placeholder: 'Filter by phone' },
];

const FilterComponent: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const filter = useSelector((state: RootState) => state.filter);

    const handleChange =
        (type: keyof FilterState) => (e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(setValue({ key: type, value: e.target.value }));
        };

    return (
        <div className={classes.filter}>
            {inputElements.map(({ id, type, placeholder }) => (
                <InputComponent
                    id={id}
                    key={id}
                    type="text"
                    value={filter[type]}
                    placeholder={placeholder}
                    onChange={handleChange(type)}
                />
            ))}
        </div>
    );
};

export default FilterComponent;
