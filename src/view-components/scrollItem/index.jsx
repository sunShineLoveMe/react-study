import React from 'react'
import { Button, Popover } from 'antd';

export default function useScrollItem() {

    const text = <div>
                    <span style={{color: 'red'}}>Title1</span>;
                    <span style={{color: 'red'}}>Title2</span>;
                </div>
    const content = (
        <div>
            <p>Content</p>
            <p>Content</p>
        </div>
    );
    return (
        <Popover placement="right" title={text} content={content} trigger="hover">
            <span style={{ color:"#000",fontSize: "12px" }}>江苏御江环保有限公司1</span>
        </Popover>
    )
}
