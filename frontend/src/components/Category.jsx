import { useState, useCallback } from "react";

export default function Example() {
            const [count, setCount] = useState(0);

            const showAlert = () => {
                        alert("Button clicked!");
            };

            const memoizedShowAlert = useCallback(() => {
                        alert("Button clicked!");
            }, []);

            return (
                        <div>
                                    <p>Count: {count}</p>
                                    <button className="bg-black text-white py-3 rounded m-3 px-3" onClick={() => setCount(count + 1)}>Increase Count</button>

                                    <button className="bg-black text-white m-6 px-4 py-4 rounded" onClick={showAlert}>Without useCallback</button>
                                    <button className="bg-black text-white m-6 px-4 py-4 rounded" onClick={memoizedShowAlert}>With useCallback</button>
                        </div>
            );
}
