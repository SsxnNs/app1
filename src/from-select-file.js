import React from 'react';

export default function FromSelectFile() {
    const inputFile = React.useRef();
    const selectMaxNumFiles = React.useRef();
    const selectMaxFileSize = React.useRef();

    let maxNumfiles = [1, 2, 3, 4, 5];         
    let maxSizes = [50, 100, 200, 500, 1000];   

    const onClickButton = () => {
        let maxNumFiles = parseInt(selectMaxNumFiles.current.value);
        let maxSize = parseInt(selectMaxFileSize.current.value);

        if (inputFile.current.files.length > maxNumFiles) {
            alert(`เลือกได้ไม่เกิน ${maxNumFiles} ไฟล์`);
            return;
        }

        for (let f of inputFile.current.files) {
            if (f.size > maxSize * 1000) {
                alert(`ไฟล์ ${f.name} มีขนาดเกิน ${maxSize}KB`);
                return;
            }
        }

        alert('Files OK');
    };

    return (
        <div className="p-4" style={{ background: '#eef', width: '500px', margin: 'auto' }}>
            <div className="form-group mb-3">
                <label>เลือกจำนวนไฟล์สูงสุด:</label>
                <select ref={selectMaxNumFiles} className="form-control">
                    {maxNumfiles.map((num) => (
                        <option key={num} value={num}>{num}</option>
                    ))}
                </select>
            </div>

            <div className="form-group mb-3">
                <label>ขนาดไฟล์สูงสุด (KB):</label>
                <select ref={selectMaxFileSize} className="form-control">
                    {maxSizes.map((size) => (
                        <option key={size} value={size}>{size}</option>
                    ))}
                </select>
            </div>

            <div className="form-group mb-3">
                <label>เลือกไฟล์:</label>
                <input type="file" ref={inputFile} multiple className="form-control" />
            </div>

            <button className="btn btn-primary" onClick={onClickButton}>
                ตรวจสอบไฟล์
            </button>
        </div>
    );
}
