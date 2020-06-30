certi_data = document.getElementById("pills-tabContent");
console.log("hi");
// certi_data.style.display = "none";
certi_filter_types={
    "all":"All",
    "course":"Certification Courses",
    "complete":"Completion Certificates"
}
function showcert() {
  certi_data.style.display = "block";
  pills_tab = document.getElementById("pills-tab");
  pills_tab.className += " mb-4";
  console.log("clicked");
}
type="all"
certi_data = [
  {
    title: "Introduction to Python",
    content: "This is a Course completion certificate from datacamp",
    img_link: "/tiny_image/intro_python.jpg",
    document: "documents/resume.pdf",
    type: "complete",
  },
  {
    title: "Introduction to Python",
    content: "This is a Course completion certificate from datacamp",
    img_link: "/tiny_image/intro_python.jpg",
    document: "documents/resume.pdf",
    type: "complete",
  },
  {
    title: "Introduction to Python",
    content: "This is a Course completion certificate from datacamp",
    img_link: "/tiny_image/intro_python.jpg",
    document: "documents/resume.pdf",
    type: "course",
  },
  {
    title: "Introduction to Python",
    content: "This is a Course completion certificate from datacamp",
    img_link: "/tiny_image/intro_python.jpg",
    document: "documents/resume.pdf",
    type: "course",
  },
];
certifilter(type, 3,1);
coursecerti = document.getElementById("coursecerti");

function certifilter(typee, limit, flag) {  
  if (flag==1){
    document.getElementById("filter_head").innerHTML=certi_filter_types[typee];  
    type=typee;
  }
    console.log(type);
  coursecerti.innerHTML = "";
  if (type == "all") {
    console.log(type);
    for (value in certi_data) {
      if (limit !== -1) {
        if (value >= limit) {
          break;
        }
      }
      else{
          console.log("none");
          document.getElementById("viewmore_certi").style.display = "none";
      }
      console.log(value);
      coursecerti.innerHTML += `<li class="media mb-4">
								<div class="row mx-auto justify-content-center">
									<div class="col-sm-4 col-md-3 my-auto mb-3">
										<img src="${certi_data[value].img_link}" class="mr-3" alt="..." height="70px">
									</div>
									<div class="col-sm-4 col-md-4 mt-3">
										<div class="media-body">
											<h5 class="mb-2">${certi_data[value].title}</h5>
											${certi_data[value].content}
										</div>
									</div>
									<div class="col-md-4 my-auto">
										<a href="${value.document}">
										<button class="btn btn-outline-primary float-md-right text-nowrap mt-2 mb-2"
											onMouseOver="this.style.color='white'"
											onMouseOut="this.style.color='#EA7773'">
											Show Certificate
										</button>
										</a>
									</div>
								</div>
							</li>`;
    }
  } else {
    console.log("else");
    for (value in certi_data) {
      if (certi_data[value].type == type) {
        console.log(value);
        coursecerti.innerHTML += `<li class="media mb-4">
								<div class="row mx-auto justify-content-center">
									<div class="col-sm-4 col-md-3 my-auto mb-3">
										<img src="${certi_data[value].img_link}" class="mr-3" alt="..." height="70px">
									</div>
									<div class="col-sm-4 col-md-4 mt-3">
										<div class="media-body">
											<h5 class="mb-2">${certi_data[value].title}</h5>
											${certi_data[value].content}
										</div>
									</div>
									<div class="col-md-4 my-auto">
										<a href="${value.document}">
										<button class="btn btn-outline-primary float-md-right text-nowrap mt-2 mb-2"
											onMouseOver="this.style.color='white'"
											onMouseOut="this.style.color='#EA7773'">
											Show Certificate
										</button>
										</a>
									</div>
								</div>
							</li>`;
      }
    }
  }
}
