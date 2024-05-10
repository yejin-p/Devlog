
import React, { useState } from 'react';

export function MyFormState() {
  type code = {
    code: string
    codeName: string
  }
  const [codeInfos, setCodeInfos] = useState<code[]>([])
  const [updateText, setUpdateText] = useState("");

  const onSubmit = () => {
    console.log(codeInfos)
  }

  // 행을 추가 
  const addWork = () => {
    setCodeInfos([...codeInfos, {
      code: '',
      codeName: '',
    }])
  }

  // index 행을 가져와 연산 후 UPDATE
  const updateWork = (index: number) => {
    setUpdateText(codeInfos[index].code);
    setCodeInfos(codeInfos.map((code, i) => {
      if (i === index) {
        return {
          ...code,
          code: '',
          codeName: '',
        };
      } else {
        return code;
      }
    }))
  }
  // 제거하려는 index를 제외한 모든 배열의 요소를 필터링하여 반환
  const removeWork = (index: number) => {
    setCodeInfos(codeInfos.filter((code, i) => i !== index));
  }

  // Input Handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;
    setCodeInfos(codeInfos.map((code, i) => {
      if (i === index) {
        return {
          ...code,
          [name]: value
        };
      } else {
        return code;
      }
    }))
  }
  return (
    <>
      {codeInfos && codeInfos.map((code, index) => (
        <div key={index}>
          <input value={code.code} name="code" onChange={(event) => handleInputChange(event, index)} />
          <input value={code.codeName} name="codeName" onChange={(event) => handleInputChange(event, index)} />
          <button type="button" onClick={() => updateWork(index)}>Update</button>
          <button type="button" onClick={() => removeWork(index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={addWork}>Add</button>
      <button type="submit" onClick={onSubmit}>Submit</button>
      <div>
        {updateText}
      </div>
    </>
  );
}