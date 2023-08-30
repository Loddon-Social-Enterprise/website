import { PropsWithChildren } from 'react';
import styles from './Alert.module.scss';

const Alert = ({ children }: PropsWithChildren) => <div className={styles.alert}>{children}</div>;

export { Alert };
