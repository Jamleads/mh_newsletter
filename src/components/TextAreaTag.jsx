/* eslint-disable react/prop-types */

const TextAreaTag = ({
  textareaName,
  labelTitle,
  textareaPlaceholder,
  textareaValue,
  textareaOnChange,
}) => {
  return (
    <div className="">
      <label htmlFor={textareaName} className="text-theGray2 mb-2 font-light">
        {labelTitle}
      </label>

      <div className="">
        <textarea
          id={textareaName}
          className="w-full px-5 py-3 border-[1px] border-primary-mainBlue h-[350px] rounded-xl resize-none border-terniary"
          maxLength={500}
          value={textareaValue}
          onChange={textareaOnChange}
          placeholder={textareaPlaceholder}
        ></textarea>
        <div className="absolute text-sm text-theGray2 bottom-2 right-2">
          {textareaValue?.length || 0}/{500}
        </div>
      </div>
    </div>
  );
};

export default TextAreaTag;
