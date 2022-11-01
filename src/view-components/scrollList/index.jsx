import React,{useRef, useEffect} from 'react'
import { ContainerBox } from './style'

export default function useScrollList(props) {
    const scrollBox = useRef();
    const common1 = useRef();
    const common2 = useRef();
    const timer = useRef(null);
    const { data, column } = props;
    useEffect(() => {
        clearInterval(timer.current);
        scrollBox.current.scrollTop = 0;
        roll(60);
    }, [data]);

    const roll = (t) => {
        if (scrollBox.current.clientHeight > common1.current.clientHeight) {
            return;
        }
        common2.current.innerHTML = common1.current.innerHTML;
        timer.current = setInterval(rollStart, t);
        // 鼠标移入div时暂停滚动
        scrollBox.current.onmouseover = function () {
            clearInterval(timer.current);
        };
        // 鼠标移出div后继续滚动
        scrollBox.current.onmouseout = function () {
            clearInterval(timer.current);
            if (scrollBox.current.clientHeight < common1.current.clientHeight) {
                timer.current = setInterval(rollStart, t);
            }
        };
    };
    // 开始滚动函数
    const rollStart = () => {
        if (!scrollBox.current) return;
        if (scrollBox.current.scrollTop >= common1.current.offsetHeight) {
            scrollBox.current.scrollTop = 0;
        } else {
            scrollBox.current.scrollTop = scrollBox.current.scrollTop + 2;
        }
    };
    return (
        <ContainerBox>
            <div ref={scrollBox} className="scroll-list">
                <div ref={common1} className="list-content">
                    {data.map((ele, index) => {
                        return (
                            <ul key={index}>
                                {column.map((item) => {
                                    if (item.renderStyle) {
                                        return item.renderStyle(ele[item.key]);
                                    }

                                    return ele[item.dataIndex] == '未处理' ? (
                                        <li key={item.key} style={{ color: '#f90' }}>
                                            {ele[item.dataIndex]}
                                        </li>
                                    ) : ele[item.dataIndex] == '已处理' ? (
                                        <li key={item.key} style={{ color: '#0f0' }}>
                                            {ele[item.dataIndex]}
                                        </li>
                                    ) : (
                                        <li key={item.key} title={ele[item.dataIndex]}>
                                            {ele[item.dataIndex]}
                                        </li>
                                    );
                                })}
                            </ul>
                        );
                    })}
                </div>
                <div ref={common2} className="list-content"></div>
            </div>
        </ContainerBox>
    );
}
