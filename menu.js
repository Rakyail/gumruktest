

// acoordion anımate
$(document).ready(function(){
    $('.btn-link').on('click', function(e){
        e.preventDefault();
        var target = $($(this).attr('data-target'));
        target.collapse('toggle'); 
        target.on('shown.bs.collapse', function () {
            var offset = target.offset().top - 180; // Hedefin pozisyonunu al ve 180 piksel aşağı kaydır
            $('html, body').animate({
                scrollTop: offset
            }, 350);
        });
    });
  });
  function navigateTo(url) {
    window.location.href = url;
}
document.addEventListener('DOMContentLoaded', () => {
    // <i> etiketi içinde 'fa-turkish-lira-sign' sınıfını taşıyan tüm <p> öğelerini seç
    const pElements = document.querySelectorAll('div .media-body p i.fa-solid.fa-turkish-lira-sign');

    // Her <i> etiketinin ebeveyni olan <p> öğesine 'price' sınıfını ekle
    pElements.forEach(icon => {
        const parentP = icon.closest('p');
        if (parentP) {
            parentP.classList.add('price');
        }
    });
});

  // function menuKontrol() {
  //     var suAn = new Date();
  //     var saat = suAn.getHours();
  
  //     var headingKahvalti = document.getElementById("headingKahvalti");
  
  //     if (saat >= 7 && saat < 12) {
  //         headingKahvalti.style.display = "block"; // Menüyü göster
  //     } else {
  //         headingKahvalti.style.display = "none"; // Menüyü gizle
  //     }  }
  
  //   // Belirli aralıklarla kontrol etmek için
  //   setInterval(menuKontrol, 10000); // Her 10 saniyede bir kontrol etmek için



  