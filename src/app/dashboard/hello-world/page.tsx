'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import imageData from '../../../../public/assets/kirin.jpg';

const HelloWorld = () => {
  const [nnn, setNnn] = useState(1);
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [text, setText] = useState('');
  const [resultText, setResultText] = useState('default');
  const [clickCount, setClickCount] = useState(0);
  const [sampleArr, setSampleArr] = useState(['a', 'b', 'c']);
  const [sampleStr, setSampleStr] = useState('');
  const [map1, setMap1] = useState('');
  const handleClickButton = () => {
    setClickCount((c) => {
      return c + 1;
    });
  };

  const messageButton = () => {
    setResultText(text);
  };
  const addArray = () => {
    setSampleArr([...sampleArr, sampleStr]);
  };
  const arrFilterByB = () => {
    const filterd = sampleArr.filter((item) => item.includes('b'));
    setSampleArr(filterd);
  };

  const mapp = () => {
    setArr(arr.map((x) => x + x));
  };

  const countUp = (
    <>
      <>{clickCount}</>
      <Button onClick={handleClickButton}>{'＋１します'}</Button>
    </>
  );

  const arrayNumber = arr.map((number, index) => <p key={index}>{number}</p>);

  const messageUp = (
    <>
      <TextField
        fullWidth
        value={text}
        onChange={(event) => {
          // text = event.target.value;
          setText(event.target.value);
        }}
      />
      <TextField
        value={sampleStr}
        onChange={(event) => {
          setSampleStr(event.target.value);
        }}
      />
      <>{resultText}</>
      <Button onClick={messageButton}>{'メッセージを表示します'}</Button>
      <>{text}</>
      <Button onClick={addArray}>{'配列を追加します'}</Button>
      <Button onClick={arrFilterByB}>{'bだけ抽出します'}</Button>
      <Button onClick={mapp}>{'配列の値を変化させます'}</Button>
    </>
  );

  const filterArray = arr.filter((arr) => arr > 3);

  const array = () => {
    const filterd = sampleArr.filter((item) => item.includes('b'));
    setSampleArr(filterd);
  };

  const focusedText = arr.map((item, index, arr) => {
    return (
      <Typography key={index} fontSize={14 + index} marginBottom={3}>
        {item}
        次は…{index}
      </Typography>
    );
  });

  return (
    <>
      <>{countUp}</>
      <>{'hello world'}</>
      <Image src={imageData} alt={'kirin'}></Image>;{arr}
      {/* <p>{text}</p> */}
      {messageUp}
      <>{filterArray}</>
      <>{'描画確認用'}</>
      <>{sampleArr}</>
      <Typography variant="h1" gutterBottom>
        文字が大きくなる
      </Typography>
      <Typography variant="h3" gutterBottom>
        {arr}
      </Typography>
      {focusedText}
    </>
  );
};
export default HelloWorld;
