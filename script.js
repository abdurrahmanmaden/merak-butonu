// script.js (Frontend)

document.addEventListener('DOMContentLoaded', () => {
    const merakButton = document.getElementById('merak-button');
    const infoText = document.getElementById('info-text');
    const subText = document.getElementById('sub-text');

    // API'nizin adresi. Node.js sunucunuz bu adreste çalışıyor.
    const API_URL = '/api/random-fact';
    
    // API'den rastgele bir bilgiyi çekme fonksiyonu
    const fetchRandomFact = async () => {
        try {
            // API'ye istek gönderiliyor
            const response = await fetch(API_URL);
            
            if (!response.ok) {
                // HTTP hatası (örneğin 404, 500)
                throw new Error(`Sunucu Hatası: ${response.status}`);
            }
            
            const data = await response.json();
            // JSON yanıtından sadece 'fact' alanını alıyoruz
            return data.fact; 
            
        } catch (error) {
            console.error("API bağlantı hatası:", error);
            // API'ye erişilemezse gösterilecek yedek bilgi
            return "⛔ API'ye ulaşılamıyor. Sunucunuzu (server.js) kontrol edin.";
        }
    };

    merakButton.addEventListener('click', async () => {
        // 1. Bilgiyi animasyonla temizle
        infoText.classList.add('info-clear');
        subText.textContent = ''; // Alt metni temizle

        // 0.5 saniye sonra yeni bilgiyi yükle (CSS geçişiyle uyumlu)
        setTimeout(async () => {
            // **2. Yeni rastgele bilgiyi API'den asenkron olarak çek**
            const newFact = await fetchRandomFact();
            
            // 3. Bilgiyi güncelle
            infoText.textContent = newFact;
             
            // 4. Animasyon sınıfını kaldırarak bilgiyi göster
            infoText.classList.remove('info-clear');
            subText.textContent = 'Yeni bir gerçek daha ister misin?'; // Alt metni tekrar göster
        }, 500); 
    });
});