import React, { ReactComponentElement, ReactElement, ReactNode, useMemo } from 'react';
import { useTheme } from 'elemental-react'; // @ts-ignore
import { themeGet } from '@styled-system/theme-get';

function getDisplayName(WrappedComponent: any) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function pascalToSnakeCase(str: string) {
  return str.split(/(?=[A-Z])/).join('_').toLowerCase();
}

const Icon = ({ icon: IconComponent, color }: { icon: any, color?: string }) => {
  const { theme } = useTheme();
  const iconName = pascalToSnakeCase(getDisplayName(IconComponent).replace('Icon', ''));

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
