export default function serializeJson<T>(data: any): T {
  return JSON.parse(JSON.stringify(data));
}
