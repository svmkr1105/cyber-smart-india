// ======================== SAFETY TIPS & AWARENESS TOPICS MODAL ========================

// Awareness Topics Data in Hindi & English
const awarenessData = {
    "OTP Fraud Awareness": {
        en: {
            title: "🔐 OTP Fraud Awareness",
            description: "Scammers trick you into sharing One-Time Password to drain your bank accounts.",
            howItWorks: "Fake calls impersonating bank officials, KYC agents, or delivery persons. They create urgency and ask for OTP.",
            prevention: "✅ Never share OTP with anyone\n✅ Bank never asks for OTP\n✅ If asked, report to 1930 immediately\n✅ Verify caller identity before sharing any info",
            icon: "fas fa-key"
        },
        hi: {
            title: "🔐 OTP फ्रॉड जागरूकता",
            description: "स्कैमर्स आपको OTP शेयर करने के लिए बरगलाते हैं और आपके बैंक खाते को खाली कर देते हैं।",
            howItWorks: "बैंक अधिकारी, KYC एजेंट या डिलीवरी व्यक्ति बनकर फर्जी कॉल। वे तात्कालिकता पैदा करते हैं और OTP मांगते हैं।",
            prevention: "✅ OTP कभी किसी के साथ साझा न करें\n✅ बैंक कभी OTP नहीं मांगता\n✅ अगर मांगे तो तुरंत 1930 पर रिपोर्ट करें\n✅ कोई जानकारी साझा करने से पहले कॉलर की पहचान सत्यापित करें",
            icon: "fas fa-key"
        }
    },
    "Phishing Awareness": {
        en: {
            title: "🎣 Phishing Awareness",
            description: "Fraudulent emails, messages, or websites that mimic legitimate companies to steal your data.",
            howItWorks: "Scammers send fake emails claiming to be from banks, Amazon, or Flipkart with links to fake login pages.",
            prevention: "✅ Check sender's email address carefully\n✅ Hover over links before clicking\n✅ Never enter passwords on suspicious sites\n✅ Enable 2FA on all important accounts",
            icon: "fas fa-envelope-open-text"
        },
        hi: {
            title: "🎣 फ़िशिंग जागरूकता",
            description: "धोखाधड़ी वाले ईमेल, संदेश या वेबसाइट जो असली कंपनियों की नकल कर आपका डेटा चुराते हैं।",
            howItWorks: "स्कैमर्स बैंक, Amazon या Flipkart होने का दावा करने वाले फर्जी ईमेल भेजते हैं जो फर्जी लॉगिन पेजों के लिंक के साथ होते हैं।",
            prevention: "✅ प्रेषक के ईमेल पते को ध्यान से देखें\n✅ क्लिक करने से पहले लिंक पर होवर करें\n✅ संदिग्ध साइटों पर पासवर्ड कभी न डालें\n✅ सभी महत्वपूर्ण अकाउंट पर 2FA सक्षम करें",
            icon: "fas fa-envelope-open-text"
        }
    },
    "Social Media Scams": {
        en: {
            title: "📱 Social Media Scams",
            description: "Fake giveaways, romance scams, profile cloning, and lottery frauds on social platforms.",
            howItWorks: "Scammers create fake profiles, promise prizes or love, then ask for money or personal information.",
            prevention: "✅ Never share personal info with strangers\n✅ Verify profiles before trusting\n✅ Report fake accounts immediately\n✅ Adjust privacy settings to 'Friends Only'",
            icon: "fab fa-instagram"
        },
        hi: {
            title: "📱 सोशल मीडिया स्कैम",
            description: "सोशल प्लेटफॉर्म पर फर्जी गिवअवे, रोमांस स्कैम, प्रोफाइल क्लोनिंग और लॉटरी घोटाले।",
            howItWorks: "स्कैमर्स नकली प्रोफाइल बनाते हैं, पुरस्कार या प्यार का वादा करते हैं, फिर पैसे या व्यक्तिगत जानकारी मांगते हैं।",
            prevention: "✅ अजनबियों के साथ व्यक्तिगत जानकारी कभी साझा न करें\n✅ भरोसा करने से पहले प्रोफाइल सत्यापित करें\n✅ तुरंत फर्जी अकाउंट रिपोर्ट करें\n✅ गोपनीयता सेटिंग्स को 'Friends Only' पर समायोजित करें",
            icon: "fab fa-instagram"
        }
    },
    "Identity Theft": {
        en: {
            title: "🆔 Identity Theft",
            description: "Stealing personal data like Aadhaar, PAN, or bank details to commit fraud.",
            howItWorks: "Hackers use data breaches, unsecured Wi-Fi, or fake job offers to collect your personal information.",
            prevention: "✅ Never share ID proofs on unverified websites\n✅ Use secure connections (HTTPS)\n✅ Monitor bank statements regularly\n✅ Shred documents with personal info before discarding",
            icon: "fas fa-id-card"
        },
        hi: {
            title: "🆔 पहचान की चोरी",
            description: "धोखाधड़ी करने के लिए आधार, पैन या बैंक विवरण जैसे व्यक्तिगत डेटा की चोरी।",
            howItWorks: "हैकर्स आपकी व्यक्तिगत जानकारी इकट्ठा करने के लिए डेटा उल्लंघन, असुरक्षित Wi-Fi या नकली नौकरी के प्रस्तावों का उपयोग करते हैं।",
            prevention: "✅ अपुष्ट वेबसाइटों पर आईडी प्रूफ कभी साझा न करें\n✅ सुरक्षित कनेक्शन (HTTPS) का उपयोग करें\n✅ नियमित रूप से बैंक स्टेटमेंट की निगरानी करें\n✅ व्यक्तिगत जानकारी वाले दस्तावेज़ों को फेंकने से पहले काट दें",
            icon: "fas fa-id-card"
        }
    },
    "Cyberbullying": {
        en: {
            title: "💔 Cyberbullying",
            description: "Harassment, trolling, doxxing, and spreading hate online.",
            howItWorks: "Bullies use social media, messaging apps, or gaming platforms to threaten, embarrass, or target individuals.",
            prevention: "✅ Block and report bullies immediately\n✅ Save screenshots as evidence\n✅ Don't respond to trolls\n✅ Talk to a trusted adult or counselor",
            icon: "fas fa-user-slash"
        },
        hi: {
            title: "💔 साइबर बुलिंग",
            description: "ऑनलाइन उत्पीड़न, ट्रोलिंग, डॉक्सिंग और नफरत फैलाना।",
            howItWorks: "बदमाश व्यक्तियों को धमकाने, शर्मिंदा करने या निशाना बनाने के लिए सोशल मीडिया, मैसेजिंग ऐप्स या गेमिंग प्लेटफॉर्म का उपयोग करते हैं।",
            prevention: "✅ बदमाशों को तुरंत ब्लॉक और रिपोर्ट करें\n✅ सबूत के रूप में स्क्रीनशॉट सहेजें\n✅ ट्रोल्स को जवाब न दें\n✅ किसी भरोसेमंद वयस्क या परामर्शदाता से बात करें",
            icon: "fas fa-user-slash"
        }
    },
    "Online Banking Fraud": {
        en: {
            title: "🏦 Online Banking Fraud",
            description: "Unauthorized transactions, SIM swap, UPI scams, and fake banking apps.",
            howItWorks: "Fraudsters trick you into sharing credentials, or use malware to capture banking information.",
            prevention: "✅ Use only official bank app\n✅ Never share UPI PIN or banking password\n✅ Enable transaction alerts\n✅ Check bank statements regularly\n✅ Report unauthorized transactions immediately",
            icon: "fas fa-university"
        },
        hi: {
            title: "🏦 ऑनलाइन बैंकिंग फ्रॉड",
            description: "अनधिकृत लेनदेन, SIM स्वैप, UPI स्कैम और फर्जी बैंकिंग ऐप्स।",
            howItWorks: "धोखेबाज आपको क्रेडेंशियल साझा करने के लिए बरगलाते हैं, या बैंकिंग जानकारी प्राप्त करने के लिए मैलवेयर का उपयोग करते हैं।",
            prevention: "✅ केवल आधिकारिक बैंक ऐप का उपयोग करें\n✅ UPI PIN या बैंकिंग पासवर्ड कभी साझा न करें\n✅ लेनदेन अलर्ट सक्षम करें\n✅ नियमित रूप से बैंक स्टेटमेंट देखें\n✅ अनधिकृत लेनदेन की तुरंत रिपोर्ट करें",
            icon: "fas fa-university"
        }
    }
};

// Safety Tips Data in Hindi & English
const safetyData = {
    "Never share OTP": {
        en: {
            title: "🔐 Never Share OTP",
            description: "OTP (One Time Password) is like the key to your digital locker. Never share it with anyone.",
            howItWorks: "Scammers call pretending to be from bank, delivery, or KYC team and ask for OTP.",
            prevention: "✅ Bank never asks for OTP\n✅ Never share OTP on call/SMS/Email\n✅ If asked, report immediately to 1930",
            icon: "fas fa-lock"
        },
        hi: {
            title: "🔐 OTP कभी साझा न करें",
            description: "OTP (वन टाइम पासवर्ड) आपके डिजिटल लॉकर की चाबी है। इसे कभी किसी के साथ साझा न करें।",
            howItWorks: "स्कैमर्स बैंक, डिलीवरी या KYC टीम बनकर फोन करते हैं और OTP मांगते हैं।",
            prevention: "✅ बैंक कभी OTP नहीं मांगता\n✅ कॉल/SMS/Email पर OTP कभी न दें\n✅ अगर मांगे तो तुरंत 1930 पर रिपोर्ट करें",
            icon: "fas fa-lock"
        }
    },
    "Strong Passwords": {
        en: {
            title: "🔑 Strong Passwords",
            description: "Weak passwords are easy to crack. Create strong, unique passwords for every account.",
            howItWorks: "Hackers use brute force attacks and dictionary attacks to guess weak passwords.",
            prevention: "✅ Use 12+ characters\n✅ Mix uppercase, lowercase, numbers & symbols\n✅ Don't use personal info (name, birthdate)\n✅ Use a password manager",
            icon: "fas fa-key"
        },
        hi: {
            title: "🔑 मजबूत पासवर्ड",
            description: "कमजोर पासवर्ड आसानी से टूट जाते हैं। हर अकाउंट के लिए मजबूत, अनोखा पासवर्ड बनाएं।",
            howItWorks: "हैकर्स कमजोर पासवर्ड का अनुमान लगाने के लिए ब्रूट फोर्स और डिक्शनरी अटैक का उपयोग करते हैं।",
            prevention: "✅ 12+ अक्षरों का उपयोग करें\n✅ बड़े, छोटे अक्षर, संख्याएं और चिन्ह मिलाएं\n✅ व्यक्तिगत जानकारी (नाम, जन्मतिथि) न उपयोग करें\n✅ पासवर्ड मैनेजर का उपयोग करें",
            icon: "fas fa-key"
        }
    },
    "Enable 2FA": {
        en: {
            title: "🔐 Enable 2-Factor Authentication",
            description: "2FA adds an extra security layer. Even if password is stolen, account stays safe.",
            howItWorks: "After entering password, you need a second verification (OTP, authenticator app, or biometric).",
            prevention: "✅ Enable 2FA on email, banking, social media\n✅ Use Google Authenticator or Microsoft Authenticator\n✅ Avoid SMS-based 2FA when possible\n✅ Keep backup codes safely",
            icon: "fas fa-mobile-alt"
        },
        hi: {
            title: "🔐 टू-फैक्टर ऑथेंटिकेशन (2FA) सक्षम करें",
            description: "2FA एक अतिरिक्त सुरक्षा परत जोड़ता है। पासवर्ड चोरी होने पर भी अकाउंट सुरक्षित रहता है।",
            howItWorks: "पासवर्ड डालने के बाद, आपको दूसरा सत्यापन (OTP, ऑथेंटिकेटर ऐप, या बायोमेट्रिक) चाहिए।",
            prevention: "✅ ईमेल, बैंकिंग, सोशल मीडिया पर 2FA सक्षम करें\n✅ Google Authenticator या Microsoft Authenticator का उपयोग करें\n✅ जब संभव हो SMS-based 2FA से बचें\n✅ बैकअप कोड सुरक्षित रखें",
            icon: "fas fa-mobile-alt"
        }
    },
    "Avoid Suspicious Links": {
        en: {
            title: "⚠️ Avoid Suspicious Links",
            description: "Fake links can steal your personal information or install malware on your device.",
            howItWorks: "Scammers send links via SMS, email, or social media that look real but lead to fake websites.",
            prevention: "✅ Hover over link to see real URL\n✅ Don't click on unknown links\n✅ Check for spelling mistakes in domain name\n✅ Type the website address manually",
            icon: "fas fa-link"
        },
        hi: {
            title: "⚠️ संदिग्ध लिंक से बचें",
            description: "नकली लिंक आपकी जानकारी चुरा सकते हैं या आपके डिवाइस पर मैलवेयर इंस्टॉल कर सकते हैं।",
            howItWorks: "स्कैमर्स SMS, ईमेल या सोशल मीडिया पर लिंक भेजते हैं जो असली लगते हैं लेकिन नकली वेबसाइटों पर ले जाते हैं।",
            prevention: "✅ लिंक पर होवर करें और असली URL देखें\n✅ अज्ञात लिंक पर न क्लिक करें\n✅ डोमेन नाम में वर्तनी की गलतियाँ देखें\n✅ वेबसाइट का पता खुद टाइप करें",
            icon: "fas fa-link"
        }
    },
    "Secure Wi-Fi": {
        en: {
            title: "📡 Secure Wi-Fi",
            description: "Public Wi-Fi networks are often unsecured and can be exploited by hackers.",
            howItWorks: "Hackers set up fake Wi-Fi hotspots or intercept data on public networks to steal passwords and personal info.",
            prevention: "✅ Avoid public Wi-Fi for banking\n✅ Use a VPN on public networks\n✅ Turn off auto-connect to Wi-Fi\n✅ Use mobile data for sensitive transactions",
            icon: "fas fa-wifi"
        },
        hi: {
            title: "📡 सुरक्षित Wi-Fi",
            description: "सार्वजनिक Wi-Fi नेटवर्क अक्सर असुरक्षित होते हैं और हैकर्स द्वारा उनका फायदा उठाया जा सकता है।",
            howItWorks: "हैकर्स नकली Wi-Fi हॉटस्पॉट बनाते हैं या सार्वजनिक नेटवर्क पर डेटा इंटरसेप्ट करते हैं।",
            prevention: "✅ बैंकिंग के लिए सार्वजनिक Wi-Fi से बचें\n✅ सार्वजनिक नेटवर्क पर VPN का उपयोग करें\n✅ Wi-Fi से ऑटो-कनेक्ट बंद करें\n✅ संवेदनशील लेनदेन के लिए मोबाइल डेटा का उपयोग करें",
            icon: "fas fa-wifi"
        }
    },
    "Backup Data": {
        en: {
            title: "💾 Backup Your Data",
            description: "Regular backups protect you from ransomware attacks and hardware failures.",
            howItWorks: "Ransomware encrypts your files and demands payment. Backups let you restore without paying.",
            prevention: "✅ Follow 3-2-1 backup rule (3 copies, 2 media types, 1 offsite)\n✅ Use cloud backup services\n✅ Backup important files weekly\n✅ Test your backups periodically",
            icon: "fas fa-archive"
        },
        hi: {
            title: "💾 अपना डेटा बैकअप करें",
            description: "नियमित बैकअप आपको रैंसमवेयर हमलों और हार्डवेयर विफलताओं से बचाता है।",
            howItWorks: "रैंसमवेयर आपकी फाइलों को एन्क्रिप्ट करता है और भुगतान मांगता है। बैकअप आपको भुगतान किए बिना पुनर्स्थापित करने देता है।",
            prevention: "✅ 3-2-1 बैकअप नियम का पालन करें\n✅ क्लाउड बैकअप सेवाओं का उपयोग करें\n✅ महत्वपूर्ण फाइलों का साप्ताहिक बैकअप लें\n✅ समय-समय पर अपने बैकअप का परीक्षण करें",
            icon: "fas fa-archive"
        }
    },
    "Update Software": {
        en: {
            title: "🔄 Update Software Regularly",
            description: "Software updates fix security vulnerabilities that hackers can exploit.",
            howItWorks: "Hackers look for unpatched systems with known vulnerabilities. Updates close these security holes.",
            prevention: "✅ Enable automatic updates\n✅ Update operating system, browser, and apps\n✅ Don't delay security updates\n✅ Remove outdated software you don't use",
            icon: "fas fa-shield-virus"
        },
        hi: {
            title: "🔄 सॉफ्टवेयर नियमित रूप से अपडेट करें",
            description: "सॉफ्टवेयर अपडेट उन सुरक्षा कमजोरियों को ठीक करते हैं जिनका हैकर्स फायदा उठा सकते हैं।",
            howItWorks: "हैकर्स अप्रचलित सिस्टम की तलाश करते हैं। अपडेट इन सुरक्षा छिद्रों को बंद करते हैं।",
            prevention: "✅ ऑटोमैटिक अपडेट सक्षम करें\n✅ ऑपरेटिंग सिस्टम, ब्राउज़र और ऐप्स अपडेट करें\n✅ सुरक्षा अपडेट में देरी न करें\n✅ पुराने सॉफ्टवेयर जो उपयोग नहीं करते हटाएं",
            icon: "fas fa-shield-virus"
        }
    },
    "Report Scams": {
        en: {
            title: "📞 Report Scams Immediately",
            description: "Reporting scams helps authorities catch criminals and warn others.",
            howItWorks: "When you report, cyber cells track fraudsters and block their numbers/accounts.",
            prevention: "✅ Call Cyber Helpline: 1930\n✅ Report at cybercrime.gov.in\n✅ Save screenshots of scam messages/calls\n✅ Inform your bank immediately if money is lost",
            icon: "fas fa-phone-slash"
        },
        hi: {
            title: "📞 स्कैम की तुरंत रिपोर्ट करें",
            description: "स्कैम की रिपोर्ट करने से अधिकारियों को अपराधियों को पकड़ने में मदद मिलती है।",
            howItWorks: "रिपोर्ट करने पर, साइबर सेल ठगों को ट्रैक करते हैं और उनके नंबर/अकाउंट ब्लॉक करते हैं।",
            prevention: "✅ साइबर हेल्पलाइन पर कॉल करें: 1930\n✅ cybercrime.gov.in पर रिपोर्ट करें\n✅ स्कैम संदेश/कॉल के स्क्रीनशॉट सहेजें\n✅ अगर पैसे खो गए हैं तो तुरंत बैंक को सूचित करें",
            icon: "fas fa-phone-slash"
        }
    }
};

// Create and inject modal HTML
function createModal() {
    const modalHTML = `
        <div id="safetyModal" class="safety-modal" style="display: none;">
            <div class="safety-modal-overlay"></div>
            <div class="safety-modal-container">
                <div class="safety-modal-header">
                    <div class="safety-modal-title">
                        <i id="modalIcon" class="fas fa-shield-alt"></i>
                        <span id="modalTitle">Cyber Safety</span>
                    </div>
                    <button class="safety-modal-close" onclick="closeSafetyModal()">&times;</button>
                </div>
                <div class="safety-modal-body">
                    <div class="safety-language-toggle">
                        <button id="langHindiBtn" class="lang-btn" onclick="setLanguage('hi')">🇮🇳 हिंदी</button>
                        <button id="langEnglishBtn" class="lang-btn active" onclick="setLanguage('en')">🇬🇧 English</button>
                    </div>
                    <div class="safety-modal-content">
                        <div id="modalDescription" class="safety-description"></div>
                        <div class="safety-section">
                            <h4><i class="fas fa-user-secret"></i> How Scammers Attack:</h4>
                            <p id="modalHowItWorks"></p>
                        </div>
                        <div class="safety-section prevention-section">
                            <h4><i class="fas fa-shield-alt"></i> Prevention Tips:</h4>
                            <div id="modalPrevention" class="prevention-list"></div>
                        </div>
                    </div>
                </div>
                <div class="safety-modal-footer">
                    <button class="safety-modal-btn" onclick="closeSafetyModal()">Got it! <i class="fas fa-check"></i></button>
                </div>
            </div>
        </div>
    `;

    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .safety-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .safety-modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(5px);
        }
        .safety-modal-container {
            position: relative;
            background: white;
            width: 90%;
            max-width: 550px;
            max-height: 85vh;
            border-radius: 20px;
            overflow: hidden;
            animation: modalSlideIn 0.3s ease;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        body.dark-mode .safety-modal-container {
            background: #1e293b;
            color: #e2e8f0;
        }
        @keyframes modalSlideIn {
            from { transform: translateY(-50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        .safety-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 18px 24px;
            background: linear-gradient(135deg, #06b6d4, #0891b2);
            color: white;
        }
        .safety-modal-title {
            font-size: 1.3rem;
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .safety-modal-close {
            background: none;
            border: none;
            color: white;
            font-size: 28px;
            cursor: pointer;
            line-height: 1;
            transition: transform 0.2s;
        }
        .safety-modal-close:hover { transform: scale(1.1); }
        .safety-modal-body {
            padding: 20px 24px;
            max-height: 60vh;
            overflow-y: auto;
        }
        .safety-language-toggle {
            display: flex;
            gap: 12px;
            justify-content: flex-end;
            margin-bottom: 20px;
        }
        .lang-btn {
            padding: 6px 14px;
            border: none;
            border-radius: 30px;
            cursor: pointer;
            background: #e2e8f0;
            color: #1e293b;
            font-weight: 500;
            transition: all 0.2s;
        }
        body.dark-mode .lang-btn {
            background: #334155;
            color: #e2e8f0;
        }
        .lang-btn.active {
            background: #06b6d4;
            color: white;
        }
        .safety-description {
            font-size: 1rem;
            line-height: 1.5;
            margin-bottom: 20px;
            padding: 12px;
            background: #f1f5f9;
            border-radius: 12px;
        }
        body.dark-mode .safety-description {
            background: #0f172a;
        }
        .safety-section {
            margin-bottom: 20px;
        }
        .safety-section h4 {
            margin-bottom: 8px;
            color: #06b6d4;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .prevention-list {
            background: #f0fdf4;
            padding: 12px;
            border-radius: 12px;
            border-left: 4px solid #10b981;
        }
        body.dark-mode .prevention-list {
            background: #064e3b;
        }
        .prevention-list p {
            margin: 8px 0;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .safety-modal-footer {
            padding: 16px 24px;
            border-top: 1px solid #e2e8f0;
            text-align: center;
        }
        body.dark-mode .safety-modal-footer {
            border-top-color: #334155;
        }
        .safety-modal-btn {
            background: linear-gradient(135deg, #06b6d4, #0891b2);
            color: white;
            border: none;
            padding: 10px 24px;
            border-radius: 40px;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.2s;
        }
        .safety-modal-btn:hover { transform: scale(1.02); }
    `;
    document.head.appendChild(style);
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

let currentTopic = null;
let currentType = null;
let currentLanguage = 'en';

function openModal(topic, type) {
    currentType = type;
    if (type === 'awareness') {
        currentTopic = awarenessData[topic];
    } else {
        currentTopic = safetyData[topic];
    }

    if (!currentTopic) return;

    const modal = document.getElementById('safetyModal');
    if (!modal) createModal();

    updateModalContent();
    document.getElementById('safetyModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function updateModalContent() {
    if (!currentTopic) return;
    const data = currentTopic[currentLanguage];

    document.getElementById('modalIcon').className = `fas ${data.icon}`;
    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalDescription').innerHTML = `<i class="fas fa-info-circle" style="color: #06b6d4; margin-right: 8px;"></i>${data.description}`;
    document.getElementById('modalHowItWorks').innerHTML = data.howItWorks;

    const tips = data.prevention.split('\n');
    document.getElementById('modalPrevention').innerHTML = tips.map(tip =>
        `<p><i class="fas fa-check-circle" style="color: #10b981;"></i> ${tip.replace('✅', '').trim()}</p>`
    ).join('');

    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    if (currentLanguage === 'hi') {
        document.getElementById('langHindiBtn').classList.add('active');
    } else {
        document.getElementById('langEnglishBtn').classList.add('active');
    }
}

function setLanguage(lang) {
    currentLanguage = lang;
    updateModalContent();
}

function closeSafetyModal() {
    const modal = document.getElementById('safetyModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Attach click handlers to Safety Tips AND Awareness Topics
function attachClickHandlers() {
    // Safety Tips Cards
    const tipCards = document.querySelectorAll('.tip-card');
    const safetyMapping = {
        "Never share OTP": "Never share OTP",
        "Strong Passwords": "Strong Passwords",
        "Enable 2FA": "Enable 2FA",
        "Avoid Suspicious Links": "Avoid Suspicious Links",
        "Secure Wi-Fi": "Secure Wi-Fi",
        "Backup Data": "Backup Data",
        "Update Software": "Update Software",
        "Report Scams": "Report Scams"
    };

    tipCards.forEach(card => {
        const titleElem = card.querySelector('h3');
        if (titleElem) {
            const title = titleElem.innerText.trim();
            if (safetyMapping[title]) {
                card.style.cursor = 'pointer';
                card.addEventListener('click', (e) => {
                    e.stopPropagation();
                    openModal(title, 'safety');
                });
            }
        }
    });

    // Awareness Topics Cards
    const awarenessCards = document.querySelectorAll('.awareness-card');
    const awarenessMapping = {
        "OTP Fraud Awareness": "OTP Fraud Awareness",
        "Phishing Awareness": "Phishing Awareness",
        "Social Media Scams": "Social Media Scams",
        "Identity Theft": "Identity Theft",
        "Cyberbullying": "Cyberbullying",
        "Online Banking Fraud": "Online Banking Fraud"
    };

    awarenessCards.forEach(card => {
        const titleElem = card.querySelector('h3');
        if (titleElem) {
            const title = titleElem.innerText.trim();
            if (awarenessMapping[title]) {
                card.style.cursor = 'pointer';
                card.addEventListener('click', (e) => {
                    e.stopPropagation();
                    openModal(title, 'awareness');
                });
            }
        }
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    createModal();
    attachClickHandlers();

    const observer = new MutationObserver(function() {
        attachClickHandlers();
    });
    observer.observe(document.body, { childList: true, subtree: true });
});

// Expose functions globally
window.openModal = openModal;
window.closeSafetyModal = closeSafetyModal;
window.setLanguage = setLanguage;