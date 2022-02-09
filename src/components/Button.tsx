import { Icon } from './Icon';

import '../styles/button.scss';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: 'all' | 'prof' | 'reguladores' | 'ambiental' | 'juridico' | 'restritivas'| 'midia'| 'bensImoveis'| 'cadastro'| 'financeiro';
  selected: boolean;
}

export function Button({ iconName, title, selected, ...rest }: ButtonProps) {
  return (
      <button type="button" 
      {
         ...(selected && { className: 'selected' })
      } {...rest}
      >
      <Icon name={iconName} color={selected ? '#FAE800' : '#FBFBFB'} />
      <p>{title}</p>
    </button>
  );
}