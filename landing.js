certi_data = document.getElementById("pills-tabContent");
console.log("hi");
// certi_data.style.display = "none";
certi_filter_types = {
  all: "All",
  course: "Certification Courses",
  complete: "Completion Certificates",
};
// function showcert() {
//   certi_data.style.display = "block";
//   pills_tab = document.getElementById("pills-tab");
//   pills_tab.className += " mb-4";
//   console.log("clicked");
// }
type = "all";
// ACHIEVE DATA ENTRY -------------------------------------------------------
achieve_data = [
  {
    title: "Introduction to Python",
    content: "This is a Course completion certificate from suma",
    img_link: "/tiny_image/intro_python.jpg",
    document: "documents/resume.pdf",
    type: "complete",
  },
];
achieve_data.reverse();
// --------------------------------------------------------------------------
achievecerti = document.getElementById("achievecerti");
// achieveenter(3);
function achieveenter(limit) {
  achievecerti.innerHTML = "";
  for (value in achieve_data) {
    if (limit !== -1) {
      if (value >= limit) {
        break;
      }
    }
    else{
        document.getElementById("viewmore_achieve").style.display = "none";
    }
    achievecerti.innerHTML += `<li class="media mb-4">
								<div class="row mx-auto justify-content-center">
									<div class="col-sm-4 col-md-3 my-auto mb-3">
										<img src="${achieve_data[value].img_link}" class="mr-3" alt="..." height="70px">
									</div>
									<div class="col-sm-4 col-md-5 col-lg-4 mt-3" style="max-width: 400px;" >
										<div class="media-body">
											<h5 class="mb-2">${achieve_data[value].title}</h5>
											${achieve_data[value].content}
										</div>
									</div>
									<div class="col-md-4 my-auto">
										<a href="${value.document}">
										<button class="btn btn-outline-primary float-md-right text-nowrap mt-2 mb-2"
											onMouseOver="this.style.color='white'"
											onMouseOut="this.style.color='#4776E6'">
											Show Certificate
										</button>
										</a>
									</div>
								</div>
							</li>`;
  }
}
// CERTIFICATE DATA --------------------------------------------------------------
certi_data = [
  {
    title: "Introduction to Python",
    content: "This is a Course completion certificate from datacamp",
    img_link: "/tiny_image/intro_python.jpg",
    document: "/documents/introductiontopython.pdf",
    type: "complete"
  },
  {
    title: "Introduction to SQL",
    content: "This is a Course completion certificate from datacamp",
    img_link: "/tiny_image/intro_sql.jpg",
    document: "/documents/introductiontosql.pdf",
    type: "complete"
  },
  {
    title: "Introduction to Databases in Python",
    content: "This is a Course completion certificate from datacamp",
    img_link: "tiny_image/intro_to_db_in_python.jpg",
    document: "/documents/introtodbinpython.pdf",
    type: "complete"
  },
  {
    title: "Intermediate Python",
    content: "This is a Course completion certificate from datacamp",
    img_link: "tiny_image/intermediatepython.jpg",
    document: "documents/intermediatepython.pdf",
    type: "complete"
  },
  {
    title: "Unsupervised Learning in Python",
    content: "This is a Course completion certificate from datacamp",
    img_link: "tiny_image/unsupervisedlearninginpython.jpg",
    document: "documents/unsupervisedlearninginpython.pdf",
    type: "complete"
  },
  {
    title: "Joy of Computing in Python",
    content: "This is a Certification Course from NPTEL ( ELITE - Silver )",
    img_link: "tiny_image/joyofcomputingwithpython.jpg",
    document: "documents/Joyofcomputingwithpython.jpg",
    type: "course"
  }
];
certi_data.reverse();
// -------------------------------------------------------------------------------
certifilter(type, 3, 1);
coursecerti = document.getElementById("coursecerti");

function certifilter(typee, limit, flag) {
  if (flag == 1) {
    document.getElementById("filter_head").innerHTML =
      certi_filter_types[typee];
    type = typee;
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
      } else {
        console.log("none");
        document.getElementById("viewmore_certi").style.display = "none";
      }
      console.log(value);
      coursecerti.innerHTML += `<li class="media mb-4">
								<div class="row mx-auto justify-content-center">
									<div class="col-sm-4 col-md-3 my-auto mb-3">
										<img src="${certi_data[value].img_link}" class="mr-3" alt="..." height="70px">
									</div>
									<div class="col-sm-4 col-md-5 col-lg-4 mt-3" style="max-width: 400px;" >
										<div class="media-body">
											<h5 class="mb-2">${certi_data[value].title}</h5>
											${certi_data[value].content}
										</div>
									</div>
									<div class="col-md-4 my-auto">
										<a href="${certi_data[value].document}">
										<button class="btn btn-outline-primary float-md-right text-nowrap mt-2 mb-2"
											onMouseOver="this.style.color='white'"
											onMouseOut="this.style.color='#4776E6'">
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
									<div class="col-sm-4 col-md-4 mt-3" style="max-width: 400px;">
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

// counter number of times visited 

$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 3000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
}); 

// contact form --------------------------------------

window.addEventListener("DOMContentLoaded", function () {
  contact_success_message_flag = true,contact_fail_message_flag = true;;
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  var button = document.getElementById("my-form-button");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    button.style = "display: none ";
    if (contact_success_message_flag){
      contact_success_message_flag =false;
      alertify.success('Your message has been successfully sent.');
    }
  }

  function error() {
    if (contact_fail_message_flag){
      contact_success_message_flag =false;
      alertify.error('Oops!! Some error occurred.');
    }
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}