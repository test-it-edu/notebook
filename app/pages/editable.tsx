import {FC, useEffect, useRef} from "react";


const EditablePage: FC = () => {

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(ref);
  }, [ref]);

  const onSelectionChange = (event: any) => {
    event.preventDefault();
    console.log(document.getSelection());

    console.log(ref.current);
  }

  return <div
    contentEditable
    suppressContentEditableWarning
    className="w-[21cm] mx-auto bg-slate-200 mt-8 p-8 rounded-sm">
    <div
      ref={ref}
      className="border-gray-900 border outline-none"
      suppressContentEditableWarning
      contentEditable={true}

      onSelect={onSelectionChange}
      placeholder={"/ demo"}
    >
      Demo
      <div contentEditable={false}>TEST</div>
      sdfasfda
    </div>
  </div>
}

export default EditablePage;