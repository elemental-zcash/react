import { extend, Text } from "elemental-react";

// @ts-ignore
export const MoneyTotalTitle = extend(Text, {
  fontSize: 32,
  lineHeight: 40,
  fontFamily: 'Helvetica Neue',
  fontWeight: 'bold',
  color: 'white',
});

// @ts-ignore
export const MoneyTotalSubtext = extend(Text, {
  fontSize: 16,
  lineHeight: 20,
  fontWeight: 400,
  fontFamily: 'Helvetica Neue',
  color: '#888888',
});
