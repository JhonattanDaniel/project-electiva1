import React from "react";
import { Space, Table, Tag } from "antd";
import {
  TeamOutlined,
  HomeOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";

const { Column } = Table;
const data = [
  {
    key: "1",
    id: "001",
    products: "mause",
    count: 6,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "1",
    id: "002",
    products: "teclado",
    count: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "1",
    id: "006",
    products: "pc",
    count: 5,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "1",
    id: "003",
    products: "tablet",
    count: 20,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "1",
    id: "004",
    products: "Brown",
    count: 10,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "1",
    id: "005",
    products: "Brown",
    count: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
];

const pagination = {
  pageSize: 5,
  total: data.length
}

export const ServicesList = () => {
  return (
    <div>
      <Table dataSource={data} pagination={pagination}>
        <Column title="ID" dataIndex="id" key="id" />
        <Column title="Products" dataIndex="products" key="products" />
        <Column title="Count" dataIndex="count" key="count" />
        <Column
          title="State"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <>
              {tags.map((tag) => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <a><TeamOutlined/></a>
              <a><HomeOutlined/></a>
              <a><AppstoreAddOutlined/></a>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};
