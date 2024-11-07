
function showContent(language) {
    const contentDiv = document.getElementById('content');
    const turkishBtn = document.getElementById('turkishBtn');
    const englishBtn = document.getElementById('englishBtn');

    if (language === 'turkish') {
        contentDiv.innerHTML = `<p>Karaköy Gümrük, adını tarihi Karaköy Limanı’na uzanan Gümrük Sokak’tan alıyor; yüzyıllar boyu ticaret ve insan hareketliliğinin merkezi olan Karaköy’ün tarihi atmosferinin tam merkezinde yer alıyor. Rum mimar Ioannis Karagiannis tarafından tasarlanan ve 1905 yılında inşa edilen eklektik (seçmeci) üsluptaki binanın arkası ise ziyaretçilerini saklı bir hazine gibi karşılayan Yemişçi Hasan Sokağı’na açılıyor. 

Eski belgelerde “Küçük Cedid Han” olarak anılan bina, Akbank Karaköy Şubesi binası (Cedid Han) ile yine eklektik üsluba ve benzer mimari öğelere sahip, muhtemelen mimarı yine Karagiannis olan bir başka yapı arasında kalmakta. Mekân yıllar içinde farklı amaçlarla kullanıldıktan sonra, Y.Mimar ve Restoratör Yavuz Çelenk’in iki yıl süren renovasyon projesi ve Yaşar Kartoğlu’nun mekan tasarımıyla, 2014 yılının Mayıs ayında Karaköy Gümrük olarak kapılarını açtı. 

Karagiannis’in eseri, İstanbul’un değişimine ayak uydurarak yeni insanlara, yeni deneyimlere ve lezzetlere alan açmaya devam ediyor.

Eklektik üslupta inşa edilmiş olan binanın yeni mekan tasarımında da aynı üslup tercih ediliyor. Her köşesi bir kuyumcu titizliğiyle işlenmiş olan binanın katlarına yerleştirilmiş, koleksiyon niteliğinde ve farklı üsluplarda mobilya, tablo ve objeler denge ve uyum içinde mekânın ruhunu yeniden oluşturuyor. Beş katlı bir bina olan Karaköy Gümrük’ün, ilk iki katında kafe ve lokanta olarak, diğer katlarındaysa özel davetler ve partilere ev sahipliği yaparak misafirlerimizi ağırlıyoruz. 

Günün her saatinde yeni ve farklı lezzetler keşfedebileceğiniz sade ve mevsimlerin güzelliklerine (/sunduklarına ??) ayak uyduran bir menümüz var. Lezzetli reçetelerimiz İdil Ayvalıklı K. imzası taşıyor.  Karaköy Gümrük ekibi olarak ulaşabildiğimiz en iyi yerel malzemeleri kullanarak hem misafirlerimize samimi lezzetler sunuyor hem de yerel üreticiler ile kol kola ilerliyoruz. 

Yerel ve kaliteli ürün sevgimiz Karaköy Gümrük’te sunduğumuz içecek seçimlerini de belirliyor. Menüde, bizzat ve özenle oluşturduğumuz Türk şarapları seçkisinin yanı sıra yerli ve yabancı biralar ve özel kokteyller bulunuyor. 

Karaköy Gümrük, bir ev gibi, misafirlerini ağırlamak ve hikayesini anlatmak için her gün aynı keyifle döküm demir kapılarını açıyor ve İstanbul severlere caz müziği eşliğinde tüm güne ve akşama yayılan samimi bir ortam sunuyor… 



</p>`;
        turkishBtn.classList.add('active');
        englishBtn.classList.remove('active');
    } else if (language === 'english') {
        contentDiv.innerHTML = `<p>

Karaköy Gümrük is located in Istanbul’s historic Karaköy district, set in the heart of a neighborhood that has been a center of commerce and human activity for centuries. The building, constructed in 1905 in an eclectic style by Greek architect Ioannis Karagiannis, is a significant part of Karaköy’s architectural heritage. Its front facade opens onto Gümrük Street, while its rear facade reveals the hidden gem of Yemişçi Hasan Street.

Throughout its history, the building has served various purposes, until it underwent a two-year-long renovation led by Architect and Restorer Yavuz Çelenk in 2014. With interior design by Yaşar Kartoğlu, the building was reintroduced to the public under the name “Karaköy Gümrük.” Today, Karaköy Gümrük serves as a five-story space offering both a gastronomic experience and a cultural meeting point.

The interior design maintains the eclectic style of the building, with each floor adorned with a curated collection of furniture, paintings, and objects that create a harmonious atmosphere. The first two floors host a café and restaurant, while the other floors are used for private events and gatherings.

We offer a simple yet dynamic menu that allows you to discover new and diverse flavors at any time of the day, adapting to the beauty and offerings of each season. Our delicious recipes carry the signature of İdil Ayvalıklı K. As the Karaköy Gümrük team, we are committed to using the best local ingredients available, providing our guests with authentic flavors while supporting local producers.

Our love for local and quality products also shapes our beverage selections. The menu features a carefully curated selection of Turkish wines, along with local and international beers and special cocktails.

Karaköy Gümrük opens its cast iron doors every day with the same pleasure, like a home welcoming its guests and sharing its story. It offers Istanbul enthusiasts a warm atmosphere accompanied by jazz music, stretching from day to night.</p>`;
        englishBtn.classList.add('active');
        turkishBtn.classList.remove('active');
    }
}

