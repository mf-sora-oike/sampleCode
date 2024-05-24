import Image from 'next/image';

import imageData from '../../../../public/assets/kirin.jpg';

const HelloWorld = () => {
  return (
    <>
      <Image src={imageData} alt={'kirin'}></Image>;
    </>
  );
};

export default HelloWorld;
