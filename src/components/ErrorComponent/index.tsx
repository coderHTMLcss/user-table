import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import classes from './Error.module.scss';

const ErrorComponent: FC = (): JSX.Element => {
    const { error } = useSelector((state: RootState) => state.users)
    return (
        <div className={classes.errorContainer} role="alert">
            <p>Something went wrong:</p>
            {error ? (
                <pre className={classes.errorMessage}>{error}</pre>
            ) : (
                <p>No error message available.</p>
            )}
        </div>
    );
};

export default ErrorComponent;
