import React from 'react';
import { Image } from '../../../../dist';

const Index = () => {
  const url = 'http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&f=JPEG?w=1280&h=853';
  return (
    <div>
      <Image src={url} style={{ marginRight: 16, maxWidth: 300 }} />
      <Image src={url} preview style={{ maxWidth: 300 }} modalWidth={900} />
    </div>
  );
};

export default Index;
