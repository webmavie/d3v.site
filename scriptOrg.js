const translations = {
      en: {
        mainTitle: "d3v.site", mainSubtitle: "Advanced Online Color Picker",
        pickButtonText: "Pick Color", pickingButtonText: "Picking...",
        formatLabel: "Format:", historyTitle: "Color History", noHistoryText: "No colors picked yet.",
        unsupportedMessage: "The eyedropper tool is designed for desktop browsers like Chrome, Edge, or Opera. This feature is not available on mobile devices. You can still read about the tool below.",
        colorCopied: "Copied!", copyTooltip: "Copy code", languageToggleTitle: "Select Language",
        themeToggleTitle: "Toggle theme", currentLangDisplay: "EN",
        taglineFree: "Free Online Tool", taglineNoDownload: "No Download Required",
        whatIsTitle: "What is d3v.site?",
        whatIsP1: "d3v.site is a free, advanced online color picker tool designed for web developers, designers, and anyone who needs to quickly identify and use colors from their screen. It leverages the modern EyeDropper API available in compatible desktop browsers to provide a seamless color selection experience. No downloads or installations are required!",
        whatIsP2: "With d3v.site, you can instantly sample any color visible on your monitor and get its code in various formats including HEX, RGB, HSL, and an approximate CMYK value. The tool also keeps a history of your recently picked colors, features a sleek dark mode, and supports multiple languages.",
        howToUseTitle: "How to Use d3v.site",
        howToUseList: `<li>Ensure you are using a <strong>compatible desktop browser</strong> (like Chrome, Edge, or Opera).</li><li>Click the "<strong>Pick Color</strong>" button. Your cursor will change to a color picker/magnifier.</li><li>Move the cursor over any part of your screen to sample a color.</li><li>Click to select the color. It will appear in the color box with its code displayed.</li><li>Choose your desired <strong>color format</strong> (HEX, RGB, HSL, CMYK) from the dropdown.</li><li>Click the copy icon to copy the color code to your clipboard.</li><li>Selected colors are automatically added to the "<strong>Color History</strong>" for quick access.</li>`,
        colorFormatsTitle: "About Color Formats",
        colorFormatsP1: "d3v.site provides color codes in several common formats:",
        colorFormatsList: `<li><strong>HEX:</strong> A six-digit code used in web design (e.g., #FF5733).</li><li><strong>RGB:</strong> Represents colors using Red, Green, and Blue values (e.g., rgb(255, 87, 51)).</li><li><strong>HSL:</strong> An intuitive representation using Hue, Saturation, and Lightness (e.g., hsl(10, 100%, 60%)).</li><li><strong>CMYK:</strong> A model for color printing. Provides an approximate conversion from screen color (e.g., cmyk(0%, 66%, 80%, 0%)).</li>`,
        adPlaceholderLabel: "Advertisement", adNotice: "Your Ad Here",
        footerAllRights: "All rights reserved.", footerPrivacyPolicy: "Privacy Policy", footerCraftedBy: `Crafted by <a href="https://webmavie.com" target="_blank" rel="noopener noreferrer">WebMaVie</a>`
      },
      tr: {
        mainTitle: "d3v.site", mainSubtitle: "Gelişmiş Çevrimiçi Renk Seçici",
        pickButtonText: "Renk Seç", pickingButtonText: "Seçiliyor...",
        formatLabel: "Format:", historyTitle: "Renk Geçmişi", noHistoryText: "Henüz renk seçilmedi.",
        unsupportedMessage: "Renk seçme aracı Chrome, Edge veya Opera gibi masaüstü tarayıcılar için tasarlanmıştır. Bu özellik mobil cihazlarda mevcut değildir. Aşağıda araç hakkında bilgi edinebilirsiniz.",
        colorCopied: "Kopyalandı!", copyTooltip: "Kodu kopyala", languageToggleTitle: "Dil Seçin",
        themeToggleTitle: "Temayı değiştir", currentLangDisplay: "TR",
        taglineFree: "Ücretsiz Çevrimiçi Araç", taglineNoDownload: "İndirme Gerekmez",
        whatIsTitle: "d3v.site Nedir?",
        whatIsP1: "d3v.site, web geliştiricileri, tasarımcılar ve ekranlarından hızlıca renk belirlemesi gereken herkes için tasarlanmış ücretsiz, gelişmiş bir çevrimiçi renk seçici aracıdır. Uyumlu masaüstü tarayıcılarda bulunan modern EyeDropper API'sinden yararlanır. Herhangi bir indirme veya kurulum gerektirmez!",
        whatIsP2: "d3v.site ile monitörünüzde görünen herhangi bir rengi anında örnekleyebilir ve kodunu HEX, RGB, HSL ve yaklaşık CMYK dahil çeşitli formatlarda alabilirsiniz. Araç ayrıca son seçilen renklerin geçmişini tutar, şık bir karanlık moda sahiptir ve birden çok dili destekler.",
        howToUseTitle: "d3v.site Nasıl Kullanılır?",
        howToUseList: `<li><strong>Uyumlu bir masaüstü tarayıcısı</strong> (Chrome, Edge veya Opera gibi) kullandığınızdan emin olun.</li><li>"<strong>Renk Seç</strong>" düğmesine tıklayın. İmleciniz bir renk seçiciye dönüşecektir.</li><li>İmleci, renk örneği almak istediğiniz herhangi bir bölümün üzerine getirin.</li><li>Rengi seçmek için tıklayın. Renk, renk kutusunda koduyla birlikte görünecektir.</li><li>İstediğiniz <strong>renk formatını</strong> (HEX, RGB, HSL, CMYK) seçin.</li><li>Renk kodunu panoya kopyalamak için kopyala simgesine tıklayın.</li><li>Seçtiğiniz renkler otomatik olarak "<strong>Renk Geçmişi</strong>"ne eklenir.</li>`,
        colorFormatsTitle: "Renk Formatları Hakkında",
        colorFormatsP1: "d3v.site, renk kodlarını birkaç yaygın formatta sunar:",
        colorFormatsList: `<li><strong>HEX:</strong> Web tasarımında kullanılan altı basamaklı bir koddur (örn. #FF5733).</li><li><strong>RGB:</strong> Renkleri Kırmızı, Yeşil ve Mavi değerleriyle temsil eder (örn. rgb(255, 87, 51)).</li><li><strong>HSL:</strong> Ton, Doygunluk ve Parlaklık kullanan sezgisel bir gösterimdir (örn. hsl(10, %100, %60)).</li><li><strong>CMYK:</strong> Renkli baskı için bir modeldir. Ekran renginden yaklaşık bir dönüşüm sağlar (örn. cmyk(%0, %66, %80, %0)).</li>`,
        adPlaceholderLabel: "Reklam Alanı", adNotice: "Reklamınız Burada",
        footerAllRights: "Tüm hakları saklıdır.", footerPrivacyPolicy: "Gizlilik Politikası", footerCraftedBy: `<a href="https://webmavie.com" target="_blank" rel="noopener noreferrer">WebMaVie</a> tərəfindən hazırlandı`
      },
      az: {
        mainTitle: "d3v.site", mainSubtitle: "Qabaqcıl Onlayn Rəng Seçici",
        pickButtonText: "Rəng Seç", pickingButtonText: "Seçilir...",
        formatLabel: "Format:", historyTitle: "Rəng Tarixçəsi", noHistoryText: "Hələ rəng seçilməyib.",
        unsupportedMessage: "Rəng seçmə aləti Chrome, Edge və ya Opera kimi masaüstü brauzerlər üçün nəzərdə tutulub. Bu funksiya mobil cihazlarda mövcud deyil. Aşağıda alət haqqında məlumatları oxuya bilərsiniz.",
        colorCopied: "Köçürüldü!", copyTooltip: "Kodu köçür", languageToggleTitle: "Dil Seçin",
        themeToggleTitle: "Temanı dəyişdirin", currentLangDisplay: "AZ",
        taglineFree: "Pulsuz Onlayn Alət", taglineNoDownload: "Yükləmə Tələb Olunmur",
        whatIsTitle: "d3v.site Nədir?",
        whatIsP1: "d3v.site, veb tərtibatçıları, dizaynerlər və ekranlarından tez bir zamanda rəngləri müəyyənləşdirməli olan hər kəs üçün nəzərdə tutulmuş pulsuz, qabaqcıl onlayn rəng seçmə vasitəsidir. Uyğun masaüstü brauzerlərində mövcud olan müasir EyeDropper API-sindən istifadə edir. Heç bir yükləmə və ya quraşdırma tələb olunmur!",
        whatIsP2: "d3v.site ilə monitorunuzda görünən istənilən rəngi dərhal nümunə götürə və onun kodunu HEX, RGB, HSL və təxmini CMYK daxil olmaqla müxtəlif formatlarda əldə edə bilərsiniz. Alət həmçinin son seçilmiş rənglərin tarixçəsini saxlayır, qəşəng qaranlıq rejimə malikdir və bir neçə dili dəstəkləyir.",
        howToUseTitle: "d3v.site Necə İstifadə Edilir?",
        howToUseList: `<li><strong>Uyğun bir masaüstü brauzerindən</strong> (Chrome, Edge və ya Opera kimi) istifadə etdiyinizə əmin olun.</li><li>"<strong>Rəng Seç</strong>" düyməsini basın. Kursorunuz rəng seçiciyə çevriləcək.</li><li>Kursoru, rəng nümunəsi götürmək istədiyiniz hər hansı bir hissənin üzərinə gətirin.</li><li>Rəngi seçmək üçün basın. Rəng, kodu ilə birlikdə rəng qutusunda görünəcək.</li><li>İstədiyiniz <strong>rəng formatını</strong> (HEX, RGB, HSL, CMYK) seçin.</li><li>Rəng kodunu mübadilə buferinə köçürmək üçün köçürmə ikonasını basın.</li><li>Seçdiyiniz rənglər avtomatik olaraq "<strong>Rəng Tarixçəsi</strong>"nə əlavə olunur.</li>`,
        colorFormatsTitle: "Rəng Formatları Haqqında",
        colorFormatsP1: "d3v.site rəng kodlarını bir neçə ümumi formatda təqdim edir:",
        colorFormatsList: `<li><strong>HEX:</strong> Veb dizaynında istifadə olunan altı rəqəmli koddur (məsələn, #FF5733).</li><li><strong>RGB:</strong> Rəngləri Qırmızı, Yaşıl və Mavi dəyərləri ilə təmsil edir (məsələn, rgb(255, 87, 51)).</li><li><strong>HSL:</strong> Çalar, Doyma və Parlaqlıq istifadə edən intuitiv bir təqdimatdır (məsələn, hsl(10, 100%, 60%)).</li><li><strong>CMYK:</strong> Rəngli çap üçün bir modeldir. Ekran rəngindən təxmini bir çevirmə təmin edir (məsələn, cmyk(0%, 66%, 80%, 0%)).</li>`,
        adPlaceholderLabel: "Reklam Sahəsi", adNotice: "Reklamınız Burada",
        footerAllRights: "Bütün hüquqlar qorunur.", footerPrivacyPolicy: "Məxfilik Siyasəti", footerCraftedBy: `<a href="https://webmavie.com" target="_blank" rel="noopener noreferrer">WebMaVie</a> tərəfindən hazırlandı`
      },
      de: {
        mainTitle: "d3v.site", mainSubtitle: "Erweiterter Online-Farbwähler",
        pickButtonText: "Farbe auswählen", pickingButtonText: "Wähle aus...",
        formatLabel: "Format:", historyTitle: "Farbverlauf", noHistoryText: "Noch keine Farben ausgewählt.",
        unsupportedMessage: "Das Pipetten-Werkzeug ist für Desktop-Browser wie Chrome, Edge oder Opera konzipiert. Diese Funktion ist auf Mobilgeräten nicht verfügbar. Sie können unten trotzdem über das Werkzeug lesen.",
        colorCopied: "Kopiert!", copyTooltip: "Code kopieren", languageToggleTitle: "Sprache auswählen",
        themeToggleTitle: "Theme umschalten", currentLangDisplay: "DE",
        taglineFree: "Kostenloses Online-Tool", taglineNoDownload: "Kein Download erforderlich",
        whatIsTitle: "Was ist d3v.site?",
        whatIsP1: "d3v.site ist ein kostenloses, fortschrittliches Online-Farbwähler-Tool für Webentwickler, Designer und alle, die schnell Farben von ihrem Bildschirm identifizieren und verwenden müssen. Es nutzt die moderne EyeDropper-API, die in kompatiblen Desktop-Browsern verfügbar ist, um eine nahtlose Farbauswahl zu ermöglichen. Keine Downloads oder Installationen erforderlich!",
        whatIsP2: "Mit d3v.site können Sie sofort jede auf Ihrem Monitor sichtbare Farbe abtasten und ihren Code in verschiedenen Formaten erhalten, einschließlich HEX, RGB, HSL und einem ungefähren CMYK-Wert. Das Tool speichert auch einen Verlauf Ihrer zuletzt ausgewählten Farben, verfügt über einen eleganten Dunkelmodus und unterstützt mehrere Sprachen.",
        howToUseTitle: "Wie man d3v.site benutzt",
        howToUseList: `<li>Stellen Sie sicher, dass Sie einen <strong>kompatiblen Desktop-Browser</strong> (wie Chrome, Edge oder Opera) verwenden.</li><li>Klicken Sie auf die Schaltfläche "<strong>Farbe auswählen</strong>". Ihr Cursor verwandelt sich in eine Pipette/Lupe.</li><li>Bewegen Sie den Cursor über einen beliebigen Teil Ihres Bildschirms, um eine Farbe aufzunehmen.</li><li>Klicken Sie, um die Farbe auszuwählen. Sie wird im Farbfeld mit dem angezeigten Code angezeigt.</li><li>Wählen Sie Ihr gewünschtes <strong>Farbformat</strong> (HEX, RGB, HSL, CMYK) aus dem Dropdown-Menü.</li><li>Klicken Sie auf das Kopiersymbol, um den Farbcode in Ihre Zwischenablage zu kopieren.</li><li>Ausgewählte Farben werden automatisch zum schnellen Zugriff dem "<strong>Farbverlauf</strong>" hinzugefügt.</li>`,
        colorFormatsTitle: "Über Farbformate",
        colorFormatsP1: "d3v.site stellt Farbcodes in mehreren gängigen Formaten zur Verfügung:",
        colorFormatsList: `<li><strong>HEX:</strong> Ein sechsstelliger Code, der im Webdesign verwendet wird (z.B. #FF5733).</li><li><strong>RGB:</strong> Stellt Farben unter Verwendung von Rot-, Grün- und Blauwerten dar (z.B. rgb(255, 87, 51)).</li><li><strong>HSL:</strong> Eine intuitive Darstellung mit Farbton, Sättigung und Helligkeit (z.B. hsl(10, 100%, 60%)).</li><li><strong>CMYK:</strong> Ein Modell für den Farbdruck. Bietet eine ungefähre Umrechnung von der Bildschirmfarbe (z.B. cmyk(0%, 66%, 80%, 0%)).</li>`,
        adPlaceholderLabel: "Werbung", adNotice: "Ihre Werbung hier",
        footerAllRights: "Alle Rechte vorbehalten.", footerPrivacyPolicy: "Datenschutzrichtlinie", footerCraftedBy: `Erstellt von <a href="https://webmavie.com" target="_blank" rel="noopener noreferrer">WebMaVie</a>`
      },
      ru: {
        mainTitle: "d3v.site", mainSubtitle: "Расширенный онлайн-инструмент для выбора цвета",
        pickButtonText: "Выбрать цвет", pickingButtonText: "Выбираю...",
        formatLabel: "Формат:", historyTitle: "История цветов", noHistoryText: "Цвета ещё не выбраны.",
        unsupportedMessage: "Инструмент 'пипетка' предназначен для настольных браузеров, таких как Chrome, Edge или Opera. Эта функция недоступна на мобильных устройствах. Вы можете прочитать информацию об инструменте ниже.",
        colorCopied: "Скопировано!", copyTooltip: "Копировать код", languageToggleTitle: "Выбрать язык",
        themeToggleTitle: "Переключить тему", currentLangDisplay: "RU",
        taglineFree: "Бесплатный онлайн-инструмент", taglineNoDownload: "Не требует загрузки",
        whatIsTitle: "Что такое d3v.site?",
        whatIsP1: "d3v.site - это бесплатный, продвинутый онлайн-инструмент для выбора цвета, разработанный для веб-разработчиков, дизайнеров и всех, кому нужно быстро определять и использовать цвета с экрана. Он использует современный EyeDropper API, доступный в совместимых настольных браузерах. Не требуется никаких загрузок или установок!",
        whatIsP2: "С помощью d3v.site вы можете мгновенно взять образец любого цвета, видимого на вашем мониторе, и получить его код в различных форматах, включая HEX, RGB, HSL и приблизительное значение CMYK. Инструмент также хранит историю недавно выбранных вами цветов, имеет стильный темный режим и поддерживает несколько языков.",
        howToUseTitle: "Как использовать d3v.site",
        howToUseList: `<li>Убедитесь, что вы используете <strong>совместимый настольный браузер</strong> (например, Chrome, Edge или Opera).</li><li>Нажмите кнопку "<strong>Выбрать цвет</strong>". Ваш курсор изменится на пипетку/лупу.</li><li>Наведите курсор на любую часть экрана, чтобы взять образец цвета.</li><li>Нажмите, чтобы выбрать цвет. Он появится в цветовом поле вместе с его кодом.</li><li>Выберите желаемый <strong>формат цвета</strong> (HEX, RGB, HSL, CMYK) из выпадающего списка.</li><li>Нажмите на иконку копирования, чтобы скопировать код цвета в буфер обмена.</li><li>Выбранные цвета автоматически добавляются в "<strong>Историю цветов</strong>" для быстрого доступа.</li>`,
        colorFormatsTitle: "О форматах цвета",
        colorFormatsP1: "d3v.site предоставляет цветовые коды в нескольких распространенных форматах:",
        colorFormatsList: `<li><strong>HEX:</strong> Шестнадцатеричный код, используемый в веб-дизайне (например, #FF5733).</li><li><strong>RGB:</strong> Представляет цвета с использованием значений красного, зеленого и синего (например, rgb(255, 87, 51)).</li><li><strong>HSL:</strong> Интуитивно понятное представление с использованием тона, насыщенности и светлоты (например, hsl(10, 100%, 60%)).</li><li><strong>CMYK:</strong> Модель для цветной печати. Предоставляет приблизительное преобразование из экранного цвета (например, cmyk(0%, 66%, 80%, 0%)).</li>`,
        adPlaceholderLabel: "Реклама", adNotice: "Ваша реклама здесь",
        footerAllRights: "Все права защищены.", footerPrivacyPolicy: "Политика конфиденциальности", footerCraftedBy: `Создано <a href="https://webmavie.com" target="_blank" rel="noopener noreferrer">WebMaVie</a>`
      }
    };

    let currentLang = 'en';
    let currentTheme = 'dark';
    let colorHistory = [];
    let lastPickedHex = '#161B22';
    const isEyeDropperSupported = !!window.EyeDropper;

    const el = {};

    function cacheElements() {
        el.docElement = document.documentElement;
        el.body = document.body;
        el.pickColorBtn = document.getElementById('pickColorBtn');
        el.colorBox = document.getElementById('colorBox');
        el.colorCodeText = document.getElementById('colorCodeText');
        el.colorFormatSelect = document.getElementById('colorFormatSelect');
        el.colorHistoryList = document.getElementById('colorHistoryList');
        el.copyBtn = document.getElementById('copyBtn');
        el.copyFeedback = document.getElementById('copyFeedback');
        el.themeToggleBtn = document.getElementById('themeToggleBtn');
        el.sunIcon = el.themeToggleBtn.querySelector('.sun-icon');
        el.moonIcon = el.themeToggleBtn.querySelector('.moon-icon');
        el.languageDropdownContainer = document.getElementById('languageDropdownContainer');
        el.languageToggleBtn = document.getElementById('languageToggleBtn');
        el.currentLangDisplay = document.getElementById('currentLangDisplay');
        el.languageList = document.getElementById('languageList');
        el.toolSection = document.getElementById('toolSection');
        el.unsupportedSection = document.getElementById('unsupportedSection');
        el.unsupportedMessage = document.getElementById('unsupportedMessage');
        el.currentYear = document.getElementById('currentYear');
    }

    function applyTranslations() {
        const lang = currentLang;
        const t = translations[lang];

        document.querySelectorAll('[data-translate-key]').forEach(elem => {
            const key = elem.dataset.translateKey;
            if (t[key]) {
                elem.innerHTML = t[key];
            }
        });
        
        document.title = t.mainTitle + " - " + (t.taglineFree || "Free Online Tool");
        document.querySelector('meta[name="description"]').setAttribute('content', `d3v.site - ${t.mainSubtitle}`);
        document.querySelector('meta[name="keywords"]').setAttribute('content', `d3v.site, color picker, online color picker, ${t.pickButtonText}, hex color, rgb color`);

        // document.getElementById('mainTitle').textContent = t.mainTitle;
        document.getElementById('mainSubtitle').textContent = t.mainSubtitle;
        document.getElementById('currentLangDisplay').textContent = t.currentLangDisplay;

        document.getElementById('pickButtonText').textContent = t.pickButtonText;
        document.getElementById('formatLabel').textContent = t.formatLabel;
        document.getElementById('historyTitle').textContent = t.historyTitle;
        el.unsupportedMessage.textContent = t.unsupportedMessage;

        if (el.copyBtn) el.copyBtn.title = t.copyTooltip;
        el.languageToggleBtn.title = t.languageToggleTitle;
        el.themeToggleBtn.title = t.themeToggleTitle;
    }
    
    function populateLanguageList() {
        el.languageList.innerHTML = '';
        Object.keys(translations).forEach(langKey => {
            const button = document.createElement('button');
            button.classList.add('lang-btn-dropdown');
            button.dataset.lang = langKey;
            let langName = 'English';
            if (langKey === 'tr') langName = 'Türkçe';
            if (langKey === 'az') langName = 'Azərbaycanca';
            if (langKey === 'de') langName = 'Deutsch';
            if (langKey === 'ru') langName = 'Русский'; 
            button.textContent = langName;
            if (langKey === currentLang) button.classList.add('active');
            
            button.addEventListener('click', () => {
                currentLang = langKey;
                localStorage.setItem('d3vsiteLang', langKey);
                el.docElement.lang = langKey;
                applyTranslations();
                document.querySelectorAll('.lang-btn-dropdown').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                el.languageDropdownContainer.classList.remove('open');
                if (isEyeDropperSupported) displayColor(lastPickedHex);
            });
            el.languageList.appendChild(button);
        });
    }

    function hexToRgb(hex) { if (!hex || typeof hex !== 'string') return { r: 0, g: 0, b: 0 }; let r = 0, g = 0, b = 0; if (hex.length == 4) { r = parseInt(hex[1] + hex[1], 16); g = parseInt(hex[2] + hex[2], 16); b = parseInt(hex[3] + hex[3], 16); } else if (hex.length == 7) { r = parseInt(hex[1] + hex[2], 16); g = parseInt(hex[3] + hex[4], 16); b = parseInt(hex[5] + hex[6], 16); } return { r, g, b }; }
    function rgbToHsl(r, g, b) { r /= 255; g /= 255; b /= 255; const max = Math.max(r, g, b), min = Math.min(r, g, b); let h, s, l = (max + min) / 2; if (max == min) h = s = 0; else { const d = max - min; s = l > 0.5 ? d / (2 - max - min) : d / (max + min); switch (max) { case r: h = (g - b) / d + (g < b ? 6 : 0); break; case g: h = (b - r) / d + 2; break; case b: h = (r - g) / d + 4; break; } h /= 6; } return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) }; }
    function rgbToCmyk(r, g, b) { if (r == 0 && g == 0 && b == 0) return { c: 0, m: 0, y: 0, k: 100 }; let c = 1 - (r / 255); let m = 1 - (g / 255); let y = 1 - (b / 255); const k = Math.min(c, m, y); if (k === 1) return { c:0, m:0, y:0, k:100 }; c = (c - k) / (1 - k); m = (m - k) / (1 - k); y = (y - k) / (1 - k); return { c: Math.round(c * 100), m: Math.round(m * 100), y: Math.round(y * 100), k: Math.round(k * 100) }; }
    
    function displayColor(hex) {
      lastPickedHex = hex;
      el.colorBox.style.backgroundColor = hex;
      const rgb = hexToRgb(hex); const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b); const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);
      let codeToDisplay = '';
      switch (el.colorFormatSelect.value) {
        case 'rgb': codeToDisplay = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`; break;
        case 'hsl': codeToDisplay = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`; break;
        case 'cmyk': codeToDisplay = `cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`; break;
        default: codeToDisplay = hex.toUpperCase();
      }
      el.colorCodeText.textContent = codeToDisplay;
    }

    function addToHistory(hex) {
      if (colorHistory.includes(hex)) colorHistory = colorHistory.filter(c => c !== hex);
      colorHistory.unshift(hex); if (colorHistory.length > 10) colorHistory.pop();
      localStorage.setItem('d3vsiteHistory', JSON.stringify(colorHistory)); renderHistory();
    }

    function renderHistory() {
      el.colorHistoryList.innerHTML = '';
      if (colorHistory.length === 0) {
        const li = document.createElement('li'); li.classList.add('no-history'); li.id = 'noHistoryText'; 
        li.textContent = translations[currentLang].noHistoryText; el.colorHistoryList.appendChild(li); return;
      }
      colorHistory.forEach(hex => {
        const li = document.createElement('li'); li.dataset.hex = hex;
        const swatch = document.createElement('div'); swatch.classList.add('history-color-swatch');
        swatch.style.backgroundColor = hex; li.appendChild(swatch);
        li.addEventListener('click', () => { displayColor(hex); window.scrollTo({ top: 0, behavior: 'smooth' }); });
        el.colorHistoryList.appendChild(li);
      });
    }

    async function pickColorHandler() {
      const eyeDropper = new EyeDropper();
      document.getElementById('pickButtonText').textContent = translations[currentLang].pickingButtonText;
      try {
        const result = await eyeDropper.open();
        displayColor(result.sRGBHex); addToHistory(result.sRGBHex);
      } catch (e) { console.warn("Color picking cancelled or failed:", e);
      } finally { document.getElementById('pickButtonText').textContent = translations[currentLang].pickButtonText; }
    }
    
    function applyTheme(theme) {
        currentTheme = theme; localStorage.setItem('d3vsiteTheme', theme);
        if (theme === 'dark') { el.body.classList.add('dark-mode'); el.sunIcon.style.display = 'none'; el.moonIcon.style.display = 'block'; }
        else { el.body.classList.remove('dark-mode'); el.sunIcon.style.display = 'block'; el.moonIcon.style.display = 'none'; }
    }
    
    function setupToolVisibility() {
        if (isEyeDropperSupported) {
            el.toolSection.classList.remove('tool-hidden');
            el.unsupportedSection.classList.add('tool-hidden');
            const savedHistory = localStorage.getItem('d3vsiteHistory');
            if (savedHistory) colorHistory = JSON.parse(savedHistory);
            renderHistory();
            displayColor(colorHistory.length > 0 ? colorHistory[0] : '#161B22');
        } else {
            el.toolSection.classList.add('tool-hidden');
            el.unsupportedSection.classList.remove('tool-hidden');
        }
    }

    function loadInitialSettings() {
      cacheElements();
      const savedLang = localStorage.getItem('d3vsiteLang') || 'en';
      currentLang = savedLang;
      el.docElement.lang = savedLang;
      
      const savedTheme = localStorage.getItem('d3vsiteTheme') || 'dark';
      applyTheme(savedTheme);

      populateLanguageList();
      setupToolVisibility();
      applyTranslations();
      el.currentYear.textContent = new Date().getFullYear();
    }
    
    window.addEventListener('DOMContentLoaded', () => {
        loadInitialSettings();

        if (isEyeDropperSupported) {
            el.pickColorBtn.addEventListener('click', pickColorHandler);
            el.colorFormatSelect.addEventListener('change', () => displayColor(lastPickedHex));
            el.copyBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(el.colorCodeText.textContent)
                    .then(() => { el.copyFeedback.textContent = translations[currentLang].colorCopied; setTimeout(() => { el.copyFeedback.textContent = ''; }, 1500); })
                    .catch(err => { console.error('Failed to copy: ', err); });
            });
        }
        
        el.themeToggleBtn.addEventListener('click', () => applyTheme(currentTheme === 'light' ? 'dark' : 'light'));
        el.languageToggleBtn.addEventListener('click', (event) => { event.stopPropagation(); el.languageDropdownContainer.classList.toggle('open'); });
        document.addEventListener('click', (event) => {
            if (!el.languageDropdownContainer.contains(event.target) && el.languageDropdownContainer.classList.contains('open')) {
                el.languageDropdownContainer.classList.remove('open');
            }
        });
    });