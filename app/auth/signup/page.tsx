import SubmitButton from "@/src/Components/Form/SubmitButton";
import TextInput from "@/src/Components/Form/TextInput";

export default function Signup() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create a new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <TextInput
              name="email"
              id="email"
              title="email"
              type="email"
            ></TextInput>
            <TextInput
              name="password"
              id="password"
              title="password"
              type="password"
            ></TextInput>
            <SubmitButton title="Sign in"></SubmitButton>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already signed up?{" "}
            <a
              href="/auth/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
