const U_name= document.getElementById("name");
const U_location= document.getElementById("location");
const U_gender= document.getElementById("gender");
const U_age= document.getElementById("age");
const U_dob= document.getElementById("dob");
const U_email= document.getElementById("email");

    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {

  const user_data = data.results[0]
  const name = `${user_data.name.first}` + ' '  + `${user_data.name.last}`;
  const age = user_data.dob.age;
  const dod = user_data.dob.date;
  const gender = user_data.gender;
  const email = user_data.email;
  const picture = user_data.picture.large;
  const location = `${user_data.location.city}` + ' '  + `${user_data.location.state}` +' ' + `${user_data.location.country}`;
    console.log(name,age,gender)
    U_name.innerHTML = name;
    U_location.innerHTML = location;
    U_gender.innerHTML = gender;
    U_age.innerHTML = age;
    U_dob.innerHTML = dod;
    U_email.innerHTML = email;
    document.getElementById("image").src = picture;
    console.log(data)

})