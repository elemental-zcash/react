import React, { forwardRef, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Box, extend, Row, Text, useWindowDimensions } from 'elemental-react';
// @ts-ignore
import { Svg, Path, Rect } from '@react-platform/svg'; // @ts-ignore
import { themeGet } from '@styled-system/theme-get'; // @ts-ignore
import { useTheme } from 'styled-components/primitives';

import { CopyBoxIcon, QrcodeBoxIcon } from '@elemental-zcash/icons';
import { Icon } from '../icons';
import { Platform } from 'react-primitives';

const TRUNCATE_END_LENGTH = 6;

// export const QRCodeIcon = ({ size = 24, color = '#fff' }) => (
//   <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <Path d="M14.25 18.75H12.75V17.25H14.25V18.75ZM12.75 13.5H11.25V17.25H12.75V13.5ZM18.75 12H17.25V15H18.75V12ZM17.25 10.5H15.75V12H17.25V10.5ZM8.25 12H6.75V13.5H8.25V12ZM6.75 10.5H5.25V12H6.75V10.5ZM12 6.75H13.5V5.25H12V6.75ZM6.375 6.375V8.625H8.625V6.375H6.375ZM9.75 9.75H5.25V5.25H9.75V9.75ZM6.375 15.375V17.625H8.625V15.375H6.375ZM9.75 18.75H5.25V14.25H9.75V18.75ZM15.375 6.375V8.625H17.625V6.375H15.375ZM18.75 9.75H14.25V5.25H18.75V9.75ZM17.25 17.25V15H14.25V16.5H15.75V18.75H18.75V17.25H17.25ZM15.75 12H12.75V13.5H15.75V12ZM12.75 10.5H8.25V12H9.75V13.5H11.25V12H12.75V10.5ZM13.5 9.75V8.25H12V6.75H10.5V9.75H13.5ZM8.0625 6.9375H6.9375V8.0625H8.0625V6.9375ZM8.0625 15.9375H6.9375V17.0625H8.0625V15.9375ZM17.0625 6.9375H15.9375V8.0625H17.0625V6.9375Z" fill={color} />
//     <Rect x="1" y="1" width="22" height="22" stroke={color} stroke-width="2"/>
//   </Svg>
// );

// export const CopyIcon = ({ size = 24, color = '#FFBF00' }) => (
//   <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <Path d="M15 3.75H4.5V15.75H6V5.25H15V3.75ZM18.75 6.75H7.5V20.25H18.75V6.75ZM17.25 18.75H9V8.25H17.25V18.75Z" fill={color} />
//     <Rect x="1" y="1" width="22" height="22" stroke={color} stroke-width="2" />
//   </Svg>
// );

export const CryptoAddressText = forwardRef(({ children, ...props }: any, ref) => {
  return (
    <Text ref={ref} fontFamily="Roboto Mono" fontSize={14} lineHeight={20} {...props}>
      {children}
    </Text>
  );
});

const MiddleTextOverflow = ({ as = Text, children, ...props }: { as?: any, maxHeight?: string | number, children: ReactNode, lineHeight?: any, color?: any }) => {
  // const textRef = useRef<HTMLParagraphElement>(null);
  const [showEllipsis, setShowEllipsis] = useState(true);
  const text = typeof children === 'string' ? children : '';
  const { width } = useWindowDimensions();
  const TextComp: typeof Text = as;

  const firstText = text.substring(0, text.length - TRUNCATE_END_LENGTH);
  const lastText = text.substring(text.length - TRUNCATE_END_LENGTH, text.length);

  // useCallback(() => {
  //   if (textRef && textRef.current) {
  //     if (Math.abs(textRef.current.scrollWidth - textRef.current.offsetWidth) <= 2) {
  //       setShowEllipsis(false);
  //     } else {
  //       setShowEllipsis(true);
  //     }
  //   }
  // }, [textRef.current, setShowEllipsis]);

  const textRef: any = Platform.OS === 'web' ? useRef<HTMLParagraphElement>(null) : undefined;

  useEffect(() => {
    if (Platform.OS === 'web' && textRef && textRef.current) {
      if (Math.abs(textRef.current.scrollWidth - textRef.current.offsetWidth) <= 2) {
        setShowEllipsis(false);
      } else {
        setShowEllipsis(true);
      }
    }
  }, [width]);

  return !text ? null : (
    <>{/* @ts-ignore */}
      <TextComp ref={textRef} style={{ overflowX: 'clip' }} flexShrink={1} {...props}>{firstText}</TextComp>
      {showEllipsis && <TextComp {...props}>...</TextComp>}
      {/* @ts-ignore */}
      <TextComp {...props}>{lastText}</TextComp>
    </>
  );
}

export const TruncatedCryptoAddress = ({ address, color }: { address: string, color?: string }) => {
  const firstText = address.substring(0, address.length - TRUNCATE_END_LENGTH);
  const lastText = address.substring(address.length - TRUNCATE_END_LENGTH, address.length);

  return (
    <Row flexWrap="nowrap" overflow="hidden" flex={1}>
      {/* <CryptoAddressText style={{ flexShrink: 1 }} maxHeight={14} lineHeight={20} color={color}>{firstText}</CryptoAddressText>
      <CryptoAddressText maxHeight={20} lineHeight={20} color={color}>...</CryptoAddressText>
      <CryptoAddressText maxHeight={20} lineHeight={20} color={color}>{lastText}</CryptoAddressText> */}
      <MiddleTextOverflow as={CryptoAddressText} maxHeight={20} lineHeight={20} color={color}>{address}</MiddleTextOverflow>
    </Row>
  );
};

const CryptoAddressCopyQrcode = ({ ...props }) => (
  <Box mr={1} {...props}>
    <Icon icon={QrcodeBoxIcon} color="icons.qrcode_box" />
  </Box>
);

const CryptoAddressCopyQrcodeBox = extend(CryptoAddressCopyQrcode, {
  ':hover': {
    opacity: '0.8'
  },
}) as any;

const CryptoAddressCopyCopyIcon = ({ ...props }) => (
  <Box {...props}>
    <Icon icon={CopyBoxIcon} color="icons.copy_box" />
  </Box>
);

const CryptoAddressCopyCopyBox = extend(CryptoAddressCopyCopyIcon, {
  ':hover': {
    opacity: '0.8'
  },
}) as any;

const CryptoAddressCopyIcons = ({ children, ...props }: { children: ReactNode }) => (
  <Row pl={2}>
    {children}
  </Row>
);

export const CryptoAddressCopy = ({ address, color, onCopyPress, onQrcodePress, children, ...props }: {
  address: string, color?: string, children?: ReactNode, onCopyPress: Function, onQrcodePress: Function,
}) => {
  return (
    <Row borderRadius={12} bg="#fff" px={16} py="8px" justifyContent="space-between" {...props}>
      {children || (
        <>
          <TruncatedCryptoAddress address={address} color={color} />
          <CryptoAddressCopyIcons>
            <CryptoAddressCopyQrcodeBox onPress={onQrcodePress} />
            <CryptoAddressCopyCopyBox onPress={onCopyPress} />
          </CryptoAddressCopyIcons>
        </>
      )}
    </Row>
  );
};


CryptoAddressCopy.Address = TruncatedCryptoAddress;
CryptoAddressCopy.Icons = CryptoAddressCopyIcons;
CryptoAddressCopy.QrcodeBox = CryptoAddressCopyQrcodeBox;
CryptoAddressCopy.CopyBox = CryptoAddressCopyCopyIcon;


export const TruncatedZAddress = ({ ...props }: { address: string }) => <TruncatedCryptoAddress {...props} />;
export const TruncatedTAddress = ({ ...props }: { address: string }) => <TruncatedCryptoAddress {...props} />;
export const TruncatedUnifiedAddress = ({ ...props }: { address: string }) => <TruncatedCryptoAddress {...props} />;
