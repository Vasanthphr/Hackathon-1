let DivTag = document.createElement("div");
DivTag.innerHTML = `
<div class="container-fluid">
<div class="row">
    <div class="col">
        <nav class="navbar navbar-light fixed-top  ">
            <div class="container-fluid">
                <img class="nav_img" width="150" height="40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="">
                <p class="display-6 fw-bold">Unleash Your Beauty With Us</p>
                <div class="d-flex gap-2">
                    <div> <input class="form-control me-2 " id="text" type="text"
                            placeholder="eg:Eyeshadow,Foundation,Mascara" aria-label="Search"> </div>
                    <div> <button class="btn" onclick="MakeUp()"
                            type="submit">Search</button> </div>
                </div>
            </div>
        </nav>
    </div>
</div>
</div>
<div class="container-fluid">
<div class="row pic">
    <div class="col">
        
    </div>
</div>
<div class="row">
        <h4> Great Indian Festival</h4>
</div>
</div>
`
document.body.append(DivTag);
// Container 
let container = document.createElement("div");
container.className = "container-fluid m-3 product"
// Row
let row = document.createElement("div");
row.className = "row justify-content-center"
// Col
document.body.append(container);
container.append(row);
// Async Function
async function MakeUp() {
    let data = document.getElementById("text").value;
    let data1 = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${data}`);
    let data2 = await data1.json();
    // Map function 
    data2.map(function (ele) {
        // Cards 
        let col = document.createElement("div");
        col.className = "col";
        col.innerHTML = `
       <div class="card m-4 zoom shadow-lg  p-1 bg-body rounded" style="width: 10rem;">
       <img height="200" src="${ele.image_link}" class="card-img-top" alt="No Image">
       <div class="card-body text-center">
       <h6 class="card-title">
       <b>Name:</b> ${ele.name}<br><br>
       <b>Brand:</b> ${ele.brand} <br><br>
       <b>Price:</b> ${ele.price_sign}${ele.price} <br>
        </h6>
        <a href="${ele.product_link}" target="_blank"><button class="btn1">Buy Now</button></a>
        <a href="${ele.website_link}" target="_blank"><button class="btn1">Description</button></a>
       

       </div>
     </div>`
        row.append(col);
    })
}
