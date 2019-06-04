import { ViewList } from 'dom-renderer';

const map = new AMap.Map('container', {
    resizeEnable: true, //是否监控地图容器尺寸变化
    zoom: 16, //初始化地图层级
    center: [104.062617, 30.539173], //初始化地图中心点
    dragEnable: false,
});
const marker = new AMap.Marker({
    position: [104.062617, 30.539173]//位置
});
map.add(marker);//添加到地图

(async () => {  
 
    for (let name of ['teacher' , 'student']) {
        const view_list = new ViewList( document.querySelector('#' + name) ),
            list = await (await fetch(`source/${name}s.json`)).json();

        await view_list.render( list );
    }
})();