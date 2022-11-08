import React, { useEffect, useRef, useState } from 'react';
import { Button, Popover } from 'antd';

import './table.less';

import { PopOverTitle, PopOverContent } from './style'

// import ScrollItem from '../scrollItem/index'

export default function useTestScroll() {
    const [list] = useState([
        { billNo: '01', city: '北京', saleIncome: '2506734.43', an: '53.00', Mon: '-13%' },
        { billNo: '02', city: '上海', saleIncome: '2506734.43', an: '53.00', Mon: '-13%' },
        { billNo: '03', city: '广州', saleIncome: '2506734.43', an: '53.00', Mon: '-13%' },
        { billNo: '04', city: '深圳', saleIncome: '2506734.43', an: '53.00', Mon: '-13%' },
        { billNo: '05', city: '天津', saleIncome: '2506734.43', an: '53.00', Mon: '-13%' },
        { billNo: '06', city: '南京', saleIncome: '2506734.43', an: '53.00', Mon: '-13%' },
        { billNo: '07', city: '蚌埠', saleIncome: '2506734.43', an: '53.00', Mon: '-13%' },
        { billNo: '08', city: '深圳', saleIncome: '2506734.43', an: '53.00', Mon: '-13%' },
        { billNo: '09', city: '天津', saleIncome: '2506734.43', an: '53.00', Mon: '-13%' },
        { billNo: '10', city: '南京', saleIncome: '2506734.43', an: '53.00', Mon: '-13%' },
        { billNo: '11', city: '蚌埠', saleIncome: '2506734.43', an: '53.00', Mon: '-13%' },
    ]);
    const [isScrolle, setIsScrolle] = useState(true);

    const [count, setCount] = useState(0)
 
    // 滚动速度，值越小，滚动越快
    const speed = 30;
    const warper = useRef();
    const childDom1 = useRef();
    const childDom2 = useRef();
    const childDom3 = useRef();

    // const text = <div>
    //                 <span style={{ color: 'red' }}>Title1</span>;
    //                 <span style={{ color: 'red' }}>Title2</span>;
    //             </div>

    const text = <PopOverTitle>
                        <span className='pop-over-title-item'>废物代码</span>
                        <span className='pop-over-title-item'>废物名称</span>
                        <span className='pop-over-title-item'>设备规格</span>
                        <span className='pop-over-title-item'>满载率</span>
                        <span className='pop-over-title-item'>状态</span>
                </PopOverTitle>

    const content = (
        <PopOverContent>
            <div className='pop-over-content-row'>
                <span className='pop-over-content-item' style={{width: '30%'}}>091-121-11</span>
                <span className='pop-over-content-item' style={{width: '30%'}}>废物代码11</span>
                <span className='pop-over-content-item' style={{width: '10%'}}>20L</span>
                <span className='pop-over-content-item' style={{width: '10%'}}>98%</span>
                <span className='pop-over-content-item' style={{width: '15%'}}>正常</span>
            </div>
            <div className='pop-over-content-row'>
                <span className='pop-over-content-item' style={{width: '30%'}}>091-121-11</span>
                <span className='pop-over-content-item' style={{width: '30%'}}>废物代码11</span>
                <span className='pop-over-content-item' style={{width: '10%'}}>20L</span>
                <span className='pop-over-content-item' style={{width: '10%'}}>98%</span>
                <span className='pop-over-content-item' style={{width: '15%'}}>正常</span>
            </div>
            <div className='pop-over-content-row'>
                <span className='pop-over-content-item' style={{width: '30%'}}>091-121-11</span>
                <span className='pop-over-content-item' style={{width: '30%'}}>废物代码11</span>
                <span className='pop-over-content-item' style={{width: '10%'}}>20L</span>
                <span className='pop-over-content-item' style={{width: '10%'}}>98%</span>
                <span className='pop-over-content-item' style={{width: '15%'}}>正常</span>
            </div>
            <div className='pop-over-content-row'>
                <span className='pop-over-content-item' style={{width: '30%'}}>091-121-11</span>
                <span className='pop-over-content-item' style={{width: '30%'}}>废物代码11</span>
                <span className='pop-over-content-item' style={{width: '10%'}}>20L</span>
                <span className='pop-over-content-item' style={{width: '10%'}}>98%</span>
                <span className='pop-over-content-item' style={{width: '15%'}}>正常</span>
            </div>
        
        </PopOverContent>
    );
    // 开始滚动
    useEffect(() => {
        // 多拷贝一层，让它无缝滚动
        childDom2.current.innerHTML = childDom1.current.innerHTML;
        childDom3.current.innerHTML = childDom1.current.innerHTML;
        let timer;
        if (isScrolle) {
            timer = setInterval(
                () =>
                    {
                        console.log(`计数count: ${count}`)
                        console.log(`isScrolle: ${isScrolle}`)
                        console.log(`warper.current.scrollTop: ${warper.current.scrollTop}`)
                        console.log(`childDom1.current.scrollHeight: ${childDom1.current.scrollHeight}`)
                        warper.current.scrollTop >= childDom1.current.scrollHeight
                        ? (warper.current.scrollTop = 0)
                        : warper.current.scrollTop++
                        setCount(count +1)
                    },
                speed
            );
        }
        return () => {
            clearTimeout(timer);
        };
    }, [isScrolle, count]);

    const hoverHandler = (flag) => setIsScrolle(flag);

    return (
        <div className='tablebox1'>
            <div className='tbl-header2'>
                <table>
                    <thead>
                        <tr>
                            <th>排名</th>
                            <th>地市</th>
                            <th>销售收入</th>
                            <th>同比(%)</th>
                            <th>环比(%)</th>
                        </tr>
                    </thead>
                    <tbody ref={childDom3} style={{ opacity: 0 }}></tbody>
                </table>
            </div>
            <div className='tbl-body2'>
                <table className='parent' ref={warper}>
                    <thead style={{ opacity: 0, background: 'red' }}>
                        <tr>
                            <th>排名</th>
                            <th>地市</th>
                            <th>销售收入</th>
                            <th>同比(%)</th>
                            <th>环比(%)</th>
                        </tr>
                    </thead>
                    <tbody className='child' ref={childDom1}
                        onMouseOver={(e) => {
                            return hoverHandler(false)
                        }}
                        onMouseLeave={() => hoverHandler(true)}
                    >
                        {list.map((item) => (
                            <Popover key={item.billNo} placement="right" color="#121626" overlayClassName="pop-over-container" title={text} content={content} trigger="hover">
                                <tr
                                    key={item.billNo}

                                >
                                    <td>{item.billNo}</td>
                                    <td>{item.city}</td>
                                    <td>{item.saleIncome}</td>
                                    <td>{item.an}</td>
                                    <td>{item.Mon}</td>
                                </tr>
                            </Popover>
                        ))}
                    </tbody>
                    <tbody className='child' ref={childDom2}></tbody>
                </table>
            </div>
        </div>
    );
}