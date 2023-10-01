"use client";

import { Icon } from '@iconify/react';

export const ClientIcon = ({ icon, className, onClick }: { icon: string, className?: string, onClick?: any }) => {
  return (
    <div className={className}>
      <Icon icon={icon} className="slowLoad" onClick={onClick ? onClick : () => null} />
    </div>
  )
}

export default ClientIcon;