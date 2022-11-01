export const provienceData = [
    { name: '南通市', type: 'areaCenterCity', value: 0, departId: '320600' },
    { name: '通州区', type: 'areaCenterCity', value: 0, departId: '320612' },
    { name: '崇川区', type: 'areaCenterCity', value: 0, departId: '320613' },
    { name: '海门区', type: 'areaCenterCity', value: 0, departId: '320614' },
    { name: '如东县', type: 'areaCenterCity', value: 0, departId: '320623' },
    { name: '启东市', type: 'areaCenterCity', value: 0, departId: '320681' },
    { name: '如皋市', type: 'areaCenterCity', value: 0, departId: '320682' },
    { name: '海安市', type: 'areaCenterCity', value: 0, departId: '320685' }]

export const convertData = (data) => {
    const geoCoordMap = {
        '南通市': [120.90159, 31.98655],
        '通州区': [116.66342, 39.91602],
        '崇川区': [120.86342, 32.01592],
        '海门区': [120.90159, 31.98655],
        '如东县': [121.19244, 32.33587],
        '启东市': [121.66347, 31.81423],
        '如皋市': [120.57947, 32.37785],
        '海安市': [120.47443, 32.5392]
    }
    let res = [];
    for (let i = 0; i < data.length; i++) {
        let geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
                area: data[i].departId,
                type: data[i].type,
            });
        }
    }
    return res
}

export const initOption = {
    dataRange: {
        show: true,
        x: 'left',
        y: 'bottom',
        splitList: [
            { start: 0, end: 0, color: '#13667e' },//当值为5时，区域背景
            { start: 5, end: 5, color: '#187fed' },//当值为5时，区域背景
        ],
    },
    geo: {
        map: 'NT',
        roam: false, // 开启鼠标缩放
        zoom: 1, // 当前视角的缩放比例
        tooltip: {
            show: true,       //不显示提示标签
        },
        // center: [113.122717, 22.900762],
        label: {
            normal: {
                show: true,//显示省份标签
                textStyle: { color: "#333333" }//省份标签字体颜色
            },
            emphasis: {//对应的鼠标悬浮效果
                show: false,
                textStyle: { color: "#333333" }
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 1,//区域边框宽度
                borderColor: '#345088',//区域边框颜色
                areaColor: "#fff",//区域颜色
                label: { show: false }
            },
            emphasis: {
                areaColor: "#187fed",
            }
        },
    },
    series: [
        {
            type: 'scatter',  //'line'（折线图） | 'bar'（柱状图） | 'scatter'（散点图） | 'k'（K线图）
            //'pie'（饼图） | 'radar'（雷达图） | 'chord'（和弦图） | 'force'（力导向布局图） | 'map'（地图）
            coordinateSystem: 'geo',
            data: convertData(provienceData),
            symbolSize: 10,
            symbolRotate: 40,
            geoIndex: 0,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'bottom',
                    show: true,
                    color: '#fff',
                },
                emphasis: {
                    show: false
                }
            },
            tooltip: {
                show: true,       //不显示提示标签
                formatter: '{c}',      //提示标签格式
                backgroundColor: "#000",//提示标签背景颜色
                borderColor: '#ccc',
                borderWidth: 5,
                textStyle: { color: "#ccc" } //提示标签字体颜色
            },
            itemStyle: {
                normal: {
                    color: '#fff'
                }
            }
        },
        {
            type: 'map',
            mapType: 'NT',
            geoIndex: 0,
            roam: true,
            zoom: 1,
            // center: [113.122717, 22.900762],
            tooltip: {
                show: true,       //不显示提示标签
            },
            label: {
                normal: {
                    show: true    //显示省份标签
                },
                emphasis: {
                    show: true,
                }
            },
            itemStyle: {
                //正常样式
                normal: {
                    borderWidth: 1,      //区域边框宽度
                    borderColor: '#ffffff',  //区域边框颜色
                    areaColor: "#187fed",
                },
                //鼠标事件区块样式
                emphasis: {
                    areaColor: "#187fed",
                }
                
            },
            data: provienceData
        }
    ],
}