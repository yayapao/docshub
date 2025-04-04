import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './styles.module.css';
import clsx from 'clsx';

export type Props = { to: string; className?: string; children }

const PrimaryButton: React.FC<Props> = (props) => {
  const { to, children, className } = props;
  const history = useHistory();

  return (
    <button
      className={clsx(styles.ButtonContainer, className)}
      onClick={() => {
        if (to.startsWith('http')) {
          window.open(to, '_blank');
          return;
        }
        history.push(to);
      }}>
      {children}
    </button>
  );
};

export default PrimaryButton;
