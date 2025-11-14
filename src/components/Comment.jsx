import React, { useEffect, useRef } from "react";
import { init } from "@waline/client";
import "@waline/client/style";  // 引入 Waline CSS 樣式

export default function Comment({ path }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const walineInstance = init({
      el: containerRef.current,
      serverURL: "https://hua-comments.vercel.app/",   // 請改成你自己的服務 URL
      path: path || window.location.pathname,
      lang: "zh-TW",
      locale: { placeholder: "歡迎留言…" },
      dark: "auto",
      reaction: true,
      pageSize: 10,
      meta: ["nick", "mail", "link"],
      requiredMeta: ["nick"],
    });

    return () => {
      walineInstance.destroy();
    };
  }, [path]);

  return <div ref={containerRef} className="waline-container"></div>;
}
