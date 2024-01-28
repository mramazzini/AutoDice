import SignupForm from '@/components/SignupForm';

export default function SignupPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="text-4xl font-bold ">Signup</h1>
      <SignupForm />
    </div>
  );
}
