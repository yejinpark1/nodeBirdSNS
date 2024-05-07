import React from "react";
import PropTypes from 'prop-types';
import { Card, Button, List} from 'antd'; 
import { StopOutlined } from '@ant-design/icons';

const followingList = ({ header, data}) => {
    return (
        <List 
        style={{ marginBotton : '20px'}}
        grid={{gutter :4, xs:2, md:3}}
        size="small" 
        header={<div>{header}</div>}
        loadMore={<div style={{ textAlign : 'center', margin : '10px 0'}}><Button>더 보기</Button></div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
            <List.Item style={{margin :20}}>
                <Card actions={[<StopOutlined key="stop"/>]}>
                    <Card.Meta dascription={item.nickname} />    
                </Card>
            </List.Item>
        )}
        />
    )
};

followingList.propTypes = {
    header:PropTypes.string.isRequired,
    data:PropTypes.array.isRequired,
}

export default followingList;