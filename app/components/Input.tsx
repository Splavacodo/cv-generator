export default function Input(
    { inputId, inputType, inputPlaceholder, inputValue, onChangeHandler} : 
    { inputId: string, inputType: string, inputPlaceholder: string, inputValue: string, onChangeHandler: (event: React.ChangeEvent<HTMLInputElement, Element>) => void}) {

        {
            if (inputType === "text") {
                return (
                    <div className="relative w-1/3 mb-2">
                        <input 
                            type="text"
                            id={inputId}
                            className="peer w-full border-b-2 border-gray-400 bg-transparent px-2 pb-2 pt-4 text-sm outline-none transition-colors focus:border-blue-600"
                            placeholder=" "
                            onChange={onChangeHandler}
                            value={inputValue}
                        />
                        <label 
                            htmlFor={inputId}
                            className="absolute left-2 -top-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:-top-1 peer-focus:text-sm peer-focus:text-blue-600"
                        >
                            {inputPlaceholder}
                        </label>
                    </div>
                );
            }
            else if (inputType === "email") {
                return (
                    <div className="relative w-1/3 mb-2">
                        <input 
                            type="email"
                            id={inputId}
                            className="peer w-full border-b-2 border-gray-400 bg-transparent px-2 pb-2 pt-4 text-sm outline-none transition-colors focus:border-blue-600"
                            placeholder=" "
                            onChange={onChangeHandler}
                            value={inputValue}
                        />
                        <label 
                            htmlFor={inputId}
                            className="absolute left-2 -top-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:-top-1 peer-focus:text-sm peer-focus:text-blue-600"
                        >
                            {inputPlaceholder}
                        </label>
                    </div>
                );
            }
        }
}
