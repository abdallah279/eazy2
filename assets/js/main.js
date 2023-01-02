// loader js
$(window).on("load", function () {
    $(".loader").delay(600).fadeOut(1000);
});


// Show And Hide SlideBar
const menu = document.getElementById('menu');
const sideBar = document.getElementById('sidebar');
const navbar = document.getElementById('navbar');
const main = document.getElementById('main');
const closeSidebar = document.getElementById('closeSidebar');

if(menu){
  menu.addEventListener('click', ()=>{
    sideBar.classList.toggle('active-side');
    navbar.classList.toggle('active-nav');
    main.classList.toggle('active-main');
  });
}

// Close SideBar
if(closeSidebar){
    closeSidebar.addEventListener('click', ()=>{
      sideBar.classList.remove('active-side');
      navbar.classList.remove('active-nav');
      main.classList.remove('active-main');
    })
}

$(".sidebar .links li a").each(function () {
  if (window.location.href.includes($(this).attr("href"))) {
    $(this).addClass("active");
  }
});


// PassWord Show In Setting Page
const iconsPassSet = document.querySelectorAll('.pass-icon');

if(iconsPassSet){
  iconsPassSet.forEach((ic) =>{
    ic.addEventListener('click', function(){
      let input = ic.parentElement.querySelector('.input-me');
      showPassword(input, ic);
    });
  });
}

// Function To Show And Hide Password
function showPassword(input, icon){

  if(input.type == 'password'){
    input.setAttribute('type', 'text');
    icon.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
  } else{
    input.setAttribute('type', 'password');
    icon.innerHTML = `<i class="fa-regular fa-eye"></i>`;
  }
}

// DataTable
let myDataTable = document.getElementById('myTable');
if(myDataTable){
  var myTable = $('#myTable').dataTable( {
    "pageLength": 8,
    responsive: true,

    "language": {
        'paginate':{
            'previous': `<i class="fa-solid fa-angles-left"></i>`,
            'next': `<i class="fa-solid fa-angles-right"></i>`
        },
        "sProcessing": "جارٍ التحميل...",
        "sLengthMenu": "أظهر _MENU_ مدخلات",
        "sZeroRecords": "لم يعثر على أية سجلات",
        "sInfo": "إظهار النتائج من _START_ - _END_",
        "sInfoEmpty": "يعرض 0 إلى 0 من أصل 0 سجل",
        "sInfoFiltered": "(منتقاة من مجموع _MAX_ مُدخل)",
        "sInfoPostFix": "",
    },
    'bLengthChange':false,
    // "ordering": false
  });

  $('#searchTable').on('keyup', function() {
    $('#myTable').DataTable().search($(this).val()).draw();
  });
}

// Show And Hide Menu In Data Table
function sm(el){
    el.parentElement.querySelector('.drop-down').classList.add("show-drop-res");
    document.addEventListener("click", (e)=>{
        if( e.target.tagName != "I" || e.target != el){
            el.parentElement.querySelector('.drop-down').classList.remove("show-drop-res");
        }
    });
}


// Show And Hide NavBar collapse
$(document).ready(function(){
  $('.coll-open').click(function(e){
    e.preventDefault()
    if($(this).parent('.nav-collapse').hasClass('active')){
      $(this).removeClass('active');
      $(this).next(".collapse-content").slideUp();
      $(this).parent('.nav-collapse').removeClass('active');
    } else{
      $('.nav-collapse').removeClass('active');
      $('.collapse-content').slideUp();
      $(this).parent('.nav-collapse').addClass('active');
      $('.coll-open').removeClass('active');
      $(this).addClass('active');
      $(this).next('.collapse-content').slideDown();
    }
  })
});