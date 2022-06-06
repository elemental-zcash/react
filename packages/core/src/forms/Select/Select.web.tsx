import React, { forwardRef } from 'react';
import ReactSelect, { SingleValueProps, OptionProps, components } from 'react-select';

import { Text } from 'elemental-react';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const customStyles = {
  // container: (provided: any) => ({
  //   ...provided,
  //   // minHeight: 32,
  // }),
  // menu: (provided: any, state: any) => ({
  //   ...provided,
  //   width: state.selectProps.width,
  //   borderBottom: '1px dotted pink',
  //   color: state.selectProps.menuColor,
  //   padding: 20,
  // }),

  // control: (_: any, { selectProps: { width }}: any) => ({
  //   width: width
  // }),

  // singleValue: (provided: any, state: any) => {
  //   const opacity = state.isDisabled ? 0.5 : 1;
  //   const transition = 'opacity 300ms';

  //   return { ...provided, opacity, transition };
  // }
}

const SingleValue = ({
  children,
  ...props
}: SingleValueProps<any>) => {
  return (
    <components.SingleValue {...props}>{/* @ts-ignore */}
      <Text uppercase>{children}</Text>
    </components.SingleValue>
  );
};
const Option = ({
  children,
  textNoWrap,
  ...props
}: OptionProps<any> & { textNoWrap?: boolean }) => {
  return ( // @ts-ignore
    <components.Option style={{ minWidth: 128 }} {...props}>{/* @ts-ignore */}
      <Text uppercase style={textNoWrap ? { whiteSpace: 'nowrap' } : undefined}>{children}</Text>
    </components.Option>
  );
};
const OptionNoWrap = ({
  ...props
}: OptionProps<any>) => {
  return ( // @ts-ignore
    <Option textNoWrap {...props} />
  );
};

const Select = forwardRef(({
  styles = {}, optionNoWrap = false, ...props
}: { styles: any, optionNoWrap: boolean }, ref: any) => {
  
  return (
    <ReactSelect
      ref={ref}
      options={options}
      styles={{
        ...customStyles,
        ...styles,
      }}
      components={{ SingleValue, Option: optionNoWrap ? OptionNoWrap : Option }}
      {...props}
      />
  );
});

export default Select;
