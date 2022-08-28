import { ReactChild } from 'react';
import styles from './CalloutQuote.module.scss';

const CalloutQuote = ({ children }: { children: ReactChild }) => (
  <blockquote className={styles.calloutQuote}>{children}</blockquote>
);

export { CalloutQuote };
