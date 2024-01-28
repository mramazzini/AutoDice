import LoginForm from '@/components/LoginForm';

export default function LoginPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Login</h1>
      <LoginForm />
    </div>
  );
}
