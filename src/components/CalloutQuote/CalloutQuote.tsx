import { PropsWithChildren } from 'react';
import styles from './CalloutQuote.module.scss';

const CalloutQuote = ({ children }: PropsWithChildren) => (
  <blockquote className={styles.calloutQuote}>{children}</blockquote>
);

export { CalloutQuote };
