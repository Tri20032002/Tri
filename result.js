window.addEventListener('load', () => {
    //lay du lieu trong storage cua tring duyet
    const name = sessionStorage.getItem('NAME');
    const email = sessionStorage.getItem("EMAIL");
    const gender = sessionStorage.getItem("GENDER");
    const location = sessionStorage.getItem("LOCATION");
    const comment = sessionStorage.getItem("COMMENT");
    //xuat ra
    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-email').innerHTML = email;
    document.getElementById('result-gender').innerHTML = gender;
    document.getElementById('result-location').innerHTML = location;
    document.getElementById("result-comment").innerHTML = comment;
})