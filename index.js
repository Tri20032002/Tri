function handleSubmit () {
    //lay gia tri trong form
    const name = document.getElementById('name').value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;
    const location = document.getElementById("location").value;
    const comment = document.getElementById("comment").value;
    //luu gia tri vao storage cua trinh duyet
    sessionStorage.setItem("NAME", name);
    sessionStorage.setItem("EMAIL", email);
    sessionStorage.setItem("GENDER", gender);
    sessionStorage.setItem("LOCATION", location);
    sessionStorage.setItem("COMMENT", comment);

    return true;
}