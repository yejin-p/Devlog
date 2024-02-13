import { useState } from 'react';

export default function Form() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status === 'success') {
        return <h1>넌 최고야</h1>
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextareaChange(e) {
        setAnswer(e.target.value);
    }

    return (
        <>
            <pre> 
                헤로롱은 문득 생각했다.
                슬슬 자신을 바꿀 때라고. 
                그 순간, 전신에 전기가 흘렀다! 

                위 설명에 올바른 펠은?
            </pre>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={answer}
                    onChange={handleTextareaChange}
                    disabled={status === 'submitting'}
                />
                <br />
                <button disabled={
                    answer.length === 0 ||
                    status === 'submitting'
                }>
                    Submit
                </button>
                {error !== null &&
                    <p className="Error">
                        {error.message}
                    </p>
                }
            </form>
        </>
    );
}
// 데이터 베이스에서 가져온 데이터와 비교한다고 가정해보자.
function submitForm(answer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer !== '핑피롱'
            if (shouldError) {
                reject(new Error('헤로롱에 대한 애정이 부족하군,, 반성해라'));
            } else {
                resolve();
            }
        }, 1000);
    });
}
