'use client';

import { Console } from 'console';

import { useState } from 'react';
import { Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { rowSelectionStateInitializer } from '@mui/x-data-grid/internals';
import { Rows } from '@phosphor-icons/react';
import axios, { AxiosResponse } from 'axios';

const List = () => {
  // axios.defaults.baseURL = 'http://localhost:3001';
  // axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
  // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  // const [zipCode, setZipCode] = useState('0790177');

  const [arr, setArr] = useState<AxiosResponse[]>([]);

  const setResponseData = async () => {
    // //Make a request for a user with a given ID
    // axios.get(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipCode}`).then((response) => {
    //   setArr(response.data.results);
    // });
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

    // このメソッドが増えた
    const res = await fetch('http://localhost:3000/users', {
      mode: 'cors',
    });

    if (!res.ok) {
      throw new Error("can't get data");
    }
    console.log(res.json());
    console.log('aaaaa');

    return res.json();

    // axios
    //   .get(`http://localhost:3000/users`, {
    //     headers: {
    //       'Cache-Control': 'no-cache',
    //       // 'Content-Type': 'application/json; charset=utf-8',
    //       'Access-Control-Allow-Origin': '*',
    //       'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //       mode: 'no-cors',
    //     },
    //   })
    //   .then((responce) => {
    //     console.log('自作API実行データ', responce);
    //   });
  };

  const cols: GridColDef[] = [
    {
      field: 'id',
      headerName: 'id',
    },
    {
      field: 'email',
      headerName: 'email',
    },
    {
      field: 'name',
      headerName: 'name',
    },
  ];

  const getIndex = (row: any) => {
    return arr.findIndex((item: any) => item.address3 === row.address3 && item.kana3 === row.kana3);
  };

  return (
    <>
      <>HelloWorld</>
      <Button onClick={setResponseData}>データを受け取り、表示します</Button>
      <div style={{ width: '100%', height: 300 }}>
        <DataGrid columns={cols} getRowId={(row) => getIndex(row)} rows={arr} density="standard" autoHeight />
      </div>
    </>
  );
};
export default List;
