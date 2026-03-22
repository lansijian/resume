/** 将 /photo/文件名 转为可请求的 URL（编码空格与中文等） */
export function publicAssetUrl(path: string): string {
  if (!path.startsWith("/")) return path;
  const i = path.lastIndexOf("/");
  if (i < 0) return path;
  return path.slice(0, i + 1) + encodeURIComponent(path.slice(i + 1));
}
