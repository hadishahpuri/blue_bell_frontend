'use client';

import SubmitButton from '@/src/Components/Form/SubmitButton';
import TextInput from '@/src/Components/Form/TextInput';
import Link from 'next/link';
import { FormEvent } from 'react';

export default function Page() {
    async function signup(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_BASE_URL + '/auth/sign_in', {
            method: 'POST',
            body: formData
        });

        const data = await response.formData();
        console.log(data);
    }
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Create a new account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={signup}>
                        <TextInput name="email" id="email" title="email" type="email"></TextInput>
                        <TextInput name="password" id="password" title="password" type="password"></TextInput>
                        <SubmitButton title="Sign in"></SubmitButton>
                        {/* {!state.status && <p className="text-red-500">{state.message}</p>} */}
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already signed up?{' '}
                        <Link
                            href="/auth/login"
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}