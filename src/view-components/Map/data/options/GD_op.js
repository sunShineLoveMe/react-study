export const provienceData = [
    { name: '广州', type: 'areaCenterCity', value: 0, departId: '001021' },
    { name: '深圳', type: 'areaCenterCity', value: 0, departId: '001020' },
    { name: '佛山', type: 'areaCenterCity', value: 0, departId: '001004' },
    { name: '东莞', type: 'areaCenterCity', value: 0, departId: '001008' },
    { name: '中山', type: 'areaCenterCity', value: 0, departId: '001019' },
    { name: '珠海', type: 'areaCenterCity', value: 0, departId: '001011' },
    { name: '江门', type: 'areaCenterCity', value: 0, departId: '001015' },
    { name: '肇庆', type: 'areaCenterCity', value: 0, departId: '001005' },
    { name: '惠州', type: 'areaCenterCity', value: 0, departId: '001010' },
    { name: '汕头', type: 'areaCenterCity', value: 0, departId: '001007' },
    { name: '潮州', type: 'areaCenterCity', value: 0, departId: '001009' },
    { name: '揭阳', type: 'areaCenterCity', value: 0, departId: '001006' },
    { name: '汕尾', type: 'areaCenterCity', value: 0, departId: '001001' },
    { name: '湛江', type: 'areaCenterCity', value: 0, departId: '001018' },
    { name: '茂名', type: 'areaCenterCity', value: 0, departId: '001003' },
    { name: '阳江', type: 'areaCenterCity', value: 0, departId: '001016' },
    { name: '韶关', type: 'areaCenterCity', value: 0, departId: '001013' },
    { name: '清远', type: 'areaCenterCity', value: 0, departId: '001017' },
    { name: '云浮', type: 'areaCenterCity', value: 0, departId: '001002' },
    { name: '梅州', type: 'areaCenterCity', value: 0, departId: '001014' },
    { name: '河源', type: 'areaCenterCity', value: 0, departId: '001012' },]

export const convertData = (data) => {
    const geoCoordMap = {
        '广州': [113.480637, 23.325178],
        '深圳': [114.085947, 22.597],
        '佛山': [113.022717, 23.028762],
        '东莞': [113.746262, 23.006237],
        '中山': [113.382391, 22.521113],
        '珠海': [113.353986, 22.124979],
        '江门': [112.594942, 22.290431],
        '肇庆': [112.072529, 23.651546],
        '惠州': [114.412599, 23.079404],
        '汕头': [116.708463, 23.37102],
        '潮州': [116.832301, 23.761701],
        '揭阳': [116.055733, 23.343778],
        '汕尾': [115.364238, 22.974485],
        '湛江': [110.064977, 21.274898],
        '茂名': [110.919229, 21.959751],
        '阳江': [111.805107, 22.009222],
        '韶关': [113.591544, 24.801322],
        '清远': [113.051227, 24.285022],
        '云浮': [112.044439, 22.929801],
        '梅州': [116.117582, 24.299112],
        '河源': [114.997802, 23.946266],
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
        map: 'GD',
        roam: false, // 开启鼠标缩放
        zoom: 1, // 当前视角的缩放比例
        tooltip: {
            show: true,       //不显示提示标签
        },
        center: [113.122717, 22.900762],
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
            mapType: 'GD',
            geoIndex: 0,
            roam: true,
            zoom: 1,
            center: [113.122717, 22.900762],
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