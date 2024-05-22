// script 태그 javascript 입력제거
export function sanitizeInput(input) {
  return input.replace(/<script.*?>|<\/script>/gi, "");
}

// xss 방어
export function encodeHTML(input) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// CSP 설정
export function setContentSecurityPolicy(policy) {
  const metaTag = document.createElement("meta");
  metaTag.setAttribute("http-equiv", "Content-Security-Policy");
  metaTag.setAttribute("content", policy);
  document.head.appendChild(metaTag);
}
