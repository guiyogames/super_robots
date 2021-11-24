
$(document).ready(function(){
   

   // Slider de fotos
if(window.location.href.indexOf('index')> -1){
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true,
        pager:true
    });      
}
//Post (títulos que se muestran en la página index)
if(window.location.href.indexOf('index')> -1){
var post = [ // variable post para cargar datos.
  {      
    title: 'Las décadas de los grandes Mechas Robots',

    date:'Publicado el día '+moment().date()+ " de " +moment().format("MMMM") +" del año "+moment().format("YYYY"),
    content: 'Por el año de 1963 surgiría un nuevo género de dibujos animados llamados Mechas (su traducción sería robots gigantes). Tomando como bases los cómics japoneses llamados manga, estos robots llegarían a la pantalla chica de la mano del anime. Quién haría su debut sería Tetsujin 28, una serie que consistiría en decenas de capítulos sobre un robot manejado a control remoto por su jovencito piloto de nombre Shotaro. Esta serie tendría un gran éxito en aquellos años y daría el puntapié inicial para la conquista del género. <br><br> En 1973 llega lo que sería el gran furor del momento, Mazinger Z. “El castillo de acero”, daría el golpe en tablero y haría correr a los niños de la época y pegarse al televisor durante la casi media hora del capítulo. El robot Mazinger Z, hacía una salida espectacular de una piscina olímpica, donde ahí mismo el Pilder se conectaría a esta máquina de batalla.<br> <br> En 1976 sería el turno de Dai Apolón, otro super robot, pero con la particularidad que emergería a partir de la conexión de 3 grandes robots provenientes de una base marítima. . En esta ocasión el personaje se uniría al robot en cuerpo y alma para tomar el control de todo el potencial de esta increíble máquina. <br><br> 1980 nos trae de regreso a Iron Man 28, con un diseño más moderno, con menos capítulos, pero totalmente renovado (tiene un artículo entero dedicado a él). ',
    content_2:' Esta claro que se nos haría interminable escribir sobre los demás robots de la época. Elegimos, los 3 más representativos a nuestro criterio. <br> <br> Cabe remarcar que Go Nagai es un genio del género y creó todo un universo alrededor de Mazinger Z, como lo fue la sucesión con el Gran Mazinger, Getter Robot, y UFO Robo Grendizer. No nos queremos olvidar de Voltron de Toei Amimation, el cual se ensamblaba a partir de unos leones en una serie, y en vehículos en la siguiente serie que no sería la continuación de la anterior, si no una nueva. Más adelante haremos artículos para darles su merecido homenaje. ',
    img:'<img src="img/daizer.jpg" class="mazinger">'
   },    
  
  {      
     title: 'Mazinger Z',

     date:'Publicado el día '+moment().date()+ " de " +moment().format("MMMM") +" del año "+moment().format("YYYY"),
     content: 'Mazinger Z es considerado el primer Mecha robot (1973). Manzinger Z fue creado por su dibujante Go Nagai y su primera aparición la hizo en manga (historietas). Mazinger Z es el más famoso de un amplio universo de Mecha robots de Nagai, en donde se encuentran también: Gran Mazinger, Getter Robot, UFO Robot Grendizer entre otros. La historia nos cuenta como el joven Kōji Kabuto encuentra a su abuelo moribundo luego de un ataque a la mansión de este famoso científico de nombre Jūzō Kabuto. Su abuelo le cuenta que a pocos metros se encuentra Mazinger Z, y que es él quién deberá convertirlo a este coloso de acero en un dios o en un demonio. El atentado al Doctor Kabuto fue obra del siniestro Doctor Infierno, el cual había sido compañero de Jūzō en la isla de Rodas donde se hacían experimentos para la creación de energía foto atómica.  Infierno mató a todos los científicos del lugar, pero Jūzō logró escapar. Es ahí donde construyó a Mazinger Z y guardó el secreto. De esta manera Koji ahora tendrá la obligación de defender el centro de investigaciones y dar pelea a cuanta bestia mecánica le mande el Doctor Infierno y Barón Ashura.  .',
     content_2:' Además de Koji y del doctor Infierno, lo otros personajes fundamentales son: Barón Ashura es un andrógeno malvado y fiel sirviente de Infierno, lo único que quiere es ayudar a infierno a cumplir su sueño de conquistar el Japón. El profesor Yumi, que es el jefe del laboratorio de energía fotónica y está a cargo del accionar sobre la intervención de Mazinger Z. Sayaka Yumi, es la hija del doctor Yumi y será la mano derecha de Koji. Ella tripula a Afrodia A. El pandillero Boss, es un chico rudo que con su robot disparatado le ofrece a la serie una cuota de humor y respaldo para Koji. Shirō Kabuto, es el hermano de Koji y siempre está entrometido con él y con cuestiones de adultos para su corta edad. Y por último los doctores Sewashi, Nossori y Morimori quienes a lo largo de los 92 capítulos que dura la serie serán el contrapeso ideal de Yumi, ya que con sus ingeniosas mentes lo ayudarán a crear el armamento de defensa de Mazinger Z .',
     img:'<img src="img/cabezita_mz.jpg" class="mazinger">'
    },  
    {
     title: 'Dai Apolón',
     date: 'Publicado el día '+moment().date()+ " de " +moment().format("MMMM") +" del año "+moment().format("YYYY"),
     content: 'Aprovechando la fama conseguida por el antes mencionado Mazinger Z, en el año de 1976 llega la serie animé UFO Dai Apolón. Takeshi un adolescente que juega al fútbol americano, descubre el día de su cumpleaños a través raros augurios y la aparición de imágenes misteriosas que él en realidad proviene del planeta Apolón, y se le comenta que su planeta fue desbastado por las fuerzas Dasán. Es ahí cuando se le explica que los Dasán también quieren invadir la tierra, y que él deberá activar “la llave de energía” para poder combinarse con 3 robots que provienen de una base submarina de nombre Bedda, Trungu y Legga. Dicha combinación será pilotando unas increíbles naves espaciales. Lavick un misterioso anciano, es quién lo pone al tanto de todo esto y hace de guía de él. Mientras Takeshi trata de gestionar todo este conflicto, lo ayuda a entender que el bien del mundo ahora dependerá de él y del Dai Apolón. Este super robot logrará ensamblarse a partir de 3 robots gigantes más (Bedda, Trungu y Legga) piloteados por sus amigos Miki, Goro y Matsuo, compañeros de Takeshi en el orfanato. La serie nos regaló 25 capítulos, y si bien fue algo corta, sentó las bases de este género que había llegado para quedarse. ',
     content_2:'',
     img:'<img src="img/dai_apolo.jpg" class="mazinger">'
       },  
       {
     title: 'Iron Man 28',
     date: 'Publicado el día '+moment().date()+ " de " +moment().format("MMMM") +" del año "+moment().format("YYYY"),
     content: 'Iron Man 28 (Tetsujin 28-gō Japón) fue una serie lanzada en 1980 y es la redición del primer Iron Man de 1963, que a su vez estuvo inspirada en el manga, creada por el genial Mitsuteru Yokoyama. Se trata de un robot gigante creado por el doctor Kaneda, quien será piloteado a control remoto por su hijo Shotaro (más conocido como Ricardo en américa latina), con un pequeño maletín de comandos. En esta serie había muchos enemigos para Iron Man 28. El que más apariciones tuvo fue Branch, un director de una organización mafiosa, que quería imponerse por la fuerza. Branch contaba con una gran infraestructura y alta tecnología, la cual usaba para desarrollar a sus titanes de acero que le plantarían cara a Iron Man 28. También en la serie nos encontramos con un simpático robot de nombre "08", que utilizaba cassettes como en aquellos años 80, y en más de alguna ocasión lo sacó a Ricardo de apuros. Cabe recordar que Iron Man 28 tenía la particularidad que no tenía armamento, él se valía de buenos puñetazos y patadas voladoras, además de una fuerza bruta en el cuerpo a cuerpo capas de hacer añicos a las bestias que lo atacaban. Acompañaban al joven Shotaro y al Doctor Kaneda: El doctor Eduardo Espinoza (Dr. Shikishima en Japón), su esposa Sandra, su hija Marta y el inspector Efraín (Ootsuka en Japón). Iron Man 28 nos ofreció 51 inolvidables capítulos y puso bien alta la vara en el género Mecha. ',
     content_2:'',
     img:'<img src="img/iron_man28.jpg" class="mazinger">'
       },  
     
 ]; 

// Estructura del articulo. Como se vé en la vista index.html
 post.forEach((item ,idex) =>{
  var post = // variable post capturada.
  `<article class="post">
  
   <h2>${item.title}</h2>

      <p>${item.img}</p> 
  <span class="date">${item.date}</span>
   <p>
   ${item.content}
   </p>
    <p>
  ${item.content_2}
    </p>
   
    
  
  
  <a href="#" class="button-more">Subir</a>

</article>
  
  `;
// Llamamos el post.forEach.
  $("#posts").append(post);
});

}

// Seleccionamos el id del link css.
var theme = $("#theme");
// Cambiamos los colores de los cuadraditos dandole click. 
$("#to-green").click(function(){
    theme.attr("href","css/green.css")
});

$("#to-red").click(function(){
    theme.attr("href","css/red.css")
});

$("#to-blue").click(function(){
    theme.attr("href","css/blue.css")
});


// Scroll arriba de la web.

$('.subir').click(function(e){
    e.preventDefault();

    $('html , body').animate({
    scrollTop: 0
    }, 500);

    return false; 

  });
// Login falso

$("#login form").submit(function(){
   var for_name = $("#form_name").val();
   
   localStorage.setItem("form_name", form_name);

});

var form_name = localStorage.getItem("form_name");

if(form_name != null && form_name != "undefined"){
    var about_parrafo = $("#about p");
    
    about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong>");
    about_parrafo.append("<a href='#' id='logout'>Cerrar Sesion</a>");

    $("#login").hide();

    $("#logout").click(function(){
        localStorage.clear();
        location.reload();
    });

  }
  // Acordeon
  if(window.location.href.indexOf('about') > -1){
      $("#acordeon").accordion(); 
    }

  // Reloj   
  if(window.location.href.indexOf('reloj') > -1){
    
    setInterval(function(){
          var reloj = moment().format("hh:mm:ss");
          $('#reloj').html(reloj);  
    },1000);
      
  }

  // Validación

  if(window.location.href.indexOf('contact') > -1){
    
    $("form input[name='date']").datepicker({
      dateFormat:'dd-mm-yyyy'
    });
    
    $.validate({
      lang: 'es',
      errorMessagePosition:'top',
      scrollToTopOnError:true
 
    });
  }
  
});

