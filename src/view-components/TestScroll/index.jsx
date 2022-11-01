import React, { useEffect, useRef, useState } from 'react';
import './table.less';

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

    // 滚动速度，值越小，滚动越快
    const speed = 30;
    const warper = useRef();
    const childDom1 = useRef();
    const childDom2 = useRef();
    const childDom3 = useRef();
    // 开始滚动
    useEffect(() => {
        // 多拷贝一层，让它无缝滚动
        childDom2.current.innerHTML = childDom1.current.innerHTML;
        childDom3.current.innerHTML = childDom1.current.innerHTML;
        let timer;
        if (isScrolle) {
            timer = setInterval(
                () =>
                    warper.current.scrollTop >= childDom1.current.scrollHeight
                        ? (warper.current.scrollTop = 0)
                        : warper.current.scrollTop++,
                speed
            );
        }
        return () => {
            clearTimeout(timer);
        };
    }, [isScrolle]);

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
                    <tbody ref={childDom3} style={{opacity:0}}></tbody>
                </table>
            </div>
            <div className='tbl-body2'>
                <table className='parent' ref={warper}>
                    <thead style={{opacity:0,background:'red'}}>
                        <tr>
                            <th>排名</th>
                            <th>地市</th>
                            <th>销售收入</th>
                            <th>同比(%)</th>
                            <th>环比(%)</th>
                        </tr>
                    </thead>
                    <tbody className='child' ref={childDom1}
                        onMouseOver={() => {
                            return hoverHandler(false)
                        }}
                        onMouseLeave={() => hoverHandler(true)}
                    >
                        {list.map((item) => (
                            <tr
                                key={item.billNo}
                                
                            >
                                <td>{item.billNo}</td>
                                <td>{item.city}</td>
                                <td>{item.saleIncome}</td>
                                <td>{item.an}</td>
                                <td>{item.Mon}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tbody className='child' ref={childDom2}></tbody>
                </table>
            </div>
        </div>
    );
}