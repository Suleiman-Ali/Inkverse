export default function json(data: string | Record<string, any>) {
  const [status, payloadKey] =
    typeof data !== 'string' ? ['success', 'result'] : ['failure', 'message'];
  return { status, [payloadKey]: data };
}
