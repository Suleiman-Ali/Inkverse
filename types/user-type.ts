type TUser = {
  _id: string;
  name: string;
  email: string;
  password: string;
  image: string;
  role: 'admin' | 'user';
  active: boolean;
  createdAt: number;
};

export default TUser;
