import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const ProCard = ({product}) => (
  <Card
    hoverable
   
    style={{ width: '145px' , height: '100%' }}
    cover={<img alt="example" src={product?.productImages[0]}  className='object-scale-down h-full'/>}
  >
    <Meta title={product?.productName} description="www.instagram.com" />
  </Card>
);
export default ProCard;