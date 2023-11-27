import { useFormStatus } from 'react-dom';

interface SubmitButtonInterface {
    title: string;
    pending?: boolean;
}

const SubmitButton = ({ title }: SubmitButtonInterface) => {
    const { pending } = useFormStatus();

    return (
        <div>
            <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                area-disabled={pending ?? false}
            >
                {title}
            </button>
        </div>
    );
};

export default SubmitButton;