import React, { ReactComponentElement, ReactElement, ReactNode, useMemo } from 'react';
import { useTheme } from 'elemental-react'; // @ts-ignore
import { themeGet } from '@styled-system/theme-get';

function getDisplayName(WrappedComponent: any) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const Icon = ({ icon: IconComponent, color }: { icon: any, color?: string }) => {
  const { theme } = useTheme();
  const iconName = getDisplayName(IconComponent);

  const [iconColor, themeColor] = useMemo(() => {
    const iconColor = themeGet(`colors.icons.${iconName}`, '#000')({ theme });
    const themeColor = themeGet(`colors.${color}`, color)({ theme });
    return [iconColor, themeColor];
  }, [iconName, theme, color]);


  return IconComponent ? (
    <IconComponent color={themeColor || iconColor} />
  ) : null;
};

export default Icon;
