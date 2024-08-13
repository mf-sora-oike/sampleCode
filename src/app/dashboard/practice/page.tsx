'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import imageData1 from '../../../../public/assets/avatar-1.png';
import imageData2 from '../../../../public/assets/avatar-2.png';
import imageData3 from '../../../../public/assets/avatar-3.png';
import imageData4 from '../../../../public/assets/avatar-4.png';

const Practice = () => {
  const [num, setNum] = useState<number>(0);
  const [number, setNumber] = useState(0);
  const [png, setPng] = useState();
  const random = Math.floor(Math.random() * 99);

  const counter = () => {
    setNum((c) => {
      return c + 1;
    });
    setNum((c) => c + 1);
  };
  const counterButton = (
    <>
      <Button onClick={counter}>数字が増えるよ！</Button>
      <>{num}</>
    </>
  );

  const randomImg = () => {
    setNumber(random);
  };

  const randomSet = (
    <>
      <Button onClick={randomImg}>チェンジピープル</Button>
      {/* <Image src={png} alt={'avatar'}></Image> */}
      <>{random}</>
    </>
  );

  return (
    <>
      <>{'hello world'}</>
      <br />
      <>{counterButton}</>
      <br />
      <Image src={imageData1} alt={'avatar-1'}></Image>
      <Image src={imageData2} alt={'avatar-2'}></Image>
      <Image src={imageData3} alt={'avatar-3'}></Image>
      <Image src={imageData4} alt={'avatar-4'}></Image>
      {randomSet}
    </>
  );
};
export default Practice;
