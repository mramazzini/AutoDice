import LoginForm from "../../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="w-full justify-center items-center h-screen flex flex-col">
      <h1 className="text-4xl font-bold ">Login</h1>
      <LoginForm />
    </div>
  );
}
