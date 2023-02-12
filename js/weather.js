// getCurrentPosition() 2개의 인자를 갖음(하나는 실행코드, 에러코드)

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("넌", lat,lng);
}

function onGeoError() {
    alert("위치를 찾을수 없습니다");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);