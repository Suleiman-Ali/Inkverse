export function successJson(data: any) {
  return { status: 'success', data };
}

export function failureJson(message: string) {
  return { status: 'fail', message };
}
