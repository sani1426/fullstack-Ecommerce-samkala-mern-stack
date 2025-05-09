import React from 'react';
import { Alert, Flex, Spin } from 'antd';

const contentStyle = {
  padding: 60,
  background: 'rgba(0, 0, 0, 0.05)',
 
  borderRadius: 5,
};


const content = <div style={contentStyle} />;


const Spinner = () => (
  <Flex gap="middle" vertical>
    <Flex className='flex items-center justify-center' gap="middle">
      <Spin   tip="Loading" size="default">
        {content}
      </Spin>
      <Spin  tip="Loading" size="default">
        {content}
      </Spin>
      <Spin  tip="Loading" size="default">
        {content}
      </Spin>
    </Flex>

  </Flex>
);
export default Spinner