// 定义多语言文本对象
const translations = {
    zh: {
        "header-title": "浦东新区博物馆",
        "search-placeholder": "搜索..."
    },
    ja: {
        "header-title": "浦東新区の博物館",
        "search-placeholder": "検索..."
    },
    en: {
        "header-title": "Museums in Pudong New Area Districts",
        "search-placeholder": "Search..."
    },
    th: {
        "header-title": "พิพิธภัณฑ์ในเขตผู่ตงใหม่",
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