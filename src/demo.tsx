import React from 'react';
import { TreeSelect } from 'antd';

const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: (
              <b style={{ color: '#08c' }}>
                lllllllllllllllllllllllllllllllleaf3333333333333333333333
              </b>
            ),
          },
        ],
      },
    ],
  },
];
const App: React.FC = () => {
  return (
    <TreeSelect
      dropdownStyle={{
        maxHeight: 100,
        overflow: 'auto',
      }}
      treeDefaultExpandAll
      popupMatchSelectWidth={false}
      treeData={treeData}
      style={{ width: 100, marginLeft: 500 }}
    />
  );
};

export default App;
