---
title: friends
description: 
---

<!-- 
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
      integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
      crossorigin="anonymous" referrerpolicy="no-referrer" />



<div class="team-container">

  <div class="member-hcard">
    <div class="avatar-large">
      <img src="https://em-content.zobj.net/source/apple/391/whale_1f40b.png" alt="WH🐳">
    </div>
    <div class="info-section">
      <h2 class="name">WH🐳 (Whale 120)</h2>
      <p class="role">Team Founder</p>
      <p class="quote">"Web/Crypto Player"</p>
      <div class="tags">
        <span class="tag web"><i class="fas fa-globe"></i> Web</span>
        <span class="tag crypto"><i class="fas fa-key"></i> Crypto</span>
        <span class="tag penetration"><i class="fas fa-shield-alt"></i> Penetration</span>
      </div>
    </div>
    <div class="social-buttons">
      <a href="#" class="social-btn" target="_blank" rel="noopener" aria-label="Website">
        <i class="fas fa-globe"></i>
      </a>
      <a href="#" class="social-btn" target="_blank" rel="noopener" aria-label="GitHub">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </div>



</div>

<style>

:root {
  --bg-card: rgba(42, 52, 65, 0.7);
  --bg-card-hover: rgba(50, 60, 75, 0.8);
  --border-card: rgba(255, 255, 255, 0.1);
  --border-card-hover: rgba(255, 255, 255, 0.2);
  --bg-avatar: rgba(50, 65, 85, 0.6);
  --text-name: #ffffff;
  --text-role: #a0aec0;
  --text-quote: #94a3b8;
  --social-bg: rgba(50, 65, 85, 0.7);
  --social-color: #94a3b8;
  --social-hover-bg: rgba(70, 85, 105, 0.9);
  --social-hover-color: #ffffff;
  --gradient-overlay: rgba(255,255,255,0.05);
}

@media (prefers-color-scheme: light) {
  :root {
    --bg-card: #ffffff;
    --bg-card-hover: #f8fafc;
    --border-card: #e5e7eb;
    --border-card-hover: #cbd5e1;
    --bg-avatar: #f1f5f9;
    --text-name: #0f172a;
    --text-role: #64748b;
    --text-quote: #64748b;
    --social-bg: #f1f5f9;
    --social-color: #64748b;
    --social-hover-bg: #e2e8f0;
    --social-hover-color: #0f172a;
    --gradient-overlay: rgba(100,116,139,0.05);
  }
}

/* 強制深色（若使用者手動切換） */
.dark {
  --bg-card: rgba(42, 52, 65, 0.7) !important;
  --bg-card-hover: rgba(50, 60, 75, 0.8) !important;
  --border-card: rgba(255, 255, 255, 0.1) !important;
  --border-card-hover: rgba(255, 255, 255, 0.2) !important;
  --bg-avatar: rgba(50, 65, 85, 0.6) !important;
  --text-name: #ffffff !important;
  --text-role: #a0aec0 !important;
  --text-quote: #94a3b8 !important;
  --social-bg: rgba(50, 65, 85, 0.7) !important;
  --social-color: #94a3b8 !important;
  --social-hover-bg: rgba(70, 85, 105, 0.9) !important;
  --social-hover-color: #ffffff !important;
  --gradient-overlay: rgba(255,255,255,0.05) !important;
}

/* ==================== 卡片樣式 ==================== */
.team-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 3rem 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.member-hcard {
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--border-card);
  border-radius: 1.5rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.member-hcard::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(135deg, var(--gradient-overlay) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.member-hcard:hover {
  border-color: var(--border-card-hover);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
  background: var(--bg-card-hover);
}

.member-hcard:hover::before {
  opacity: 1;
}

.avatar-large {
  width: 90px;
  height: 90px;
  border-radius: 1.25rem;
  overflow: hidden;
  flex-shrink: 0;
  background: var(--bg-avatar);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--border-card);
}

.avatar-large img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.emoji-avatar {
  font-size: 3.2rem;
}

.info-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.name {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: var(--text-name);
  line-height: 1.2;
}

.role {
  font-size: 1rem;
  color: var(--text-role);
  margin: 0;
  font-weight: 500;
}

.quote {
  font-style: italic;
  color: var(--text-quote);
  margin: 0.25rem 0 0.75rem;
  font-size: 0.95rem;
}

.tags {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.tag {
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.tag i {
  font-size: 0.9rem;
}

.tag.web {
  background: rgba(37, 99, 235, 0.3);
  color: #60a5fa;
  border-color: rgba(37, 99, 235, 0.4);
}

.tag.crypto {
  background: rgba(147, 51, 234, 0.3);
  color: #c084fc;
  border-color: rgba(147, 51, 234, 0.4);
}

.tag.penetration {
  background: rgba(220, 38, 38, 0.3);
  color: #f87171;
  border-color: rgba(220, 38, 38, 0.4);
}

@media (prefers-color-scheme: light) {
  .tag.web {
    background: rgba(37, 99, 235, 0.15);
    color: #2563eb;
    border-color: rgba(37, 99, 235, 0.3);
  }
  .tag.crypto {
    background: rgba(147, 51, 234, 0.15);
    color: #9333ea;
    border-color: rgba(147, 51, 234, 0.3);
  }
  .tag.penetration {
    background: rgba(220, 38, 38, 0.15);
    color: #dc2626;
    border-color: rgba(220, 38, 38, 0.3);
  }
}

.tag:hover {
  transform: translateY(-1px);
  filter: brightness(1.15);
}

.social-buttons {
  display: flex;
  gap: 0.75rem;
}

.social-btn {
  width: 48px;
  height: 48px;
  border-radius: 1rem;
  background: var(--social-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--social-color);
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid var(--border-card);
  backdrop-filter: blur(4px);
}

.social-btn:hover {
  background: var(--social-hover-bg);
  color: var(--social-hover-color);
  
  border-color: var(--border-card-hover);
}

.social-btn i {
  font-size: 1.2rem;
  
}

/* 響應式 */
@media (max-width: 768px) {
  .member-hcard {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.25rem;
    text-align: center;
  }
  .avatar-large { width: 80px; height: 80px; }
  .emoji-avatar { font-size: 2.8rem; }
  .info-section { align-items: center; }
  .tags { justify-content: center; }
  .social-buttons { margin-top: 0.5rem; }
}

/* ==================== 深色切換按鈕（可選） ==================== */
.theme-toggle-container {
  text-align: right;
  margin: 1rem 0;
}

.theme-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);
}

.theme-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

@media (prefers-color-scheme: light) {
  .theme-btn {
    background: rgba(0, 0, 0, 0.1);
    color: #333;
    border-color: rgba(0, 0, 0, 0.2);
  }
  .theme-btn:hover {
    background: rgba(0, 0, 0, 0.15);
  }
}
</style>

<script>
// 可選：手動切換深色模式
document.getElementById('theme-toggle')?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  const icon = document.querySelector('#theme-toggle i');
  icon.classList.toggle('fa-moon', !isDark);
  icon.classList.toggle('fa-sun', isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// 載入時恢復使用者偏好
const saved = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (saved === 'dark' || (!saved && prefersDark)) {
  document.body.classList.add('dark-mode');
  const icon = document.querySelector('#theme-toggle i');
  if (icon) icon.classList.replace('fa-moon', 'fa-sun');
}
</script>
-->