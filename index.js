var map = L.map('map', {
    center: [36.575, 137.984],
    zoom: 5.2,
    minZoom: 2,
    smoothSensitivity: 1.5,
    preferCanvas:true,
});
L.control.scale({ maxWidth: 150, position: 'bottomright', imperial: false }).addTo(map);  // スケールを表示
map.zoomControl.setPosition('bottomleft');
var PolygonLayer_Style_nerv_1 = {
    "color": "#ffffff",
    "weight": 1,
    "opacity": 1,
    "fillColor": "#3a3a3a",
    "fillOpacity": 1,
}
var PolygonLayer_Style_nerv_2 = {
    "color": "#999999",
    "weight": 1,
    "opacity": 1,
    "fillOpacity": 0,
}
var PolygonLayer_Style_nerv_3 = {
    "color": "#999999",
    "weight": 0.5,
    "opacity": 1,
    "fillOpacity": 0,
}
var PolygonLayer_Style_wni_1 = {
    "color": "#000000",
    "weight": 0.8,
    "opacity": 1,
    "fillColor": "#ffffff",
    "fillOpacity": 1,
}
var PolygonLayer_Style_wni_2 = {
    "color": "#ffffff",
    "weight": 1,
    "opacity": 1,
    "fillOpacity": 0,
}
var PolygonLayer_Style_wni_3 = {
    "color": "#999999",
    "weight": 0.6,
    "opacity": 1,
    "fillOpacity": 0,
}
var PolygonLayer_Style_quarog_1 = {
    "color": "#334948",
    "weight": 1.2,
    "opacity": 1,
    "fillColor": "#508C78",
    "fillOpacity": 1,
}
var PolygonLayer_Style_quarog_2 = {
    "color": "#334948",
    "weight": 1,
    "opacity": 1,
    "fillOpacity": 0,
}
var PolygonLayer_Style_quarog_3 = {
    "color": "#334948",
    "weight": 0.5,
    "opacity": 1,
    "fillOpacity": 0,
}
var PolygonLayer_Style_test_tsunami_1 = {
    "color": "#dd00dd",
    "weight": 8,
    "opacity": 1,
}
var PolygonLayer_Style_test_tsunami_2 = {
    "color": "#ff1400",
    "weight": 7,
    "opacity": 1,
}
var PolygonLayer_Style_test_tsunami_2_kaijo = {
    "color": "#ff1400",
    "weight": 5,
    "opacity": 1,
    "dashArray": "3 8"
}
var PolygonLayer_Style_test_tsunami_3 = {
    "color": "#faf500",
    "weight": 7,
    "opacity": 1,
}
var PolygonLayer_Style_test_tsunami_3_kaijo = {
    "color": "#faf500",
    "weight": 5,
    "opacity": 1,
    "dashArray": "3 8"
}
var PolygonLayer_Style_test_tsunami_4 = {
    "color": "#00ccff",
    "weight": 7,
    "opacity": 1,
}
map.createPane("tsunami_map").style.zIndex = 110; //津波
map.createPane("tsunami_map2").style.zIndex = 120; //津波
map.createPane("back").style.zIndex = 1; //地図
map.createPane("pane_map").style.zIndex = 5; //地図
map.createPane("nihon").style.zIndex = 7; //地図
map.createPane("shindo10").style.zIndex = 10;
map.createPane("shindo20").style.zIndex = 20;
map.createPane("shindo30").style.zIndex = 30;
map.createPane("shindo40").style.zIndex = 40;
map.createPane("shindo45").style.zIndex = 45;
map.createPane("shindo46").style.zIndex = 46;
map.createPane("shindo50").style.zIndex = 50;
map.createPane("shindo55").style.zIndex = 55;
map.createPane("shindo60").style.zIndex = 60;
map.createPane("shindo70").style.zIndex = 70;
map.createPane("shingen").style.zIndex = 100; //震源
Cookies.remove('visited');
var japan; //都道府県
var asia; //アジア地域高品質ポリゴン 
var countries; //アジア地域を除く世界の低品質ポリゴン  
var cities; //市区町村
var japan_data; //都道府県データ
var asia_data; //アジア地域高品質ポリゴンデータ 
var countries_data; //アジア地域を除く世界の低品質ポリゴンデータ
var cities_data; //市区町村データ

//日本
var PolygonLayer_Style_nerv_J = {
    "color": "#9C9E9B",
    "weight": 1.5,
    "opacity": 1,
    "fillColor": "#656865",
    "fillOpacity": 1
}
//海外
var PolygonLayer_Style_nerv_W = {
    "color": "#9BACC5",
    "weight": 1.0,
    "opacity": 1,
    "fillColor": "#243C62",
    "fillOpacity": 1
}
//日本境
var nihon = {
    "color": "#9C9E9B",
    "weight": 1.0,
    "opacity": 1,
    "fillColor": "#ECEDEC",
    "fillOpacity": 0
}

$.getJSON("source/prefectures.geojson", function (data) {
    L.geoJson(data, {
        pane: "back",
        style: PolygonLayer_Style_nerv_J
    }).addTo(map);
});

$.getJSON("source/world.geojson", function (data) {
    L.geoJson(data, {
        pane: "back",
        style: PolygonLayer_Style_nerv_W
    }).addTo(map);
});
//自作geojson
var base = L.tileLayer('', {
    pane: "pane_map",
    style: PolygonLayer_Style_nerv_1,
    attribution: '地震・津波情報:<a href="https://www.p2pquake.net/" target="_blank">P2P地震情報</a>'
}).addTo(map);

//ここからタイルマップ

var google1 = L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
    pane: "pane_map",
    style: PolygonLayer_Style_nerv_1,
    attribution: '地図情報:<a href="https://www.google.com/maps" target="_blank">googleマップ</a>、地震・津波情報:<a href="https://www.p2pquake.net/" target="_blank">P2P地震情報</a>'
});

var google2 = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    pane: "pane_map",
    style: PolygonLayer_Style_nerv_1,
    attribution: '地図情報:<a href="https://www.google.com/maps" target="_blank">googleマップ</a>、地震・津波情報:<a href="https://www.p2pquake.net/" target="_blank">P2P地震情報</a>'
}); //最初に表示させるタイルに addTo() をつける

var google3 = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
    pane: "pane_map",
    style: PolygonLayer_Style_nerv_1,
    attribution: '地図情報:<a href="https://www.google.com/maps" target="_blank">googleマップ</a>、地震・津波情報:<a href="https://www.p2pquake.net/" target="_blank">P2P地震情報</a>'
});

var google4 = L.tileLayer('https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}', {
    pane: "pane_map",
    style: PolygonLayer_Style_nerv_1,
    attribution: '地図情報:<a href="https://www.google.com/maps" target="_blank">googleマップ</a>、地震・津波情報:<a href="https://www.p2pquake.net/" target="_blank">P2P地震情報</a>'
});

var tanshoku = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
    pane: "pane_map",
    style: PolygonLayer_Style_nerv_1,
    attribution: '地図情報:<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>、地震・津波情報:<a href="https://www.p2pquake.net/" target="_blank">P2P地震情報</a>'
});

var hyojun = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
    pane: "pane_map",
    style: PolygonLayer_Style_nerv_1,
    attribution: '地図情報:<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>、地震・津波情報:<a href="https://www.p2pquake.net/" target="_blank">P2P地震情報</a>'
});

var dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
    pane: "pane_map",
    style: PolygonLayer_Style_nerv_1,
    attribution: '地図情報:<a href="https://carto.com/" target="_blank">CARTO Dark</a>、地震・津波情報:<a href="https://www.p2pquake.net/" target="_blank">P2P地震情報</a>'
});

var inei = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/hillshademap/{z}/{x}/{y}.png', {
    pane: "pane_map",
    style: PolygonLayer_Style_nerv_1,
    attribution: '地図情報:<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>、地震・津波情報:<a href="https://www.p2pquake.net/" target="_blank">P2P地震情報</a>'
});

var hyoko_color = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/relief/{z}/{x}/{y}.png', {
    pane: "pane_map",
    style: PolygonLayer_Style_nerv_1,
    attribution: '地図情報:<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>、地震・津波情報:<a href="https://www.p2pquake.net/" target="_blank">P2P地震情報</a>'
});





L.control.layers({
    "単色(black)": base,
    "地図": google1,  
    "航空写真": google2,
    "航空+地図": google3,
    "地図(透過)": google4,
    "地理院地図(淡色)": tanshoku,
    "地理院地図(標準)": hyojun,
    "CARTO Dark": dark,
    "地理院陰影起伏図": inei,
    "地理院色別標高図": hyoko_color,
    
}).addTo(map);

$.getJSON("source/prefectures.geojson", function (data) {
    L.geoJson(data, {
        pane: "nihon",
        style: nihon
    }).addTo(map);
});

var TsunamiStations;
$.getJSON("source/stations.json")
.done (function (data) {
    TsunamiStations = data;
});
var AreaNameToYomi;
$.getJSON("source/areanamekana.json")
.done (function (data) {
    AreaNameToYomi = data;
});


map.on('zoomend', function(e) {
    if (cities) {
        if (map.getZoom() < 7) {
            map.removeLayer(cities);
        } else {
            cities.addTo(map);
        }
    }
});
if (cities) {
        
            cities.addTo(map);
        
    }

var list = document.getElementById('quakelist');
list.onchange = event => {
    console.log(list.selectedIndex);
    QuakeSelect(list.selectedIndex);
}

var QuakeJson;
var shindo_layer = L.layerGroup();
var shindo_layer2 = L.layerGroup();
var shindo_layer3 = L.layerGroup();
var QuakeDetails;
var foreOrObse = [];
var point_onoff = 1; //0:off, 1:on
var fill_onoff = 1; //0:off, 1:on

async function GetQuake(option) {
    var url = "https://www.jma.go.jp/bosai/tsunami/data/list.json";
    const response = await fetch(url)
    .then(response => response.json())
    .then(data => {
        QuakeJson = data;
        gettime = new Date();
        var getmonth = ('0' + (gettime.getMonth() + 1)).slice(-2);
        var getday = ('0' + gettime.getDate()).slice(-2);
        var gethour = ('0' + gettime.getHours()).slice(-2);
        var getminute = ('0' + gettime.getMinutes()).slice(-2);
        var getsecond = ('0' + gettime.getSeconds()).slice(-2);
        var weekDay = ["日", "月", "火", "水", "木", "金", "土"];
        document.getElementById('title_time').innerHTML = gethour+'時'+getminute+'分現在';
        var int = 0;
        while (list.lastChild) {
            list.removeChild(list.lastChild);
        }
        foreOrObse = [];
        QuakeJson.forEach(element => {
                var option = document.createElement("option");
                var text;
                var test = "";
                var firstPoint = "";
                var datetime = element["rdt"].split("T");
                var datetime0 = datetime[0].split("-");
                var datetime1 = datetime[1].split(":");
                var time = datetime0[0].substring(2,4)+"/"+datetime0[1]+"/"+datetime0[2]+" "+datetime1[0]+"時"+datetime1[1]+"分発表";
                //foreOrObseは、0=津波警報系、1=津波観測に関する情報、2=各地の満潮時刻系、3=沖合の津波観測に関する情報、10=エラーを示す。
                if (element["ttl"].indexOf("津波予報") !== -1) { // 津波警報・注意報・予報
                    text = element["ttl"];
                    foreOrObse.push(0);
                } else { // (沖合の)津波観測に関する情報・各地の満潮時刻・津波到達予想時刻に関する情報
                    if (element["ttl"].indexOf("各地の満潮時刻") !== -1) { // 各地の満潮時刻・津波到達予想時刻に関する情報
                        text = element["ttl"];
                        foreOrObse.push(2);
                    } else if (element["ttl"].indexOf("沖合の津波観測に関する情報") !== -1) { // 沖合の津波観測に関する情報
                        text = element["ttl"];
                        foreOrObse.push(3);
                    } else if (element["ttl"].indexOf("津波観測に関する情報") !== -1) { // 津波観測に関する情報
                        text = element["ttl"];
                        foreOrObse.push(1);
                    } else { // error
                        text = "その他";
                        foreOrObse.push(10);
                    }
                }
                // if (element["areas"] == "") {
                //     nashi = "【データなし】";
                // } else {
                //     firstPoint = element["areas"][0]["name"];
                // }
                // text = element["issue"]["time"]+" "+firstPoint;
                option.textContent = test + time + "　" + text;
                list.appendChild(option);
        });
        setTimeout(() => {
            
        QuakeSelect(0);
        }, 50);
    })
}

function QuakeSelect(num) {
    var mapAdd = false;
    var mapAdd_num = 0;
    var tsunami_forecast_howmany;

    if (shindo_layer) {map.removeLayer(shindo_layer);}
    if (shindo_layer2) {map.removeLayer(shindo_layer2);}
    if (shindo_layer3) {map.removeLayer(shindo_layer3);}
    shindo_layer = L.layerGroup();
    shindo_layer2 = L.layerGroup();
    shindo_layer3 = L.layerGroup();
    
    $.getJSON("https://www.jma.go.jp/bosai/tsunami/data/"+QuakeJson[num]["json"])
    .done (function (data) {
        QuakeDetails = "";
        QuakeDetails = data;
        allInfoRemove();
        if (foreOrObse[num] == 0 || foreOrObse[num] == 1) { //津波警報・注意報・予報
            document.getElementById('title_text').innerText = "津波情報";
            document.getElementById('info1').classList.add("display");
            document.getElementById('ui_display_onoff_info1_check').checked = true;
            tsunami_forecast_howmany = QuakeDetails["Body"]["Tsunami"]["Forecast"]["Item"].length;
            console.log(tsunami_forecast_howmany)
            shindo_layer = L.layerGroup();
            QuakeDetails["Body"]["Tsunami"]["Forecast"]["Item"].forEach(element => {
                let name = element["Area"]["Name"];
                var url = "source/geojson/"+name+".geojson";
                var color_Style;
                var type;
                var nodraw = false;
                if (element["Category"]["Kind"]["Code"] == "52" || element["Category"]["Kind"]["Code"] == "53") {
                    color_Style = PolygonLayer_Style_test_tsunami_1;
                    type = "大津波警報";
                } else if (element["Category"]["Kind"]["Code"] == "50") {
                    color_Style = PolygonLayer_Style_test_tsunami_2_kaijo;
                    type = "津波警報解除";
                } else if (element["Category"]["Kind"]["Code"] == "51") {
                    color_Style = PolygonLayer_Style_test_tsunami_2;
                    type = "津波警報";
                } else if (element["Category"]["Kind"]["Code"] == "60") {
                    color_Style = PolygonLayer_Style_test_tsunami_3_kaijo;
                    type = "津波注意報解除";
                } else if (element["Category"]["Kind"]["Code"] == "62") {
                    color_Style = PolygonLayer_Style_test_tsunami_3;
                    type = "津波注意報";
                } else if (element["Category"]["Kind"]["Code"] == "71" || element["Category"]["Kind"]["Code"] == "72" || element["Category"]["Kind"]["Code"] == "73") {
                    color_Style = PolygonLayer_Style_test_tsunami_4;
                    type = "津波予報";
                } else if (element["Category"]["Kind"]["Code"] == "00") {
                    nodraw = true;
                }
                if (nodraw == false) {
                    $.getJSON(url)
                    .done(function (data) {
                        var line = L.geoJson(data, {
                            pane: "tsunami_map",
                            style: color_Style,
                            popupAnchor: [0, -40]
                        });
                        line.on('mouseover', function (e) {
                            mousehover(name,type);
                        });
                        shindo_layer.addLayer(line);
                        if (mapAdd_num == tsunami_forecast_howmany - 1) {
                            mapAdd = true;
                        } else {
                            mapAdd_num++;
                        }
                    });
                }
                console.log(name+" "+element["Category"]["Kind"]["Code"]+" "+type);
            });
            function mapAddtimeout() {
                setTimeout(() => {
                    if (mapAdd == true) {
                        if (fill_onoff == 1) {
                            shindo_layer.addTo(map);
                        }
                    } else {
                        mapAddtimeout();
                        console.warn("繰り返しています…。");
                    }
                }, 200);
            }
            mapAddtimeout();

            if (foreOrObse[num] == 1) { //津波観測に関する情報
                document.getElementById('title_text').innerText = "津波情報";
                document.getElementById('info2').classList.add("display");
                document.getElementById('ui_display_onoff_info2_check').checked = true;
                shindo_layer2 = L.layerGroup();
                QuakeDetails["Body"]["Tsunami"]["Observation"]["Item"].forEach(element => {
                    element["Station"].forEach(element2 => {
                        var result = TsunamiStationsCode.indexOf(Number(element2["Code"]));
                        console.log(element2["Code"]);
                        console.log(result);
                        //resultは観測点コードの中で探した結果（順番）を返す
                        if (result != -1) {
                            //magnitudeは、0=5M～、1=3M～、2=2M～、3=1M～、4=0.5M～、5=～0.5M、6=観測中を示す。
                            var magnitude;
                            var value;
                            if (element2["MaxHeight"]["Condition"] && !element2["MaxHeight"]["TsunamiHeight"]) { //観測中の場合
                                value = "観測中";
                                magnitude = 6;
                            } else {
                                value = Number(element2["MaxHeight"]["TsunamiHeight"]);
                                magnitude = value >= 5 ? 0 :
                                            value >= 3 ? 1 :
                                            value >= 2 ? 2 :
                                            value >= 1 ? 3 :
                                            value >= 0.5 ? 4 :
                                                        5 ;
                                value = value + "m";
                            }
                            var color = magnitude == 0 ? "#8900c7" :
                                        magnitude == 1 ? "#ff00d9" :
                                        magnitude == 2 ? "#fd000d" :
                                        magnitude == 3 ? "#ff7a00" :
                                        magnitude == 4 ? "#e2df24" :
                                        magnitude == 5 ? "#10b4eb" :
                                        magnitude == 6 ? "#1adf11" :
                                                    "#00000000" ;
                            var circle_style = {
                                "radius": 12,
                                "color": "#000000",
                                "fillColor": color,
                                "weight": 2,
                                "opacity": 1,
                                "fillOpacity": 1,
                                "pane": "tsunami_map2"
                            }
                            let shindo_latlng = new L.LatLng(TsunamiStations["items"][result]["latitude"], TsunamiStations["items"][result]["longitude"]);
                            let circle = L.circleMarker(shindo_latlng,  circle_style );
                            circle.bindTooltip('<ruby>'+element2["Name"] + '<rt style="font-size: 0.7em;">' + TsunamiStations["items"][result]["kana"] + '</rt></ruby>　'+value ,{className: "center_circle_tooltip"})
                            shindo_layer2.addLayer(circle);
                        }
                    });
                });
                if (point_onoff == 1) {
                    shindo_layer2.addTo(map);
                }
                yososhindoCreate(1);
            } else {
                yososhindoCreate();
            }
        } else if (foreOrObse[num] == 2) { //各地の満潮時刻・津波到達予想時刻に関する情報
            yososhindoCreate();
            document.getElementById('text_yososhindo').classList.add("display");
        } else if (foreOrObse[num] == 3) { //沖合の津波観測に関する情報
            document.getElementById('title_text').innerText = "津波情報";
            document.getElementById('info2').classList.add("display");
            document.getElementById('ui_display_onoff_info2_check').checked = true;
            document.getElementById('info3').classList.add("display");
            document.getElementById('info3').innerText = QuakeDetails["comment"]["warning"]["text"];
            shindo_layer3 = L.layerGroup();
            QuakeDetails["tsunami_observation"].forEach(element => {
                var result = TsunamiStationsCode.indexOf(Number(element["station_code"]));
                console.log(element["station_code"]);
                console.log(result);
                //resultは観測点コードの中で探した結果（順番）を返す
                if (result != -1) {
                    //magnitudeは、0=5M～、1=3M～、2=2M～、3=1M～、4=0.5M～、5=～0.5M、6=観測中を示す。
                    var magnitude;
                    var value;
                    if (element["MaxHeight"]["condition"] && !element["MaxHeight"]["value"]) { //観測中の場合
                        value = "観測中";
                        magnitude = 6;
                    } else {
                        value = Number(element["MaxHeight"]["value"].replace("m",""));
                        magnitude = value >= 5 ? 0 :
                                    value >= 3 ? 1 :
                                    value >= 2 ? 2 :
                                    value >= 1 ? 3 :
                                    value >= 0.5 ? 4 :
                                                5 ;
                        value = value + "m";
                    }
                    var color = magnitude == 0 ? "#8900c7" :
                                magnitude == 1 ? "#ff00d9" :
                                magnitude == 2 ? "#fd000d" :
                                magnitude == 3 ? "#ff7a00" :
                                magnitude == 4 ? "#e2df24" :
                                magnitude == 5 ? "#10b4eb" :
                                magnitude == 6 ? "#1adf11" :
                                            "#00000000" ;
                    var circle_style = {
                        "radius": 12,
                        "color": "#000000",
                        "fillColor": color,
                        "weight": 2,
                        "opacity": 1,
                        "fillOpacity": 1,
                        "pane": "tsunami_map2"
                    }
                    let shindo_latlng = new L.LatLng(TsunamiStations["items"][result]["latitude"], TsunamiStations["items"][result]["longitude"]);
                    let circle = L.circleMarker(shindo_latlng,  circle_style );
                    circle.bindTooltip('<ruby>'+element["station_name"] + '<rt style="font-size: 0.7em;">' + element["station_yomi"] + '</rt></ruby>　'+value ,{className: "center_circle_tooltip"})
                    shindo_layer3.addLayer(circle);
                }
            });
            if (point_onoff == 1) {
                shindo_layer3.addTo(map);
            }
            
            yososhindoCreate(3);
        }
    });
}

GetQuake();

function mousehover(name,type) {
    let info = document.getElementById('info1');
    info.innerHTML = "選択中の海岸の津波情報<br>発表地域："+'<ruby>'+name+'<rt>'+AreaNameToYomi[name]+'</rt></ruby>'+"<br>発表種類："+type;
    if (type == "大津波警報") {
        info.style.background = "#dd00ddcc";
        info.style.color = "#ffffff";
    } else if (type == "津波警報" || type == "津波警報解除") {
        info.style.background = "#ff1400cc";
        info.style.color = "#ffffff";
    } else if (type == "津波注意報" || type == "津波注意報解除") {
        info.style.background = "#faf500cc";
        info.style.color = "#000000";
    } else if (type == "津波予報") {
        info.style.background = "#00ccffcc";
        info.style.color = "#000000";
    }
}

function allInfoRemove() {
    document.getElementById('info1').classList.remove("display");
    document.getElementById('ui_display_onoff_info1_check').checked = false;
    document.getElementById('info2').classList.remove("display");
    document.getElementById('ui_display_onoff_info2_check').checked = false;
    document.getElementById('info3').classList.remove("display");
}

function yososhindoCreate(aforeOrObse) {
    if (aforeOrObse == 1) { // 観測点ごと
        document.getElementById('img_mikata_text_yososhindo').src = "source/doc/point_mikata_text_yososhindo.png";
        document.getElementById('table_text_yososhindo').innerHTML = '<tr><td><ruby>観測点名<rt>カンソクテンメイ</rt></ruby></td><td>到達時刻</td><td>到達状況</td><td>大きさ</td></tr>';
        var arr_kind_code = {}; // {"505": {"code": 1, "text": "大津波警報"}, "102"…}のように、{"地域コード": {"code": tsunamiKindの数字, "text": "警報日本語"}}というようにする。
        QuakeDetails["Body"]["Tsunami"]["Forecast"]["Item"].forEach(element => { //注意報警報区別のため。
            var tsunamiKind;
            var type;
            if (element["Category"]["Kind"]["Code"] == "52" || element["Category"]["Kind"]["Code"] == "53") {
                tsunamiKind = 1;
                type = "大津波警報";
            } else if (element["Category"]["Kind"]["Code"] == "50") {
                tsunamiKind = 5;
                type = "津波警報解除";
            } else if (element["Category"]["Kind"]["Code"] == "51") {
                tsunamiKind = 2;
                type = "津波警報";
            } else if (element["Category"]["Kind"]["Code"] == "60") {
                tsunamiKind = 6;
                type = "津波注意報解除";
            } else if (element["Category"]["Kind"]["Code"] == "62") {
                tsunamiKind = 3;
                type = "津波注意報";
            } else if (element["Category"]["Kind"]["Code"] == "71" || element["Category"]["Kind"]["Code"] == "72" || element["Category"]["Kind"]["Code"] == "73") {
                tsunamiKind = 4;
                type = "津波予報";
            } else if (element["Category"]["Kind"]["Code"] == "00") {
                tsunamiKind = 10;
                type = "津波なし";
            }
            arr_kind_code[element["Area"]["Code"]] = {};
            arr_kind_code[element["Area"]["Code"]]["code"] = tsunamiKind;
            arr_kind_code[element["Area"]["Code"]]["text"] = type;
        });
        console.log(arr_kind_code);

        var trs1 = ""; var trs2 = ""; var trs3 = ""; var trs4 = ""; var trs5 = ""; var trs6 = "";
        QuakeDetails["Body"]["Tsunami"]["Observation"]["Item"].forEach(element => {
            var tsunamiKind = arr_kind_code[element["Area"]["Code"]]["code"];
            var type = arr_kind_code[element["Area"]["Code"]]["text"];
            element["Station"].forEach(element2 => {
                var result = TsunamiStationsCode.indexOf(Number(element2["Code"]));
                var nodraw = false;
                var info1 = "-";
                var info2 = "-";
                var info3 = "-";
                var info4 = "-";
                var innerHTML;
                if (tsunamiKind == 10) {nodraw = true;}
                if (nodraw == false) {
                    info1 = '<ruby>'+element2["Name"]+'<rt>'+TsunamiStations["items"][result]["kana"]+'</rt></ruby>';

                    if (element2["FirstHeight"]) {
                        if (element2["FirstHeight"]["ArrivalTime"]) {
                            info2 = element2["FirstHeight"]["ArrivalTime"].substring(11,13)+"時"+element2["FirstHeight"]["ArrivalTime"].substring(14,16)+"分";
                        }
                    }
                    if (element2["MaxHeight"] && info2 == "-") {
                        if (element2["MaxHeight"]["DateTime"]) {
                            info2 = element2["MaxHeight"]["DateTime"].substring(11,13)+"時"+element2["MaxHeight"]["DateTime"].substring(14,16)+"分";
                        }
                    }

                    if (element2["FirstHeight"]["Condition"]) {
                        info3 = element2["FirstHeight"]["Condition"];
                    } else {
                        info3 = "到達済み";
                    }

                    if (element2["MaxHeight"]["TsunamiHeight"]) {
                        info4 = element2["MaxHeight"]["TsunamiHeight"] + "m";
                    } else {
                        info4 = element2["MaxHeight"]["Condition"];
                    }
                    innerHTML = '<tr class="color'+tsunamiKind+'"><td>'+info1+'</td><td>'+info2+'</td><td>'+info3+'</td><td>'+info4+'</td></tr>';
                    eval('trs'+tsunamiKind+' += innerHTML');
                }
            });
        });
        for (var i = 1; i < 7; i++) {
            eval('document.getElementById("table_text_yososhindo").innerHTML += trs'+i);
        }

    } else if (aforeOrObse == 3) {
        document.getElementById('img_mikata_text_yososhindo').src = "source/doc/point_mikata_text_yososhindo.png";
        document.getElementById('table_text_yososhindo').innerHTML = '<tr><td><ruby>観測点名<rt>かんそくてんめい</rt></ruby></td><td>到達時刻</td><td>到達状況</td><td>大きさ</td></tr>';

        QuakeDetails["tsunami_observation"].forEach(element => {
            var nodraw = false;
            var info1 = "-";
            var info2 = "-";
            var info3 = "-";
            var info4 = "-";
            var innerHTML;
            if (nodraw == false) {
                info1 = '<ruby>'+element["station_name"]+'<rt>'+element["station_yomi"]+'</rt></ruby>';

                if (element["FirstHeight"]) {
                    if (element["FirstHeight"]["ArrivalTime"]) {
                        info2 = element["FirstHeight"]["ArrivalTime"]["text"].substring(element["FirstHeight"]["ArrivalTime"]["text"].length - 6);
                    }
                }
                if (element["MaxHeight"] && info2 == "-") {
                    if (element["MaxHeight"]["datetime"]) {
                        info2 = element["MaxHeight"]["datetime"]["text"].substring(element["MaxHeight"]["datetime"]["text"].length - 6);
                    }
                }

                if (element["FirstHeight"]["condition"]) {
                    info3 = element["FirstHeight"]["condition"];
                } else {
                    info3 = "到達済み";
                }

                if (element["MaxHeight"]["value"]) {
                    info4 = element["MaxHeight"]["value"];
                } else {
                    info4 = element["MaxHeight"]["condition"];
                }
                innerHTML = '<tr><td>'+info1+'</td><td>'+info2+'</td><td>'+info3+'</td><td>'+info4+'</td></tr>';
                document.getElementById('table_text_yososhindo').innerHTML += innerHTML;
            }
        });
    } else {
        document.getElementById('img_mikata_text_yososhindo').src = "source/doc/line_mikata_text_yososhindo.png";
        document.getElementById('table_text_yososhindo').innerHTML = '<tr><td><ruby>地域名<rt>チイキメイ</rt></ruby></td><td>到達時刻</td><td>到達状況</td><td>大きさ</td></tr>';
        QuakeDetails["Body"]["Tsunami"]["Forecast"]["Item"].forEach(element => {
            var tsunamiKind;
            var type;
            var nodraw = false;
            var info1 = "-";
            var info2 = "-";
            var info3 = "-";
            var info4 = "-";
            var innerHTML;
            if (element["Category"]["Kind"]["Code"] == "52" || element["Category"]["Kind"]["Code"] == "53") {
                tsunamiKind = 1;
                type = "大津波警報";
            } else if (element["Category"]["Kind"]["Code"] == "50") {
                tsunamiKind = 5;
                type = "津波警報解除";
            } else if (element["Category"]["Kind"]["Code"] == "51") {
                tsunamiKind = 2;
                type = "津波警報";
            } else if (element["Category"]["Kind"]["Code"] == "60") {
                tsunamiKind = 6;
                type = "津波注意報解除";
            } else if (element["Category"]["Kind"]["Code"] == "62") {
                tsunamiKind = 3;
                type = "津波注意報";
            } else if (element["Category"]["Kind"]["Code"] == "71" || element["Category"]["Kind"]["Code"] == "72" || element["Category"]["Kind"]["Code"] == "73") {
                tsunamiKind = 4;
                type = "津波予報";
            } else if (element["Category"]["Kind"]["Code"] == "00") {
                nodraw = true;
            }
            info1 = '<ruby>'+element["Area"]["Name"]+'<rt>'+AreaNameToYomi[element["Area"]["Name"]]+'</rt></ruby>';
            if (nodraw == false) {
                if (tsunamiKind != 5 && tsunamiKind != 6) {
                    if (element["FirstHeight"]) {
                        if (element["FirstHeight"]["ArrivalTime"]) {
                            info2 = element["FirstHeight"]["ArrivalTime"].substring(11,13)+"時"+element["FirstHeight"]["ArrivalTime"].substring(14,16)+"分";
                        }
                        if (element["FirstHeight"]["Condition"]) {
                            info3 = element["FirstHeight"]["Condition"];
                        } else {
                            info3 = '未到達<span style="font-size: 0.7em;">(到達予想時刻)</span>';
                        }
                    }
                    if (element["MaxHeight"]) {
                        if (element["MaxHeight"]["TsunamiHeight"]) {
                            info4 = element["MaxHeight"]["TsunamiHeight"] + "m";
                        }
                    }
                } else {
                    info3 = type;
                }
                innerHTML = '<tr class="color'+tsunamiKind+'"><td>'+info1+'</td><td>'+info2+'</td><td>'+info3+'</td><td>'+info4+'</td></tr>';
                document.getElementById('table_text_yososhindo').innerHTML += innerHTML;
            }
        });
    }
}

document.getElementById('map_ichi').addEventListener("click",()=>{
    map.flyTo([36.575, 137.984], 5.2, { duration: 0.5 });
});
document.getElementById('reload').addEventListener("click",()=>{
    var koushin_ok;
    var koushin;
    clearTimeout(koushin);
    clearTimeout(koushin_ok);
    
    GetQuake();
    document.getElementById('reload').innerText = "更新中…";
    koushin = setTimeout(() => {
        document.getElementById('reload').innerText = "更新完了";
        koushin_ok = setTimeout(() => {
            document.getElementById('reload').innerText = "情報更新";
        }, 1000);
    }, 1000);
});
document.getElementById('btn_text_yososhindo').addEventListener("click",()=>{
    document.getElementById('text_yososhindo').classList.add("display");
});
document.getElementById('close_text_yososhindo').addEventListener("click",()=>{
    document.getElementById('text_yososhindo').classList.remove("display")
});
document.getElementById('btn_mikata_text_yososhindo').addEventListener("click",()=>{
    document.getElementById('mikata_text_yososhindo').classList.add("display");
});
document.getElementById('close_mikata_text_yososhindo').addEventListener("click",()=>{
    document.getElementById('mikata_text_yososhindo').classList.remove("display")
});
document.getElementById('display_onoff_point_check').addEventListener("change",()=>{
    if (document.getElementById('display_onoff_point_check').checked) {
        if (shindo_layer2 != undefined && shindo_layer2 != 0) {
            map.addLayer(shindo_layer2);
            point_onoff = 1;
        } else {
            console.error('エラー： \"shindo_layer2\" が見つからないため、観測点をマップに追加できません。');
            point_onoff = 0;
        }
    } else {
        if (shindo_layer2 != undefined && shindo_layer2 != 0) {
            map.removeLayer(shindo_layer2);
            point_onoff = 0;
        } else {
            console.error('エラー： \"shindo_layer2\" が見つからないため、観測点をマップから削除できません。');
            point_onoff = 1;
        }
    }
    if (document.getElementById('display_onoff_point_check').checked) {
        if (shindo_layer3 != undefined && shindo_layer3 != 0) {
            map.addLayer(shindo_layer3);
            point_onoff = 1;
        } else {
            console.error('エラー： \"shindo_layer3\" が見つからないため、観測点をマップに追加できません。');
            point_onoff = 0;
        }
    } else {
        if (shindo_layer3 != undefined && shindo_layer3 != 0) {
            map.removeLayer(shindo_layer3);
            point_onoff = 0;
        } else {
            console.error('エラー： \"shindo_layer3\" が見つからないため、観測点をマップから削除できません。');
            point_onoff = 1;
        }
    }
});
document.getElementById('display_onoff_fill_check').addEventListener("change",()=>{
    if (document.getElementById('display_onoff_fill_check').checked) {
        if (shindo_layer != undefined && shindo_layer != 0) {
            map.addLayer(shindo_layer);
            fill_onoff = 1;
        } else {
            console.error('エラー： \"shindo_layer\" が見つからないため、塗りつぶしをマップに追加できません。');
            fill_onoff = 0;
        }
    } else {
        if (shindo_layer != undefined && shindo_layer != 0) {
            map.removeLayer(shindo_layer);
            fill_onoff = 0;
        } else {
            console.error('エラー： \"shindo_layer\" が見つからないため、塗りつぶしをマップから削除できません。');
            fill_onoff = 1;
        }
    }
});
document.getElementById('ui_display_onoff_title_check').addEventListener("change",()=>{
    if (document.getElementById('ui_display_onoff_title_check').checked) {
        document.getElementById('title').classList.add("display");
    } else {
        document.getElementById('title').classList.remove("display");
    }
});
document.getElementById('ui_display_onoff_info1_check').addEventListener("change",()=>{
    if (document.getElementById('ui_display_onoff_info1_check').checked) {
        document.getElementById('info1').classList.add("display");
    } else {
        document.getElementById('info1').classList.remove("display");
    }
});
document.getElementById('ui_display_onoff_info2_check').addEventListener("change",()=>{
    if (document.getElementById('ui_display_onoff_info2_check').checked) {
        document.getElementById('info2').classList.add("display");
    } else {
        document.getElementById('info2').classList.remove("display");
    }
});



