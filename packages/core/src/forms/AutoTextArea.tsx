import { Box } from 'elemental-react';
import React, { useRef, useState, useEffect, FormEvent } from 'react';

import TextInput from './TextInput';

const AutoTextArea = ({ value, placeholder, ...props }: { value?: string, placeholder?: string, onChangeText?: Function }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  // const [isControlled, setIsControlled] = useState(!!value);
  const [text, setText] = useState('');
  const [textAreaHeight, setTextAreaHeight] = useState('auto');
  const [parentHeight, setParentHeight] = useState('auto');

  const onChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    if (!textAreaRef.current?.scrollHeight) {
      return;
    }
    const eventTarget = (event.target as HTMLInputElement);
    setTextAreaHeight("auto");
    setParentHeight(`${textAreaRef.current.scrollHeight}px`);
    setText(eventTarget.value);

    if (props.onChangeText) {
      // console.debug('debug: ', { onChangeText: props.onChangeText, value: event.target.value });
      props.onChangeText(eventTarget.value);
    }
  }

  useEffect(() => {
    if (!textAreaRef?.current) {
      return;
    }

    if (value) {
      setText(value);
    }

    setParentHeight(`${textAreaRef?.current.scrollHeight}px`);
    setTextAreaHeight(`${textAreaRef?.current.scrollHeight}px`);
  }, [text, textAreaRef, value]);

  return (
    <Box minHeight={parentHeight}>
      <TextInput
        ref={textAreaRef} // @ts-ignore
        value={value}
        multiline
        placeholder={placeholder}
        fontSize={30}
        as="textarea"
        style={{ fontFamily: 'IBM Plex Sans', minHeight: 220, height: textAreaHeight, fontSize: 30, outline: 'none', resize: 'none' }}
        onChange={onChangeHandler}
        rows={1}
      />
    </Box>
  );
};

AutoTextArea.defaultProps = {
  placeholder: 'Placeholder...',
};

export default AutoTextArea;
