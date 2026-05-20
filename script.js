// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {

            // ======================== DARK MODE TOGGLE ========================
            const darkToggle = document.getElementById('darkModeToggle');
            const body = document.body;

            if (localStorage.getItem('darkMode') === 'enabled') {
                body.classList.add('dark-mode');
                darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                darkToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }

            darkToggle.addEventListener('click', () => {
                body.classList.toggle('dark-mode');
                if (body.classList.contains('dark-mode')) {
                    localStorage.setItem('darkMode', 'enabled');
                    darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
                } else {
                    localStorage.setItem('darkMode', 'disabled');
                    darkToggle.innerHTML = '<i class="fas fa-moon"></i>';
                }
            });

            // ======================== MOBILE MENU TOGGLE ========================
            const mobileBtn = document.getElementById('mobileMenuBtn');
            const mobileMenu = document.getElementById('mobileMenu');

            if (mobileBtn && mobileMenu) {
                mobileBtn.addEventListener('click', () => {
                    mobileMenu.classList.toggle('hidden');
                });

                document.querySelectorAll('#mobileMenu a').forEach(link => {
                    link.addEventListener('click', () => {
                        mobileMenu.classList.add('hidden');
                    });
                });
            }

            // ======================== ANNOUNCEMENT BAR ========================
            function loadAnnouncement() {
                const announcement = localStorage.getItem('globalAnnouncement');
                const announcementBar = document.getElementById('announcementBar');
                const announcementText = document.getElementById('announcementText');

                if (announcement && announcement !== 'null' && announcement !== '') {
                    announcementText.innerText = announcement;
                    announcementBar.style.display = 'block';
                } else {
                    announcementBar.style.display = 'none';
                }
            }

            window.closeAnnouncement = function() {
                document.getElementById('announcementBar').style.display = 'none';
            }

            loadAnnouncement();

            // ======================== QUIZ LOGIC ========================
            const quizBtn = document.getElementById('submitQuiz');
            const quizResultDiv = document.getElementById('quizResult');
            const extraMsgDiv = document.getElementById('quizFeedbackExtra');

            if (quizBtn) {
                quizBtn.addEventListener('click', () => {
                    const selected = document.querySelector('input[name="quiz"]:checked');

                    if (!selected) {
                        showAlertPopup("⚠️ Please select an answer before submitting!", "warning");
                        if (quizResultDiv) quizResultDiv.innerHTML = "";
                        if (extraMsgDiv) extraMsgDiv.innerHTML = "";
                        return;
                    }

                    if (selected.value === "never") {
                        if (quizResultDiv) {
                            quizResultDiv.innerHTML = "✅ Correct! Never share OTP. Banks never ask for OTP. You are cyber smart!";
                            quizResultDiv.style.color = "#10b981";
                        }
                        if (extraMsgDiv) extraMsgDiv.innerHTML = "💡 Pro tip: Always report suspicious calls to 1930.";
                        showAlertPopup("🎉 Correct answer! Great job staying aware.", "success");
                    } else {
                        if (quizResultDiv) {
                            quizResultDiv.innerHTML = "❌ Oops! That's risky. Never share OTP with anyone. Stay alert!";
                            quizResultDiv.style.color = "#ef4444";
                        }
                        if (extraMsgDiv) extraMsgDiv.innerHTML = "⚠️ Remember: OTP is like a key to your digital locker. Keep it secret.";
                        showAlertPopup("⚠️ Incorrect. Never share OTP with anyone!", "error");
                    }
                });
            }

            // ======================== FEEDBACK STORAGE & DISPLAY ========================
            let feedbacks = [];

            function loadFeedbacks() {
                const stored = localStorage.getItem('cyberSmartFeedbacks');
                if (stored) {
                    feedbacks = JSON.parse(stored);
                } else {
                    feedbacks = [{
                            id: Date.now(),
                            name: "Rajesh Kumar",
                            email: "rajesh@example.com",
                            rating: 5,
                            message: "Great initiative! Very informative website. Helped my parents understand OTP frauds.",
                            date: new Date(Date.now() - 86400000).toLocaleString(),
                            adminReply: "Thank you Rajesh! We're glad to help. Keep spreading awareness!",
                            replyDate: new Date(Date.now() - 80000000).toLocaleString()
                        },
                        {
                            id: Date.now() + 1,
                            name: "Priya Singh",
                            email: "priya@example.com",
                            rating: 4,
                            message: "The quiz section is very helpful. Everyone should take it.",
                            date: new Date(Date.now() - 172800000).toLocaleString()
                        }
                    ];
                    saveFeedbacks();
                }
                displayFeedbacks();
            }

            function saveFeedbacks() {
                localStorage.setItem('cyberSmartFeedbacks', JSON.stringify(feedbacks));
            }

            function displayFeedbacks() {
                const feedbackList = document.getElementById('feedbackList');
                const feedbackCount = document.getElementById('feedbackCount');

                if (!feedbackList) return;

                if (feedbacks.length === 0) {
                    feedbackList.innerHTML = `
                <div class="empty-feedback text-center py-8 text-gray-400">
                    <i class="fas fa-inbox text-4xl mb-2"></i>
                    <p>No feedback yet. Be the first to share!</p>
                </div>
            `;
                    if (feedbackCount) feedbackCount.innerText = '0';
                    return;
                }

                if (feedbackCount) feedbackCount.innerText = feedbacks.length;

                // Show latest feedbacks first
                const latestFeedbacks = [...feedbacks].reverse();

                feedbackList.innerHTML = latestFeedbacks.map(feedback => `
            <div class="feedback-item">
                <div class="feedback-header">
                    <span class="feedback-name">
                        <i class="fas fa-user-circle text-cyan-500 mr-1"></i>
                        ${escapeHtml(feedback.name)}
                    </span>
                    <div class="feedback-rating">
                        ${generateStars(feedback.rating)}
                    </div>
                    <span class="feedback-date">${feedback.date || new Date().toLocaleString()}</span>
                </div>
                <div class="feedback-message">
                    <i class="fas fa-quote-left text-cyan-400 mr-1 text-xs"></i>
                    ${escapeHtml(feedback.message)}
                </div>
                ${feedback.adminReply ? `
                    <div class="admin-reply">
                        <i class="fas fa-reply-all text-green-500 mr-1"></i>
                        <strong>Admin Reply:</strong> ${escapeHtml(feedback.adminReply)}
                        <div class="text-xs text-gray-400 mt-1">${feedback.replyDate || ''}</div>
                    </div>
                ` : ''}
            </div>
        `).join('');
    }

    function generateStars(rating) {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars += '<i class="fas fa-star filled" style="color: #fbbf24;"></i>';
            } else {
                stars += '<i class="far fa-star empty" style="color: #d1d5db;"></i>';
            }
        }
        return stars;
    }

    function escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // ======================== RATING STARS FUNCTIONALITY ========================
    function initRatingStars() {
        const stars = document.querySelectorAll('.star-rating');
        const ratingInput = document.getElementById('contactRating');
        
        if (!stars.length) return;
        
        stars.forEach(star => {
            star.addEventListener('click', function() {
                const rating = parseInt(this.getAttribute('data-rating'));
                if (ratingInput) ratingInput.value = rating;
                
                stars.forEach(s => {
                    const starRating = parseInt(s.getAttribute('data-rating'));
                    if (starRating <= rating) {
                        s.classList.remove('far');
                        s.classList.add('fas');
                        s.classList.add('active');
                    } else {
                        s.classList.remove('fas');
                        s.classList.add('far');
                        s.classList.remove('active');
                    }
                });
            });
            
            star.addEventListener('mouseenter', function() {
                const rating = parseInt(this.getAttribute('data-rating'));
                stars.forEach(s => {
                    const starRating = parseInt(s.getAttribute('data-rating'));
                    if (starRating <= rating) {
                        s.classList.add('fas');
                        s.classList.remove('far');
                    }
                });
            });
            
            star.addEventListener('mouseleave', function() {
                const currentRating = parseInt(ratingInput ? ratingInput.value : 0);
                stars.forEach(s => {
                    const starRating = parseInt(s.getAttribute('data-rating'));
                    if (starRating <= currentRating) {
                        s.classList.add('fas');
                        s.classList.remove('far');
                    } else {
                        s.classList.remove('fas');
                        s.classList.add('far');
                    }
                });
            });
        });
    }

    // ======================== CONTACT FORM HANDLING ========================
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('contactName').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const message = document.getElementById('contactMsg').value.trim();
            const ratingInput = document.getElementById('contactRating');
            const rating = ratingInput ? parseInt(ratingInput.value) : 0;
            
            if (!name || !email) {
                showAlertPopup("Please fill name & email to submit feedback.", "error");
                if (formStatus) {
                    formStatus.innerText = "Name and email required.";
                    formStatus.style.color = "#ef4444";
                }
                return;
            }
            
            if (!email.includes('@')) {
                showAlertPopup("Please enter a valid email address.", "error");
                return;
            }
            
            if (!message) {
                showAlertPopup("Please write your feedback message.", "error");
                return;
            }
            
            if (rating === 0) {
                showAlertPopup("Please select a rating (1-5 stars).", "warning");
                return;
            }
            
            const newFeedback = {
                id: Date.now(),
                name: name,
                email: email,
                rating: rating,
                message: message,
                date: new Date().toLocaleString()
            };
            
            feedbacks.push(newFeedback);
            saveFeedbacks();
            displayFeedbacks();
            
            if (formStatus) {
                formStatus.innerText = "✅ Thank you, " + name + "! Your feedback has been posted!";
                formStatus.style.color = "#10b981";
            }
            showAlertPopup("📝 Feedback posted successfully!", "success");
            
            document.getElementById('contactName').value = '';
            document.getElementById('contactEmail').value = '';
            document.getElementById('contactMsg').value = '';
            
            if (ratingInput) ratingInput.value = '0';
            const stars = document.querySelectorAll('.star-rating');
            stars.forEach(star => {
                star.classList.remove('fas', 'active');
                star.classList.add('far');
            });
            
            setTimeout(() => {
                if (formStatus) formStatus.innerText = '';
            }, 4000);
        });
    }

    // ======================== ALERT POPUP FUNCTION ========================
    function showAlertPopup(message, type) {
        const existingToast = document.querySelector('.alert-toast');
        if (existingToast) existingToast.remove();

        const toast = document.createElement('div');
        toast.className = 'alert-toast';

        if (type === 'success') {
            toast.style.backgroundColor = '#10b981';
            toast.style.color = 'white';
            var icon = '<i class="fas fa-check-circle" style="margin-right: 10px;"></i>';
        } else if (type === 'error') {
            toast.style.backgroundColor = '#ef4444';
            toast.style.color = 'white';
            var icon = '<i class="fas fa-exclamation-triangle" style="margin-right: 10px;"></i>';
        } else {
            toast.style.backgroundColor = '#f59e0b';
            toast.style.color = 'white';
            var icon = '<i class="fas fa-info-circle" style="margin-right: 10px;"></i>';
        }

        toast.style.padding = '15px 20px';
        toast.style.borderRadius = '10px';
        toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
        toast.style.display = 'flex';
        toast.style.alignItems = 'center';
        toast.style.justifyContent = 'space-between';
        toast.style.gap = '15px';
        toast.style.fontWeight = '500';
        toast.style.position = 'fixed';
        toast.style.bottom = '30px';
        toast.style.right = '30px';
        toast.style.zIndex = '1000';
        toast.style.maxWidth = '350px';

        toast.innerHTML = `${icon}<span style="flex:1;">${message}</span><button onclick="this.parentElement.remove()" style="background:none; border:none; color:white; font-size:20px; cursor:pointer; margin-left:15px;">&times;</button>`;

        document.body.appendChild(toast);

        setTimeout(() => {
            if (toast && toast.remove) toast.remove();
        }, 4000);
    }

    // ======================== LOAD EVERYTHING ========================
    loadFeedbacks();
    initRatingStars();
    
    window.showAlertPopup = showAlertPopup;
    
    // Auto-refresh feedback display every 3 seconds
    setInterval(() => {
        loadFeedbacks();
    }, 3000);
    
});