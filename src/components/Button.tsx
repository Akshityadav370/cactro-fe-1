import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'icon';
  children?: ReactNode;
  icon?: ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  icon, 
  onClick,
  className = '',
  ...props 
}) => {
  const buttonStyles = {
    primary: 'bg-primary hover:bg-purple-800 text-white font-bold py-2 px-4 uppercase text-base',
    secondary: 'border-2 border-primary hover:purple-800 text-primary font-bold py-2 px-4 uppercase text-base',
    icon: 'text-gray-600 hover:text-gray-800'
  };

  if (variant === 'icon' && icon) {
    return (
      <button 
        className={`${buttonStyles.icon} ${className}`}
        onClick={onClick}
        {...props}
      >
        {icon}
      </button>
    );
  }

  return (
    <button 
      className={`${buttonStyles[variant]} ${className} cursor-pointer`}
      onClick={onClick}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;