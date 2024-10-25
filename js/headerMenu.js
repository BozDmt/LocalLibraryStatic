const window_width = $(window).width()
const pageName = window.location.pathname.split('/')[1]

$('body').prepend(`	
  <header id="header" id="home">
    <div class="container main-menu">
        <div class="row">
          <img class="logoimg" src="interiormaster_resized/SD_Design_logo-01.svg" style="filter:invert(100%); justify-self: flex-start; margin-left: 2em;"/>
          <nav id="nav-menu-container">
            <ul class="nav-menu">
              <li class="menu-active"><a href="index.html">Начало</a></li>
              <li><a href="about.html">За мен</a></li>
              <li><a href="projects.html">Проекти</a></li>
              <li><a href="services.html">Пакети</a></li>
              <li><a href="contact.html">Контакти</a></li>
            </ul>
          </nav>
        </div>
    </div>
  </header>`)
 
  
if(window_width < 741){
  if(pageName !== 'contact.html')
    $('.contentcontainer').append(`
      <footer class="sd-footer">
      <div class="mainfooter">
        <p id="sdesign">
          <img class="logoimg" src="interiormaster_resized/SD_Design_logo-01.svg" style="filter:invert(100%);"/>
        </p>
        <div>
          <p>
            Email: design@stefkadimitrova.com
          </p>
          <p>
            Mobile: +359 898 342035
          </p>
        </div>
      </div>
      <div class="minorfooter">
        <a href="https://www.instagram.com/stefka.dimitrova.design/">
          <div class="single-contact-address flex-row">
            <div class="icon">
              <span class="lnr fa fa-instagram"></span>
            </div>
          </div>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61562365076703">
          <div class="single-contact-address flex-row">
            <div class="icon">
              <span class="fa fa-facebook lnr"></span>
            </div>
          </div>
        </a>
      </div>
      </footer>`)
  }else{
  $('.contentcontainer').append(`
    <footer class="sd-footer">
    <p id="sdesign">
    <img class="logoimg" src="interiormaster_resized/SD_Design_logo-01.svg" style="filter:invert(100%);"/>
    </p>
    </footer>
    `)
  }