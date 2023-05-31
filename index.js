// First, create a new directory in your VSCode editor. We'll use that folder for this exercise. You can title it whatever you like (api-fetching, for example).
// Next, let's make sure we have all the files we'll need. Create an index.html, style.css, and index.js file. Be sure to link all the files together appropriately in your index.html file. Also be sure to fill the HTML file with some boilerplate code to get started. Finally, be sure to also add two divs to your HTML file's body tag, one div with an id of "products-container" and another div with an id of "posts-container".
// Now that we have some basic HTML to reflect our eventually fetched data, we can now get started actually fetching data from our API. For this exercise, we'll be using the practice website called dummyjson.com. Navigate over to that site and look around. Note that the dummyJSON API allows you to fetch multiple subsets of data, such as posts and products. You can also check out the documentation to see how one can fetch data from this API, too.
// We'll start off by fetching some products data to list on our site. Here is a general set of steps to help you get started, although you do not have to write the code in this order necessarily if you come up with another logical approach
// First, write an asynchronous function that fetches the products data from the dummyJSON api. Note that within this asynchronous function, it may be good to check out how the data is being returned to you from dummyJSON. Is the data the actual array of objects you want? Or is the data formatted in a nested format, and you need to "take the data out of its box"?
// Next, write another asynchronous function that accepts one parameter, an array of objects (each object representing an individual product). This function should append a new element (of your choice) for each object in the products array into the #products-container element.
//     Within this function, be sure that each new element you're creating to represent each individual product reflects relevant data from the actual fetched data. Some key-value pairs you could render onto the DOM could be title, description, and price, to name a few. Feel free to render more if you so choose though.
// Lastly, we'll need to invoke the 2nd asynchronous function we wrote to actually trigger the data fetching and the rendering of that data onto the DOM. Do so at the bottom of your index.js file. If you've done everything correctly, you should now see all of the products appear when you open your site in LiveServer!

// Now we'll have you do the exact same as step 4, except this time for the posts data from dummyJSON. Note that instead of rendering the data inside of the #products-container element, you should render the posts data inside of the #posts-container element. The steps you'll take to accomplish this will be almost identical to step 4, except in this situation, you should at least render each post's title and body values.
// Lastly, style up the products and posts on your site a bit so that it is not just plain HTML. You can either practice this by editing each element's style through the index.js file, or by using regular CSS selector rules in your style.css file. Up to you!

// fetch('https://dummyjson.com/test', {
//   method: 'GET', /* or POST/PUT/PATCH/DELETE */
// })
// .then(res => res.json())
// .then(data => console.log(data));
/*
{
  status: 'ok',
  method: 'GET', // or POST/PUT/PATCH/DELETE
}
*/

// fetch('https://dummyjson.com/products')
//  .then(res => res.json())
// .then(console.log);

async function fetchProducts() {
    try {
        let res = await fetch("https://dummyjson.com/products")
        let translatedData = await res.json();
        //console.log(translatedData)
        return translatedData;
    } catch (error) {
      //  console.error(error);
    }
}

async function renderData() {
    let Container = document.getElementById("products-container")
    let myProducts = await fetchProducts();
    let newProductArr = myProducts.products
    for (let i = 0; i < newProductArr.length; i++) {

        // console.log(newProductArr)
        let myCurrProductObj = newProductArr[i];
        //console.log(myCurrProductObj)
        let newProductElement = document.createElement("p");
        newProductElement.innerText = myCurrProductObj.title;
        Container.appendChild(newProductElement)
    }

}
async function fetchProduct() {
    try {
        let res2 = await fetch("https://dummyjson.com/products/1")
        let translatedData2 = await res2.json();
        console.log(translatedData2)
        return translatedData2;
    } catch (error) {
      //  console.error(error);
    }
}

async function renderData2() {
    let Container = document.getElementById("posts-container")
    let myProducts = await fetchProducts();
    let newProductArr = myProducts.products
    for (let i = 0; i < newProductArr.length; i++) {

        // console.log(newProductArr)
        let myCurrProductObj = newProductArr[i];
        //console.log(myCurrProductObj)
        let newProductElement = document.createElement("p");
        newProductElement.innerText = myCurrProductObj.description;
        Container.appendChild(newProductElement)
    }

}


// async function fetchSingleProduct() {
//     try {
//         let res2 = await fetch("https://dummyjson.com/products/1")
//         let translatedData2 = await res2.json();
//         console.log(translatedData2)
//         return translatedData2;
//     } catch (error) {
//         console.error(error);
//     }
// }


// async function renderData2() {
//     let Container = document.getElementById("posts-container")
//     let myProduct = await fetchSingleProduct();
//     console.log(myProduct)
//     let newProductArr = myProduct
//     for (let i = 0; i < newProductArr.length; i++) {

//         // console.log(newProductArr)
//         let myCurrProductObj = newProductArr[i];
//         //console.log(myCurrProductObj)
//         let newProductElement = document.createElement("p");
//         newProductElement.innerText = myCurrProductObj.title;
//         Container.appendChild(newProductElement)
//     }
// }


renderData(); 