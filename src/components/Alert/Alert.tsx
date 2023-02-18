import { ReactNode } from 'react';
import styles from './Alert.module.scss';

const Alert = ({ children }: { children: ReactNode }) => <div className={styles.alert}>{children}</div>;

export { Alert };
