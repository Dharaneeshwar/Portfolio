projects = [
  {
    title: "Accumulator",
    tagline: "A Django Webapp",
    content:
      "This project is based on web-scrapping and is capable of searching a key word online and get top 9 results from web and shows in a nice template. It also has a custom version of website without adverts in a nice looking template ",
    published: false,
    github: "https://github.com/Dharaneeshwar/Accumulator",
    product: "null",
  },
  {
    title: "Ur Converter",
    tagline: "A Django Webapp",
    content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores numquam expedita cumque suscipit, iste, et dolorum libero praesentium ullam a, illo eligendi veniam repudiandae. Quidem eligendi ad enim facilis veniam.".repeat(3),
      published: true,
    github: "https://github.com/Dharaneeshwar/Accumulator",
    product: "null",
  },
  {
    title: "C Accumulator",
    tagline: "A Django Webapp",
    content:
      "This project is based on web-scrapping and is capable of searching a key word online and get top 9 results from web and shows in a nice template. It also has a custom version of website without adverts in a nice looking template ",
    published: false,
    github: "https://github.com/Dharaneeshwar/Accumulator",
    product: "null",
  },
  
];
list_tab = document.getElementById("list-tab");
pc_contents = document.getElementById("pc_contents");
mobile_content = document.getElementById("mobile");
$(document).ready(function () {
  element = projects[0];
  ind=0;
  list_tab.innerHTML += `<a class="list-group-item list-group-item-action align-items-center active" style="margin-top="0%";" href="#list-item-${ind}">
    <h3 style=" font-family: 'Red Hat Display', sans-serif;">${element.title}</h3>
    <p class="pl-3 pb-0 ">${element.tagline}</p>
    </a>`;
    pc_contents.innerHTML += `<h4 id="list-item-${ind}" class="mt-5"></h4>
    <h1><span style="font-family: 'Red Hat Display', sans-serif;">${element.title}</span></h1>
    <p>${element.content}</p>
    <div class="container justify-content-end d-flex w-100">
    <a href="${element.product}"><button id="productbut-${ind}" type="button" class="d-inline btn btn-outline-primary mb-3 mb-sm-0 text-nowrap"
            onMouseOver="this.style.color='white'" onMouseOut="this.style.color='#EA7773'"><i
                class="fab fa-product-hunt"></i> Product</button></a>
    <a href="${element.github}"><button type="button"
            class="d-inline btn btn-primary text-light ml-2 pr-sm-3 mb-3 mb-sm-0 text-nowrap"><i
                class="fab fa-github"></i> Github</button><br><br>
    </div>`
    mobile_content.innerHTML += `<div href="#" class="list-group-item text-black bg-light" style="text-decoration: none;">
    <h2 style="font-family: 'Red Hat Display', sans-serif;">${element.title}</h2>
   <p>${element.content}</p>
   <div class="container justify-content-end d-flex w-100">
   <a href="${element.product}" style="text-decoration: none;"><button id="mobileprod-${ind}" type="button" class="d-inline btn btn-outline-primary mb-3 mb-sm-0 text-nowrap"
           onMouseOver="this.style.color='white'" onMouseOut="this.style.color='#EA7773'"><i
               class="fab fa-product-hunt"></i> Product</button></a>
    <a href="${element.github}" style="text-decoration: none;"><button  type="button"
           class="d-inline btn btn-primary text-light ml-2 pr-sm-3 mb-3 mb-sm-0 text-nowrap"><i
               class="fab fa-github"></i> Github</button><br><br></a>
   </div>	 
</a>`
    if (!element.published){
    document.getElementById("productbut-"+ind).style.visibility= "hidden";
    document.getElementById("mobileprod-"+ind).style.visibility= "hidden";
    }
  ind = 1;
  projects.slice(1,).forEach((element) => {
    console.log(element);
    ind+=1;
    list_tab.innerHTML += `<a class="list-group-item list-group-item-action align-items-center" href="#list-item-${ind}">
    <h3 style=" font-family: 'Red Hat Display', sans-serif;">${element.title}</h3>
    <p class="pl-3 pb-0 ">${element.tagline}</p>
    </a>`;
    pc_contents.innerHTML += `<h4 id="list-item-${ind}" class="mt-5"></h4>
    <h1><span style="font-family: 'Red Hat Display', sans-serif;">${element.title}</span></h1>
    <p>${element.content}</p>
    <div class="container justify-content-end d-flex w-100">
    <a href="${element.product}"><button id="productbut-${ind}" type="button" class="d-inline btn btn-outline-primary mb-3 mb-sm-0 text-nowrap"
            onMouseOver="this.style.color='white'" onMouseOut="this.style.color='#EA7773'"><i
                class="fab fa-product-hunt"></i> Product</button></a>
    <a href="${element.github}"><button type="button"
            class="d-inline btn btn-primary text-light ml-2 pr-sm-3 mb-3 mb-sm-0 text-nowrap"><i
                class="fab fa-github"></i> Github</button><br><br>
    </div>`
    mobile_content.innerHTML += `<div href="#" class="list-group-item text-black bg-light" style="text-decoration: none;">
    <h2 style="font-family: 'Red Hat Display', sans-serif;">${element.title}</h2>
   <p>${element.content}</p>
   <div class="container justify-content-end d-flex w-100">
   <a href="${element.product}" style="text-decoration: none;"><button id="mobileprod-${ind}" type="button" class="d-inline btn btn-outline-primary mb-3 mb-sm-0 text-nowrap"
           onMouseOver="this.style.color='white'" onMouseOut="this.style.color='#EA7773'"><i
               class="fab fa-product-hunt"></i> Product</button></a>
    <a href="${element.github}" style="text-decoration: none;"><button  type="button"
           class="d-inline btn btn-primary text-light ml-2 pr-sm-3 mb-3 mb-sm-0 text-nowrap"><i
               class="fab fa-github"></i> Github</button><br><br></a>
   </div>	 
</a>`
    if (!element.published){
    document.getElementById("productbut-"+ind).style.visibility= "hidden";
    document.getElementById("mobileprod-"+ind).style.visibility= "hidden";
    }
  });
});
