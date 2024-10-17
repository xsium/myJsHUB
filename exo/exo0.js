const userData = {
  name: "John SEAGAL",
  email: "john.doe@example.com",
  age: 25,
  dob: "08/02/1989",
  active: true,
  img: "https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg",
};
let user = document.querySelector(".userProfile");
user.style.height = "600px";
user.style.width = "400px";
user.style.backgroundColor = "#207b7d";

let newdiv = document.createElement("div");
newdiv.style.display = "flex";
newdiv.style.justifyContent = "flex-start";
newdiv.style.flexDirection = "column";

let newImg = document.createElement("img");
newImg.style.height = "44%";
newImg.style.display = "block";
newImg.src = userData.img;

newdiv.append(newImg);
user.append(newdiv);

let newdiv2 = document.createElement("div");
let dataTab = Object.values(userData);
dataTab.forEach((data) => {
  if (!String(data).includes("http")) {
    let newP = document.createElement("p");
    newP.style.textAlign = "center";
    newP.style.display = "block";
    newP.innerHTML = data;
    newdiv2.append(newP);
  }
});
newdiv.append(newdiv2);
