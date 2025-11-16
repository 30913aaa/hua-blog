import { useState, useRef, useEffect } from "react";

export default function Player() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.4);

  const audioRef = useRef(null);
  const hasInteracted = useRef(false);
  const intentToPlay = useRef(false); // 切歌或結束時是否要自動播放

 const playlist = [
    { 
      title: "【IA】少年ブレイヴ - ᴗらては", 
      src: "/music/Shounen Brave - JIN (youtube).mp3",
      cover: "/covers/4a1c9e4e6d16036ef97fd974385f28d6.1000x1000x1.jpg"
    },
    { 
      title: "じん / カゲロウデイズ", 
      src: "/music/【手描き】カゲロウデイズ【自己解釈PV】 - natubate0258 (youtube).mp3",
      cover: "/covers/x3kx9q00dajs31qr_20120828223818_0860_0600.png"
    },
    { 
      title: "Dead and Seek - JIN", 
      src: "/music/Dead and Seek - JIN (youtube).mp3",
      cover: "/covers/3281158.jpg"
    },
    { 
      title: "じん / サマータイムレコード", 
      src: "/music/じん _ サマータイムレコード (IA)【OFFICIAL MUSIC VIDEO】 - IA PROJECT (youtube).mp3",
      cover: "/covers/af220ba37d6da5df8f54885167a821f9.740x740x1.png"
    },
    { 
      title: "じん / チルドレンレコード", 
      src: "/music/じん _ チルドレンレコード (IA)【OFFICIAL MUSIC VIDEO】 - IA PROJECT (youtube).mp3",
      cover: "/covers/image.png"
    },
  ];
  const music = playlist[currentIndex];

  // 手動切歌 → 記錄是否要自動播放
  const playNext = () => {
    intentToPlay.current = isPlaying; // 如果正在播，就自動播下一首
    setCurrentIndex((i) => (i + 1) % playlist.length);
  };
  const playPrev = () => {
    intentToPlay.current = true; // 上一首永遠自動播放（可依需求改）
    setCurrentIndex((i) => (i - 1 + playlist.length) % playlist.length);
  };

  // 歌曲自然結束 → 自動切到下一首 + 自動播放
  const handleSongEnd = () => {
    intentToPlay.current = true; // 關鍵：自然結束也要自動播放
    setCurrentIndex((i) => (i + 1) % playlist.length);
  };

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const playRandom = () => {
    const randomIndex = Math.floor(Math.random() * playlist.length);
    intentToPlay.current = true;
    setCurrentIndex(randomIndex);
  };

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    audio.currentTime = percentage * audio.duration;
  };

  const handleVolumeChange = (e) => {
    const audio = audioRef.current;
    if (!audio) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    setVolume(percentage);
    audio.volume = percentage * 0.5;
  };

  const tryAutoPlay = async () => {
    if (!audioRef.current || hasInteracted.current) return;
    try {
      audioRef.current.volume = 0.4 * 0.5;
      await audioRef.current.play();
      setIsPlaying(true);
      hasInteracted.current = true;
    } catch (err) {}
  };

  // 初始化
  useEffect(() => {
    if (!isInitialized) {
      playRandom();
      setIsInitialized(true);
      if (audioRef.current) audioRef.current.volume = 0.4 * 0.5;
      const timer = setTimeout(tryAutoPlay, 800);
      return () => clearTimeout(timer);
    }
  }, [isInitialized]);

  // 切歌 → load + 準備自動播放
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !isInitialized) return;

    const shouldAutoPlay = intentToPlay.current;

    const handleCanPlay = async () => {
      audio.volume = volume * 0.5;
      if (shouldAutoPlay && hasInteracted.current) {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (err) {
          console.log("自動播放失敗:", err);
        }
      }
    };

    audio.load();
    const canPlayHandler = () => handleCanPlay();
    audio.addEventListener("canplay", canPlayHandler);
    audio.addEventListener("ended", handleSongEnd); // 關鍵：自然結束切歌

    return () => {
      audio.removeEventListener("canplay", canPlayHandler);
      audio.removeEventListener("ended", handleSongEnd);
    };
  }, [currentIndex, isInitialized]);

  // 監聽播放狀態
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
    };
  }, []);

  // 暗黑模式
  useEffect(() => {
    const checkDark = () => {
      const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const htmlDark = document.documentElement.classList.contains("dark");
      setIsDark(darkMode || htmlDark);
    };
    checkDark();
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", (e) => setIsDark(e.matches));
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => {
      mq.removeEventListener("change", () => {});
      observer.disconnect();
    };
  }, []);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: isCollapsed ? "64px" : "420px",
        padding: isCollapsed ? "0" : "20px",
        borderRadius: isCollapsed ? "32px" : "16px",
        backdropFilter: "blur(20px)",
        background: isDark ? "rgba(32,32,35,0.85)" : "rgba(250,250,252,0.85)",
        border: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.08)",
        boxShadow: isDark ? "0 8px 32px rgba(0,0,0,0.6)" : "0 8px 32px rgba(0,0,0,0.12)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        zIndex: 9999,
        userSelect: "none",
      }}
    >
      {/* 收合 */}
      {isCollapsed && (
        <div onClick={toggleCollapse} style={{ height: "64px", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
          <div style={{ fontSize: "28px", color: isDark ? "#60a5fa" : "#3b82f6" }}>
            {isPlaying ? "♪" : "▷"}
          </div>
        </div>
      )}

      {/* 展開 */}
      {!isCollapsed && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <img src={music.cover} alt="cover" style={{ width: "64px", height: "64px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: "15px", fontWeight: "600", color: isDark ? "#e5e7eb" : "#1f2937", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", marginBottom: "4px" }}>
                {music.title}
              </div>
              <div style={{ fontSize: "13px", color: isDark ? "#9ca3af" : "#6b7280" }}>
                Vocaloid · {currentIndex + 1}/{playlist.length}
              </div>
            </div>
            <button
              onClick={() => setIsCollapsed(true)}
              style={{ border: "none", background: "transparent", fontSize: "20px", cursor: "pointer", color: isDark ? "#9ca3af" : "#6b7280", padding: "4px" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = isDark ? "#e5e7eb" : "#1f2937")}
              onMouseLeave={(e) => (e.currentTarget.style.color = isDark ? "#9ca3af" : "#6b7280")}
            >
              X
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div onClick={handleSeek} style={{ height: "4px", background: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)", borderRadius: "2px", cursor: "pointer", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: `${progress}%`, background: isDark ? "#60a5fa" : "#3b82f6", borderRadius: "2px", transition: "width 0.1s linear" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: isDark ? "#6b7280" : "#9ca3af" }}>
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <IconButton onClick={playPrev} isDark={isDark}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
              </IconButton>

              <IconButton
                onClick={async () => {
                  const audio = audioRef.current;
                  if (!audio) return;
                  hasInteracted.current = true;

                  if (isPlaying) {
                    audio.pause();
                  } else {
                    try {
                      await audio.play();
                      setIsPlaying(true);
                    } catch (err) {
                      console.log("播放失敗（需用戶交互）:", err);
                    }
                  }
                }}
                big
                isDark={isDark}
              >
                {isPlaying ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                )}
              </IconButton>

              <IconButton onClick={playNext} isDark={isDark}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>
              </IconButton>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: 1, maxWidth: "140px" }}>
              <div style={{ color: isDark ? "#9ca3af" : "#6b7280" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  {volume === 0 ? (
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                  ) : volume < 0.5 ? (
                    <path d="M7 9v6h4l5 5V4l-5 5H7z"/>
                  ) : (
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                  )}
                </svg>
              </div>
              <div onClick={handleVolumeChange} style={{ flex: 1, height: "4px", background: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)", borderRadius: "2px", cursor: "pointer", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: `${volume * 100}%`, background: isDark ? "#60a5fa" : "#3b82f6", borderRadius: "2px", transition: "width 0.1s linear" }} />
              </div>
              <div style={{ fontSize: "10px", color: isDark ? "#6b7280" : "#9ca3af", minWidth: "26px", textAlign: "right" }}>
                {Math.round(volume * 100)}%
              </div>
            </div>
          </div>
        </div>
      )}

      <audio ref={audioRef} src={music.src} preload="metadata" style={{ display: "none" }} />
    </div>
  );
}

function IconButton({ onClick, children, big, isDark }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: big ? "40px" : "32px",
        height: big ? "40px" : "32px",
        borderRadius: "50%",
        border: "none",
        background: "transparent",
        color: isDark ? "#d1d5db" : "#4b5563",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.2s",
        padding: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)";
        e.currentTarget.style.color = isDark ? "#f3f4f6" : "#1f2937";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.color = isDark ? "#d1d5db" : "#4b5563";
      }}
    >
      {children}
    </button>
  );
}
