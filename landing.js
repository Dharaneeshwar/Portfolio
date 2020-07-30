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
    title: "Programming with python for Data Science",
    content: "Completed a course on NIIT with Outstanding performance.",
    img_link: "/tiny_image/Python for data science.jpg",
    document: "https://drive.google.com/file/d/1IsWIyVFDbxq02xP0Of20L5zPqS9818vJ/view?usp=sharing",
  },
  {
    title: "Object Oriented Programming with C++",
    content: "Completed a course on NIIT with Outstanding performance.",
    img_link: "/tiny_image/NIIT CPP.jpg",
    document: "https://drive.google.com/file/d/1I8G99qiOvbz7Z7XIv_xAdLJWRkDwPzev/view?usp=sharing",
  },
  {
    title: "Internal Hackathon for SIH 2020",
    content: "First in college level Smart India Hackathon selection. Worked on Building an Android app for managing police records.",
    img_link: "/tiny_image/Sih internal hackathon.jpg",
    document: "https://drive.google.com/file/d/1HdRUnk9pncSvTGVKaG2mm3UFCzcA0Csm/view?usp=sharing",
  },
  {
    title: "Infosys Hackathon 2020",
    content: "Made to 6th out of 40 teams participated. Worked on Building an Android app for FOOD RE-DISTRIBUTION to Orphans and needy people from food sources like hotels or parties.",
    img_link: "/tiny_image/Infosys Hackathon 2020.jpg",
    document: "https://drive.google.com/file/d/1Ha67XfjDpe6pmR2pu_0XJtWKeGqclXpc/view?usp=sharing",
  },
  {
    title: "Ozmenta 2020",
    content: "Presented a paper on my project Accumulator later renamed as TOPNINE in Velammal Engineering College.",
    img_link: "/tiny_image/Vellamal Paper Presentation.jpg",
    document: "https://drive.google.com/file/d/1HeX5nywxvYjUP0hSypUo5zgEI_CKpim-/view?usp=sharing",
  },
];
// achieve_data.reverse();
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
										<a href="${achieve_data[value].document}" target="_blank">
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
    document: "https://drive.google.com/file/d/1VdGOUlvnm7EKITxsbjlMuxWVvIzvgxA_/view?usp=sharing",
    type: "complete"
  },
  {
    title: "Introduction to SQL",
    content: "This is a Course completion certificate from datacamp",
    img_link: "/tiny_image/intro_sql.jpg",
    document: "https://drive.google.com/file/d/1DWpzjvNcoDOKFnY4dQIi3-Ax1k-wCdDS/view?usp=sharing",
    type: "complete"
  },
  {
    title: "Introduction to Databases in Python",
    content: "This is a Course completion certificate from datacamp",
    img_link: "tiny_image/intro_to_db_in_python.jpg",
    document: "https://drive.google.com/file/d/1MtweoR91ZCbpkJZp0Lc6S5PSWI-MyOUH/view?usp=sharing",
    type: "complete"
  },
  {
    title: "Intermediate Python",
    content: "This is a Course completion certificate from datacamp",
    img_link: "tiny_image/intermediatepython.jpg",
    document: "https://drive.google.com/file/d/185375Fc_6Sf2UGl7YYxHUaeH_fk3lrS3/view?usp=sharing",
    type: "complete"
  },
  {
    title: "Unsupervised Learning in Python",
    content: "This is a Course completion certificate from datacamp",
    img_link: "tiny_image/unsupervisedlearninginpython.jpg",
    document: "https://drive.google.com/file/d/1gBfwagq6vml5GukqV6m1xxICfoTlU3c1/view?usp=sharing",
    type: "complete"
  },
  {
    title: "Introduction to Deep Learning in Python",
    content: "This is a Course completion certificate from datacamp",
    img_link: "tiny_image/intro_to_deep.jpg",
    document: "https://drive.google.com/file/d/1UFvUfMSrjwC2QNT8_zvr6JTMoPAPtVWI/view?usp=sharing",
    type: "complete"
  },
  {
    title: "Machine Learning for Time Series Data in Python",
    content: "This is a Course completion certificate from datacamp",
    img_link: "tiny_image/ml_for_time_series.jpg",
    document: "https://drive.google.com/file/d/15arKm988tar8X3FkxPaFvUiqIp-45CsR/view?usp=sharing",
    type: "complete"
  },
  {
    title: "Preprocessing for Machine Learning in Python",
    content: "This is a Course completion certificate from datacamp",
    img_link: "tiny_image/preprocess_for_ml.jpg",
    document: "https://drive.google.com/file/d/1ImC4plM_q-M9jJUO-Y_iITRvNqlobxis/view?usp=sharing",
    type: "complete"
  },
  {
    title: "Introduction to Predictive Analytics in Python",
    content: "This is a Course completion certificate from datacamp",
    img_link: "tiny_image/intro_to_predictive.jpg",
    document: "https://drive.google.com/file/d/1-Uec39aaodU0UcvJLdso7pTGJQ2NYX_2/view?usp=sharing",
    type: "complete"
  },
  {
    title: "Programming, Data Structures and Algorithms Using Python",
    content: "This is a Certification Course from NPTEL ( ELITE )",
    img_link: "tiny_image/Programming, Data Structures and Algorithms Using Python.jpg",
    document: "https://drive.google.com/file/d/1upSnxo6djf1LnS_T5KPcFgDRCvoGUzx2/view?usp=sharing",
    type: "course"
  },
  {
    title: "Joy of Computing in Python",
    content: "This is a Certification Course from NPTEL ( ELITE - Silver )",
    img_link: "tiny_image/joyofcomputingwithpython.jpg",
    document: "https://drive.google.com/file/d/1E1zFNmZF6n8QTNXXeyhj-Xl-dR_0gPkG/view?usp=sharing",
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
										<a href="${certi_data[value].document}" target="_blank">
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

// scroll stuff 

var scroll = window.requestAnimationFrame ||
            function(callback){ window.setTimeout(callback, 1000/60)};

var elementsToShow = document.querySelectorAll('.show-on-scroll');
console.log(elementsToShow);

function loop1() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('animate__fadeInUp');
    } else {
      // element.classList.remove('animate__fadeInUp');
    }
  });

  scroll(loop1);
}
loop1()

var elementsToShowFromLeft = document.querySelectorAll('.show-on-scroll-left');
console.log(elementsToShowFromLeft);
function loop2() {

  elementsToShowFromLeft.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('animate__fadeInLeft');
    } else {
      // element.classList.remove('animate__fadeInUp');
    }
  });

  scroll(loop2);
}
loop2()

function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}