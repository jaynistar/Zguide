// 定义多语言文本对象
const translations = {
    zh: {
        "header-title": "上海各区博物馆",
        "pudong-link": "浦东新区",
        "huangpu-link": "黄浦区",
        "jingan-link": "静安区",
        "yangpu-link": "杨浦区",
        "hongkou-link": "虹口区",
        "changning-link": "长宁区",
        "minhang-link": "闵行区",
        "putuo-link": "普陀区",
        "xuhui-link": "徐汇区",
        "jinshan-link": "金山区",
        "baoshan-link": "宝山区",
        "jiading-link": "嘉定区",
        "songjiang-link": "松江区",
        "qingpu-link": "青浦区",
        "fengxian-link": "奉贤区",
        "chongming-link": "崇明区",
        "search-placeholder": "搜索..."
    },
    ja: {
        "header-title": "上海各区の博物館",
        "pudong-link": "浦東新区",
        "huangpu-link": "黄浦区",
        "jingan-link": "静安区",
        "yangpu-link": "楊浦区",
        "hongkou-link": "虹口区",
        "changning-link": "長寧区",
        "minhang-link": "閔行区",
        "putuo-link": "普陀区",
        "xuhui-link": "徐匯区",
        "jinshan-link": "金山区",
        "baoshan-link": "宝山区",
        "jiading-link": "嘉定区",
        "songjiang-link": "松江區",
        "qingpu-link": "青浦區",
        "fengxian-link": "奉賢区",
        "chongming-link": "崇明区",
        "search-placeholder": "検索..."
    },
    en: {
        "header-title": "Museums in Shanghai Districts",
        "pudong-link": "Pudong New Area",
        "huangpu-link": "Huangpu District",
        "jingan-link": "Jing'an District",
        "yangpu-link": "Yangpu District",
        "hongkou-link": "Hongkou District",
        "changning-link": "Changning District",
        "minhang-link": "Minhang District",
        "putuo-link": "Putuo District",
        "xuhui-link": "Xuhui District",
        "jinshan-link": "Jinshan District",
        "baoshan-link": "Baoshan District",
        "jiading-link": "Jiading District",
        "songjiang-link": "Songjiang District",
        "qingpu-link": "Qingpu District",
        "fengxian-link": "Fengxian District",
        "chongming-link": "Chongming District",
        "search-placeholder": "Search..."
    },
    th: {
        "header-title": "พิพิธภัณฑ์ในเขตของเซี่ยงไฮ้",
        "pudong-link": "เขตผู่ตงใหม่",
        "huangpu-link": "เขตหวงผู่",
        "jingan-link": "เขตจิงอัน",
        "yangpu-link": "เขตหยางผู่",
        "hongkou-link": "เขตฮงโคว",
        "changning-link": "เขตฉางหนิง",
        "minhang-link": "เขตมินฮาง",
        "putuo-link": "เขตผู่ถัว",
        "xuhui-link": "เขตซูฮุย",
        "jinshan-link": "เขตจินซาน",
        "baoshan-link": "เขตเป่าซาน",
        "jiading-link": "เขตเจียติง",
        "songjiang-link": "เขตซ้งเจียง",
        "qingpu-link": "เขตฉิงผู่",
        "fengxian-link": "เขตเฟ้งเซียน",
        "chongming-link": "เขตฉงหมิง",
        "search-placeholder": "ค้นหา..."
    }
};

// 多语言切换功能
function changeLanguage() {
    var lang = document.getElementById("language").value;
    var keys = Object.keys(translations[lang]);
    keys.forEach(function (key) {
        var element = document.getElementById(key);
        if (element) {
            if (element.tagName === "INPUT") {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

// 搜索博物馆功能
function searchMuseums() {
    var searchInput = document.getElementById("search").value.toLowerCase();
    var navLinks = document.querySelectorAll(".menu ul li a");
    navLinks.forEach(function (link) {
        var linkText = link.textContent.toLowerCase();
        if (linkText.includes(searchInput)) {
            link.parentNode.style.display = "block";
        } else {
            link.parentNode.style.display = "none";
        }
    });
}

// 页面加载时根据默认语言设置文本
window.onload = function () {
    changeLanguage();
};