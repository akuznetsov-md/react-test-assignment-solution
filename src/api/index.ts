export interface UserDTO {
  avatar: string;
  name: string;
}

type Response<T> = {
  data?: T;
  error?: string;
};

interface LoginRequest {
  email: string;
  password: string;
}

type LoginResponse = Response<UserDTO>;

export function login({
  email,
  password,
}: LoginRequest): Promise<LoginResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === "elon@mercdev.com" && password === "twitter") {
        resolve({ data: { avatar: "/elon.jpeg", name: "Elon Musk" } });
      } else {
        resolve({ error: "Incorrect email or password" });
      }
    }, 1000);
  });
}
