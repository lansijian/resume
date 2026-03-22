/** 将 /photo/文件名 转为可请求的 URL（编码空格与中文等） */
export function publicAssetUrl(path: string): string {
  if (!path.startsWith("/")) return path;
  const baseUrl = import.meta.env.BASE_URL || "/";
  const i = path.lastIndexOf("/");
  if (i < 0) return path;
  const encodedPath = path.slice(0, i + 1) + encodeURIComponent(path.slice(i + 1));
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  return `${normalizedBase}${encodedPath.slice(1)}`;
}
