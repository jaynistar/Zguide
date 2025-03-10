// 多语言切换功能
function changeLanguage() {
    var lang = document.getElementById("language").value;

    // 根据选择的语言更新网站内容
    if (lang === "zh") {
        document.querySelector("#header-title").textContent = "智游上海";
        document.querySelector("#attractions-link").textContent = "景区景点";
        document.querySelector("#museums-link").textContent = "博物馆";
        document.querySelector("#entertainment-link").textContent = "娱乐场所";
        document.querySelector("#hotels-link").textContent = "酒店";
        document.querySelector("#parks-link").textContent = "公园";
        
        document.querySelector("#popular-title").textContent = "热门景点";
        document.querySelector("#disneyland-description").textContent = "上海迪士尼：上海的梦幻乐园，适合全家游玩，提供各类游乐设施和娱乐表演。";
        document.querySelector("#recommended-title").textContent = "推荐景点";
        document.querySelector("#yuyuan-description").textContent = "豫园：上海著名的古典园林，具有浓厚的江南园林特色，游客可以欣赏古典建筑和美丽的花园。";
        
        document.querySelector("#places-link").textContent = "场所";
        document.querySelector("#notes-link").textContent = "笔记";
        document.querySelector("#map-link").textContent = "地图";
        document.querySelector("#info-link").textContent = "信息";
        document.querySelector("#my-link").textContent = "我的";
    } else if (lang === "ja") {
        document.querySelector("#header-title").textContent = "こんにちは上海";
        document.querySelector("#attractions-link").textContent = "観光名所";
        document.querySelector("#museums-link").textContent = "博物館";
        document.querySelector("#entertainment-link").textContent = "エンターテイメント";
        document.querySelector("#hotels-link").textContent = "ホテル";
        document.querySelector("#parks-link").textContent = "公園";
        
        document.querySelector("#popular-title").textContent = "人気観光地";
        document.querySelector("#disneyland-description").textContent = "上海ディズニーランド：上海の夢のようなテーマパークで、家族全員が楽しめるアトラクションとエンターテイメントを提供しています。";
        document.querySelector("#recommended-title").textContent = "おすすめの観光地";
        document.querySelector("#yuyuan-description").textContent = "豫園：上海の有名な古典的な庭園で、江南地方の庭園の特色が色濃く表れています。美しい建物と庭園を楽しめます。";
        
        document.querySelector("#places-link").textContent = "場所";
        document.querySelector("#notes-link").textContent = "ノート";
        document.querySelector("#map-link").textContent = "地図";
        document.querySelector("#info-link").textContent = "情報";
        document.querySelector("#my-link").textContent = "私の";
    } else if (lang === "en") {
        document.querySelector("#header-title").textContent = "HelloShanghai";
        document.querySelector("#attractions-link").textContent = "Attractions";
        document.querySelector("#museums-link").textContent = "Museums";
        document.querySelector("#entertainment-link").textContent = "Entertainment";
        document.querySelector("#hotels-link").textContent = "Hotels";
        document.querySelector("#parks-link").textContent = "Parks";
        
        document.querySelector("#popular-title").textContent = "Popular Attractions";
        document.querySelector("#disneyland-description").textContent = "Shanghai Disneyland: A magical park in Shanghai, perfect for family visits, with various rides and entertainment.";
        document.querySelector("#recommended-title").textContent = "Recommended Attractions";
        document.querySelector("#yuyuan-description").textContent = "Yuyuan Garden: A famous classical garden in Shanghai, featuring the rich southern Chinese garden style, where visitors can enjoy traditional architecture and beautiful gardens.";
        
        document.querySelector("#places-link").textContent = "Places";
        document.querySelector("#notes-link").textContent = "Notes";
        document.querySelector("#map-link").textContent = "Map";
        document.querySelector("#info-link").textContent = "Info";
        document.querySelector("#my-link").textContent = "My Profile";
    } else if (lang === "th") {
        document.querySelector("#header-title").textContent = "สวัสดีเซี่ยงไฮ้";
        document.querySelector("#attractions-link").textContent = "แหล่งท่องเที่ยว";
        document.querySelector("#museums-link").textContent = "พิพิธภัณฑ์";
        document.querySelector("#entertainment-link").textContent = "ความบันเทิง";
        document.querySelector("#hotels-link").textContent = "โรงแรม";
        document.querySelector("#parks-link").textContent = "สวนสาธารณะ";
        
        document.querySelector("#popular-title").textContent = "สถานที่ท่องเที่ยวยอดนิยม";
        document.querySelector("#disneyland-description").textContent = "สวนสนุกเซี่ยงไฮ้ดิสนีย์แลนด์: สวนสนุกที่มหัศจรรย์ในเซี่ยงไฮ้ เหมาะสำหรับครอบครัว พร้อมทั้งกิจกรรมต่างๆ และการแสดงความบันเทิง";
        document.querySelector("#recommended-title").textContent = "สถานที่ท่องเที่ยวแนะนำ";
        document.querySelector("#yuyuan-description").textContent = "สวนหยวน: สวนแบบคลาสสิกในเซี่ยงไฮ้ ที่มีลักษณะเฉพาะของสวนจีนตอนใต้ ซึ่งนักท่องเที่ยวสามารถเพลิดเพลินไปกับสถาปัตยกรรมและสวนที่สวยงาม";
        
        document.querySelector("#places-link").textContent = "สถานที่";
        document.querySelector("#notes-link").textContent = "บันทึก";
        document.querySelector("#map-link").textContent = "แผนที่";
        document.querySelector("#info-link").textContent = "ข้อมูล";
        document.querySelector("#my-link").textContent = "โปรไฟล์ของฉัน";
    }
}

// 搜索景点功能
function searchAttractions() {
    var searchInput = document.getElementById("search").value.toLowerCase();
    var attractions = document.querySelectorAll(".attraction");

    attractions.forEach(function(attraction) {
        var description = attraction.querySelector("p").textContent.toLowerCase();
        if (description.includes(searchInput)) {
            attraction.style.display = "block";
        } else {
            attraction.style.display = "none";
        }
    });
}