

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
// Tüm 'fa-solid' classına sahip i tag'larını seç
const icons = document.querySelectorAll('i.fa-solid');

// Her birine 'ml-auto' sınıfını ekle
icons.forEach(icon => {
    icon.classList.add('ml-auto');
});


  