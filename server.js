// server.js (Node.js/Express.js)

const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3000; 

// Verilerinizin gizli kaldığı yer burasıdır.
const randomFacts = [
    "Bugün İstanbul’da en çok yenen yemek: Döner. 😋",
    "Son 1 saatte 12.482 kişi Google’da “soğuk hava” aradı. ❄️",
    "Trend olan kelime: “Üşüyorum”. 🥶",
    "Bugün en çok doğum yapılan şehir: Ankara. 👶",
    "Bugün bir türk ortalama 2.3 bardak çay içti. ☕",
    "Bu saate kadar 78 bin kişi telefonunu düşürdü. 📱",
    "Bu gece 10.000 kişi “uyuyamıyorum” diye tweet attı. 🌙",
    "Bugün Instagram’da en çok paylaşılan filtre: Clarendon. ✨",
    "TikTok’ta bugün trend olan dans: “5 saniyede shuffle”. 💃",
    "Son 24 saatte 4.500 kişi kahve fotoğrafı paylaştı. ☕📸",
    "Bugün Türkiye’de en çok izlenen Netflix dizi türü: Komedi. 😂",
    "Bu hafta Spotify’da en çok dinlenen şarkı: “Blok3 - GİT” 🎶",
    "Bugün en çok aranan yemek tarifi: Ev yapımı pancake. 🥞",
    "Bu hafta TikTok trend sesi: “Ahh Ahh Ahh”. 🎤",
    "Bugün Instagram’da en çok kullanılan emoji: ❤️",
    "Son 1 saatte 6.700 kişi markete gitti. 🛒",
    "Bugün Türkiye’de en çok aranan film: “Oppenheimer”. 🎬",
    "Twitter’da trend hashtag: #Günaydın 🌅",
    "Bugün en çok izlenen YouTube Shorts kategorisi: Evcil hayvanlar. 🐶🐱",
    "Bu hafta TikTok’ta en çok kullanılan efekt: Slow Zoom. 🔍",
    "Bugün Google’da trend arama: “Evde pratik tarifler”. 🍳",
    "Instagram reels’te en çok paylaşılan konu: Kediler komik anlar. 😹",
    "Bugün Türkiye’de en çok yapılan spor: Yürüyüş. 🚶",
    "Bu hafta en çok aranan tatil destinasyonu: Kapadokya. 🎈",
    "Bugün Twitter’da trend olan konu: Hava durumu. ☁️",
    "Son 30 dakikada 1.900 kişi duş aldı. 🚿",
    "Bugün en çok yapılan Google araması: “Kahve çeşitleri”. ☕",
    "Bu hafta trend olan TikTok hashtag: #DIY. 🛠",
    "Bugün Instagram story’de en çok paylaşılan soru: “Günün sorusu?” ❓",
    "Twitter’da trend olan paylaşım: “Hafta sonu planı nedir?” 🗓",
    "Bugün YouTube’da en çok izlenen video: Evde 10 dk spor. 💪",
    "Son 1 saatte 2.223 kişi tartıldı. ⚖️",
    "Bugün Türkiye’de en çok satılan market ürünü: Süt. 🥛",
    "Bugün trend olan sosyal medya challenge: 5 saniyede dans. 🕺",
    "Instagram’da en çok kullanılan sticker: “Soru”. 🗨",
    "Bugün en çok aranan dijital ürün: Online kurs. 💻",
    "Bugün en çok izlenen TikTok video türü: Makyaj videoları. 💄",
    "Twitter’da trend olan kelime: “Motivasyon”. 💡",
    "Bugün Instagram reels’te trend olan renk: Pastel pembe. 🌸",
    "Bu hafta en çok beğenilen paylaşım türü: Komik kedi videoları. 😸",
    "Bugün en çok izlenen YouTube canlı yayını: Oyun turnuvası. 🎮",
    "Son 24 saatte 32 bin kişi telefon ekranını kırdı. 😬",
    "Bugün trend olan TikTok efekti: Renk değişimi. 🎨",
    "Twitter gündeminde: #HaftaSonuMood 🌞",
    "Bugün Instagram’da trend olan story anketi: Kahve mi çay mı? ☕🍵",
    "Bu hafta en çok izlenen YouTube komedi kanalı: Kafalar. 😂",
    "Bugün en çok aranan yemek tarifi: Lahmacun. 🌯",
    "Son 1 saatte 3.200 kişi saçını kestirdi. ✂️",
    "Bugün Instagram’da trend olan filtre: Clarendon. ✨",
    "Bu hafta TikTok’ta en çok izlenen challenge: Şişe çevirme. 🍼",
    "Bugün en çok aranan dizi karakteri: Geralt. ⚔️",
    "Twitter’da trend olan emoji: 😂🔥",
    "Bugün YouTube Shorts trendi: Evcil hayvan dansı. 🐕💃",
    "Bu hafta Instagram’da trend olan renk: Pastel mavi. 💙",
    "Bugün en çok paylaşılan sosyal medya görseli: Manzara fotoğrafı. 🏞",
    "Son 10 dakikada 11.000 kişi kahkaha attı. 😂",
    "Bugün Türkiye’de ortalama adım sayısı: 3.400. 👣",
    "Bu hafta en çok aranan moda markası: Zara. 👗",
    "Bugün trend olan YouTube kategori: Vlog. 🎥",
    "Twitter’da trend olan konu: “Yeni dizi tavsiyesi”. 📺",
    "Bugün Instagram’da trend olan reels konusu: Kahve yapımı. ☕",
    "Bu hafta TikTok’ta en çok kullanılan efekt: Zoom in/out. 🔍",
    "Bugün en çok aranan spor haberi: Fenerbahçe maçı sonucu. ⚽",
    "Son 1 saatte 8.421 kişi “ne izlesem” diye arama yaptı. 🤔",
    "Bugün Türkiye’de en çok izlenen Netflix dizi türü: Komedi. 😂",
    "Bu hafta TikTok trend sesi: “Laugh track”. 🎵",
    "Bugün en çok yapılan arama: “Hava nasıl?” 🌤",
    "Twitter gündeminde trend hashtag: #MotivasyonPazartesi 💪",
    "Bugün Instagram’da en çok kullanılan emoji kombinasyonu: ❤️😂",
    "Bu hafta TikTok’ta trend olan ses efekti: Slow clap. 👏",
    "Bugün Google trend arama: “Yeni oyun tavsiyesi”. 🎮",
    "Bu hafta Instagram reels’te en çok paylaşılan içerik: Ev dekorasyonu tüyoları. 🏡",
    "Bugün en çok aranan tatlı tarifi: Cheesecake. 🍰",
    "Son 1 saatte 6.300 kişi kahve içtiğini paylaştı. ☕",
    "Bugün Türkiye’de en çok yapılan plan: Kahve buluşması. ☕👫",
    "Bu hafta en çok izlenen YouTube eğitici video: Pratik yemek tarifleri. 🍳",
    "Bugün trend olan sosyal medya paylaşımı: Kahvaltı fotoğrafı. 🥐📸",
    "Son 24 saatte 20 bin kişi kitap satın aldı. 📚",
    "Bugün en çok aranan uygulama: Yemeksepeti. 📱",
    "Bu hafta Instagram’da trend olan filtre efekti: Retro. 🕹",
    "Bu hafta en çok izlenen YouTube Shorts komedi: Ev kazaları. 😅",
    "Bugün Instagram’da trend olan sticker: “Soru”. ❓",
    "Bu hafta TikTok’ta en çok izlenen video türü: DIY / el işleri. 🛠",
    "Bugün en çok aranan Google sorgusu: “Yakınımda…” 📍",
    "Bu hafta trend olan YouTube vlog kanalı: İbrahim Tilaver. 🎥",
    "Bugün Türkiye’de en çok yapılan spor aktivitesi: Koşu. 🏃‍♂️",
    "Son 24 saatte 100 bin kişi yeni bir hesap açtı. 👤",
    "Bugün Twitter’da en çok retweet alan tweet: “Kısa tatil önerisi”. ✈️",
    "Bu hafta TikTok’ta trend olan duet: Evcil hayvan komedisi. 🐾",
    "Bugün Instagram’da trend olan emoji: 😂",
    "Bu hafta en çok paylaşılan motivasyon cümlesi: “Hedefler için bugün başla.” 💡",
    "Bugün en çok aranan film fragmanı: Yan Yana. 🎬",
    "Bu hafta trend olan TikTok challenge: Evde yoga. 🧘‍♀️",
    "Bugün YouTube’da trend olan kategori: Makyaj tutorial. 💄",
    "Son 24 saatte 2 milyon kişi telefonla konuştu. 📞"
];

// CORS'u (Çapraz Kaynak Paylaşımı) etkinleştiriyoruz
// Bu, tarayıcınızdaki HTML dosyasının (farklı bir portta) API'ye erişmesini sağlar.
app.use(cors()); 

// Rastgele bir bilgi getiren API endpoint'i
app.get('/api/random-fact', (req, res) => {
    const randomIndex = Math.floor(Math.random() * randomFacts.length);
    const randomFact = randomFacts[randomIndex];
    
    // Rastgele bilgiyi JSON formatında döndür
    res.json({
        fact: randomFact
    });
});


module.exports = app;